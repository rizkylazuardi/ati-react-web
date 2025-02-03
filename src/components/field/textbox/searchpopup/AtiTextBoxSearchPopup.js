import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Button, InputGroupText } from 'reactstrap';
import { Icon } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import AtiTextBox from './../default/AtiTextbox';
import AtiModals from './../../../modals/AtiModals';
import AtiTable from './../../../table/AtiTable';

/**
 * @author dennis.justine
 * @description component for create text box with search popup
 * @version 1.0
 */

let columns = [];
const dataKey = [];

class AtiTextBoxSearchPopup extends React.Component {
   state = {
      modalOpen: false,
      value: '',
      tempDataTable: [],
   };

   componentWillMount() {
      Object.keys(this.props.dataTable[0]).map((key) => {
         dataKey.push({
            label: key,
         });
         return null;
      });

      this.setState({ tempDataTable: this.props.dataTable });

      columns = this.props.columnsTable;
      const newObj = {
         title: 'Action',
         dataIndex: 'action',
         key: 'action',
         fixed: 'right',
         width: 150,
         render: (text, record) => this.renderAction(record),
      };
      if (this.props.actionColumn) {
         columns.push(newObj);
      }
   }

   pagination = () => ({
      size: 'default',
      showSizeChanger: true,
      position: this.props.paginationPosition,
      total: this.state.tempDataTable.length,
      onChange: (page, pageSize) => { },
      showTotal: (total, range) => `${range[0]}-${range[1]} of ${this.state.tempDataTable.length} items`,
      style: {
         backgroundColor: '#fff',
         padding: '15px',
      },
   });

   updateTable = (e) => {
      const searchVal = e.target.value.toLowerCase() || '';
      let array = [];
      for (let i = 0; i < dataKey.length; i += 1) {
         const tempArray = this.props.dataTable.filter(data => data[dataKey[i].label].toString().toLowerCase().includes(searchVal));
         if (array.length === 0) {
            array = tempArray;
         } else {
            array.concat(tempArray);
         }
      }
      this.setState({ tempDataTable: array });
   }

   renderRowClassName = (record, index) => {
      if (index % 2) {
         return 'second-row';
      }
      return 'first-row';
   }

   renderAction = record => (
      <Button
         onClick={() => {
            if (this.props.customAction) {
               this.props.customAction(record);
               this.setState({ modalOpen: !this.state.modalOpen, value: record[this.props.valueKeyTable] });
            } else {
               this.setState({
                  modalOpen: !this.state.modalOpen,
                  value: record[this.props.valueKeyTable],
               });
            }
         }}
      >
         {this.props.actionButtonBody}
      </Button >
   )

   render() {
      const {
         modalHeader,
         modalSize,
         modalFooter,
         modalClassName,
         modalBackdropClassName,
         modalWrapClassName,
         modalContentClassName,
         modalHeaderClassName,
         modalFooterClassName,
         modalBodyClassName,
         modalzIndex,
      } = this.props;

      const { rowClassName, pagination } = this.props;
      const rowClassNameAttr = rowClassName ?
         { rowClassName } : { rowClassName: this.renderRowClassName };
      const paginationAttr = pagination ? { pagination: this.pagination() } : { pagination: false };

      const { searchboxClassName, searchboxPlaceholder, searchboxSize } = this.props;
      return (
         <React.Fragment>
            <AtiTextBox
               {...this.props}
               addonPlacement="right"
               value={this.props.value ? this.props.value : this.state.value}
               readOnly
               events={{ onFocus: () => this.setState({ modalOpen: !this.state.modalOpen, tempDataTable: this.props.dataTable }) }}
               addon={
                  <InputGroup>
                     <Button onClick={() => this.setState({ modalOpen: !this.state.modalOpen, tempDataTable: this.props.dataTable })} >
                        <Icon type="search" />
                     </Button>
                  </InputGroup>
               }
            />
            <AtiModals
               isOpen={this.state.modalOpen}
               events={{ toggle: () => { this.setState({ modalOpen: !this.state.modalOpen }); } }}
               header={<div>{modalHeader}</div>}
               size={modalSize}
               footer={<div>{modalFooter}</div>}
               modalClassName={modalClassName}
               backdropClassName={modalBackdropClassName}
               wrapClassName={modalWrapClassName}
               contentClassName={modalContentClassName}
               headerClassName={modalHeaderClassName}
               footerClassName={modalFooterClassName}
               bodyClassName={modalBodyClassName}
               zIndex={modalzIndex}
            >
               <AtiTextBox
                  id="table-search-box"
                  name="table-search-box"
                  className={searchboxClassName}
                  type="text"
                  placeholder={searchboxPlaceholder}
                  size={searchboxSize}
                  events={{ onChange: this.updateTable }}
                  addonPlacement="right"
                  addon={
                     <InputGroupText>
                        <Icon type="search" />
                     </InputGroupText>
                  }
               />
               <AtiTable
                  rowKey={this.props.rowKeyTable}
                  id="content-table"
                  name="content-table"
                  className="content-table"
                  columns={columns}
                  dataSource={this.state.tempDataTable}
                  loading={this.props.loadingTable}
                  showHeader
                  bordered={false}
                  {...rowClassNameAttr}
                  {...paginationAttr}
                  events={
                     {
                        onChange: () => { },
                        onHeaderRow: (column, index) => { },
                        onRow: (record, rowIndex) => ({
                           onClick: () => {
                              if (!this.props.actionColumn) {
                                 if (this.props.customAction) {
                                    this.props.customAction(record);
                                    this.setState({ modalOpen: !this.state.modalOpen, value: record[this.props.valueKeyTable] });
                                 } else {
                                    this.setState({
                                       modalOpen: !this.state.modalOpen,
                                       value: record[this.props.valueKeyTable],
                                    });
                                 }
                              }
                           },
                        }),
                        onExpandedRowsChange: (expandedRows) => { },
                     }
                  }
               />
            </AtiModals>
         </React.Fragment>
      );
   }
}

