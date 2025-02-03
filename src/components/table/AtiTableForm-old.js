
import React from 'react'
import 'antd/dist/antd.css'
import './form-table.css'
import { Table, Input, Button, Form } from 'antd'
import PropTypes from 'prop-types'

const FormItem = Form.Item
const EditableContext = React.createContext()

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
)

const EditableFormRow = Form.create()(EditableRow)

class EditableCell extends React.Component {
  state = {
    editing: false
  }

  componentDidMount() {
    if (this.props.editable) {
      document.addEventListener('click', this.handleClickOutside, true)
    }
  }

  componentWillUnmount() {
    if (this.props.editable) {
      document.removeEventListener('click', this.handleClickOutside, true)
    }
  }

  toggleEdit = () => {
    const editing = !this.state.editing
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus()
      }
    })
  }

  handleClickOutside = (e) => {
    const { editing } = this.state
    if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
      this.save()
    }
  }

  save = () => {
    const { record, handleSave } = this.props
    this.form.validateFields((error, values) => {
      if (error) {
        return
      }
      this.toggleEdit()
      handleSave({ ...record, ...values })
    })
  }

  render() {
    const { editing } = this.state
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      ...restProps
    } = this.props
    return (
      <td ref={node => (this.cell = node)} {...restProps}>
        {editable ? (
          <EditableContext.Consumer>
            {(form) => {
              this.form = form
              return (
                editing ? (
                  <FormItem style={{ margin: 0 }}>
                    {form.getFieldDecorator(dataIndex, {
                      rules: [{
                        required: true,
                        message: `${title} is required.`
                      }],
                      initialValue: record[dataIndex]
                    })(
                      <Input
                        ref={node => (this.input = node)}
                        onPressEnter={this.save}
                      />
                    )}
                  </FormItem>
                ) : (
                  <div
                    className='editable-cell-value-wrap'
                    style={{ paddingRight: 24 }}
                    onClick={this.toggleEdit}
                  >
                    {restProps.children}
                  </div>
                )
              )
            }}
          </EditableContext.Consumer>
        ) : restProps.children}
      </td>
    )
  }
}

class AtiTableForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dataSource: [],
      count: 0
    }
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource]
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) })
  }

  handleAdd = () => {
    /* const { count, dataSource } = this.state;
        this.setState({
          dataSource: [...dataSource, newData],
          count: count + 1,
        }); */
    //console.log('Add button is clicked')
  }

  handleSave = (row) => {
    const newData = [...this.state.dataSource]
    const index = newData.findIndex(item => row.key === item.key)
    const item = newData[index]
    newData.splice(index, 1, {
      ...item,
      ...row
    })
    this.setState({ dataSource: newData })
  }

  componentDidMount() {
    if (this.props.dataSource != null && this.props.dataSource !== 0) {
      this.setState({ dataSource: this.props.dataSource })
      this.setState({count: this.props.dataSource.length})
    }
  }

  render() {
    const { dataSource } = this.state
    const {columns, events, addButtonText, addButtonStyle, footer, header, loading,
      pagination, bordered, size, showAddButton, rowClassName} = this.props

    const handleAddFunc = events !== undefined && events.onAdd !== undefined && events.onAdd != null ? events.onAdd : this.handleAdd
    const handleSaveFunc = events !== undefined && events.onSave !== undefined && events.onSave != null ? events.onSave : this.handleSave

    const renderComponents = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    }

    const renderColumns = columns.map((col) => {
      if (!col.editable) {
        return col
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: handleSaveFunc
        })
      }
    })

    const renderAddButton = showAddButton ? <Button onClick={handleAddFunc} type='primary' style={addButtonStyle}> {addButtonText} </Button> : null

    return (
      <div>
        {renderAddButton}
        <Table
          components={renderComponents}
          rowClassName={rowClassName}
          bordered={bordered}
          dataSource={dataSource}
          columns={renderColumns}
          footer={footer}
          header={header}
          loading={loading}
          pagination={pagination}
          size={size}
        />
      </div>
    )
  }
}

AtiTableForm.defaultProps = {
  rowKey: 'key',
  rowSelection: null,
  size: 'small',
  loading: false,
  defaultExpandAllRows: false,
  bordered: true,
  expandedRowRender: null,
  footer: false,
  showHeader: true,
  expandedRowKeys: [],
  showAddButton: false,
  rowClassName: () => 'editable-row',
  pagination: {position: 'bottom'}
}

AtiTableForm.propTypes = {
/**
 * Shows a loading indicator while the contents of the table are being fetched
 */
  loading: PropTypes.bool,
  /**
 * Data record array to be displayed
 */
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
 * Columns of table
 */
  columns: PropTypes.arrayOf(PropTypes.shape({
    /**
     * className of this column
     */
    className: PropTypes.string,
    /**
     * Span of this column's title
     */
    colSpan: PropTypes.number,
    /**
     * Default order of sorted values: 'ascend' 'descend' null
     */
    defaultSortOrder: PropTypes.oneOf(['descend', 'ascend', null]),
    /**
     * set collumn editable or not
     */
    editable: PropTypes.bool.isRequired,
    /**
     * Set column to be fixed: 'left' 'right'
     */
    fixed: PropTypes.oneOf(['left', 'right', false]).isRequired,
    /**
     * Renderer of the table cell. The return value should be a ReactNode
     */
    render: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     * Display field of the data record, could be set like a.b.c
     */
    dataIndex: PropTypes.string.isRequired,
    /**
     * Unique key of this column
     */
    key: PropTypes.string,
    /**
     * Sort function for local sort, see Array.sort's compareFunction. If you need sort buttons only, set to true
     */
    sorter: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
    /**
     * specify how content is aligned 'left' | 'right' | 'center'
     */
    align: PropTypes.oneOf(['left', 'right', 'center']).isRequired,
    /**
     * specify width of the collumn
     */
    width: PropTypes.number
  })).isRequired,
  /**
 * Size of table default | middle | small
 */
  size: PropTypes.oneOf(['default', 'middle', 'small']),
  /**
 * Whether to show all table borders
 */
  bordered: PropTypes.bool,
  /**
 * Pagination config or Pagination, hide it by setting it to 'false'
 */
  pagination: PropTypes.object,
  /**
 * Row's className 'Function(record, index):string'
 */
  rowClassName: PropTypes.func,
  addButtonStyle: PropTypes.object,
  events: PropTypes.shape({
    /**
     * Callback executed when pagination, filters or sorter is changed 'Function(pagination, filters, sorter)'
     */
    onChange: PropTypes.func,
    /**
     * Set props on per row 'Function(record, index)'
     */
    onRow: PropTypes.func,

    onSave: PropTypes.func,

    onAdd: PropTypes.func
  }),

  /**
 * Table footer renderer
 */
  footer: PropTypes.object,
  showAddButton: PropTypes.bool,
  addButtonText: PropTypes.string
}

export default AtiTableForm