AtiTextBoxSearchPopup.defaultProps = {
   label: undefined,
   className: undefined,
   placeholder: undefined,
   size: 'md',
   value: undefined,
   inputLength: undefined,
   showError: undefined,
   containerStyle: undefined,
   required: undefined,

   modalHeader: '',
   modalSize: 'lg',
   modalFooter: '',
   modalClassName: undefined,
   modalBackdropClassName: undefined,
   modalWrapClassName: undefined,
   modalContentClassName: undefined,
   modalHeaderClassName: undefined,
   modalFooterClassName: undefined,
   modalBodyClassName: undefined,
   modalzIndex: 1000,

   rowClassName: undefined,
   pagination: true,
   paginationPosition: 'bottom',
   actionColumn: true,
   actionButtonBody: 'Choose',
};

AtiTextBoxSearchPopup.propTypes = {
   /**
      * element id of textbox
      */
   id: PropTypes.string.isRequired,
   /**
      * element name of textbox
      */
   name: PropTypes.string.isRequired,
   /**
      * element type of textbox (text,password,email)
      */
   type: PropTypes.string.isRequired,
   /**
      * textbox label
      */
   label: PropTypes.string,
   /**
      * textbox additional / custom css class name
      */
   className: PropTypes.string,
   /**
      * textbox placeholder text
      */
   placeholder: PropTypes.string,
   /**
      * element size (sm, lg, md (default) )
      */
   size: PropTypes.string,
   /**
      * text value of textbox
      */
   value: PropTypes.string,
   /**
      * textbox minimum and maximal length, use json object (example : inputLength={{min:5,max:10}})
      */
   inputLength: PropTypes.object,
   /**
      * flag to indicate the textfield is valid or not (true=valid,false=invalid,blank=not yet validate)
      */
   showError: PropTypes.bool,
   /**
      * function when the textbox change
      */
   containerStyle: PropTypes.object,
   required: PropTypes.bool,


   /**
     corresponds to bootstrap's modal sizes.
     for example :
      size= {"lg"} will display modal with large size
      size={"sm"} will display modal with small size
      size={"md"} will display modal with medium size
      default value modal will filled with medium size.
     */
   modalSize: PropTypes.string,

   /**
      * modalHeaderClassName allows for custom UI modal header component, such as size header,color,padding, etc.
      */
   modalHeaderClassName: PropTypes.string,

   /**
      * modalBodyClassName allows for custom UI modal body component, such as size header,color,padding, etc.
      */
   modalBodyClassName: PropTypes.string,

   /**
      * modalFooterClassName allows for custom UI modal footer component, such as size header,color,padding, etc.
      */
   modalFooterClassName: PropTypes.string,

   /**
     The class name of the container of the modal dialog
     */
   modalWrapClassName: PropTypes.string,

   /**
      * An optional className for the modal element.
      */
   modalClassName: PropTypes.string,

   /**
      * An optional className for the modal backdrop element.
      */
   modalBackdropClassName: PropTypes.string,

   /**
      * An optional className for the modal content element.
      */
   modalContentClassName: PropTypes.string,

   // zIndex defaults to 1000.

   /**
     zIndex controls which components display on top of others. Normally, you don't use zIndex.
     zIndex value defaults to 1000.
     */
   modalzIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
   ]),
   modalHeader: PropTypes.element,
   modalFooter: PropTypes.element,


   /**
      * An optional className for the table row.
      */
   rowClassName: PropTypes.string,
   pagination: PropTypes.bool,
   paginationPosition: PropTypes.oneOf(['bottom', 'top']),
   actionColumn: PropTypes.bool,
   actionButtonBody: PropTypes.string,
   valueKeyTable: PropTypes.string.isRequired,
};

export default AtiTextBoxSearchPopup;
