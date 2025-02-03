import React, { Component } from 'react';
import { message } from 'antd';
import PropTypes from 'prop-types';
import AtiTable from './AtiTable';
import AtiButton from './../button/AtiButton';

class AtiTableForm extends Component {
    static propTypes = {
        className: PropTypes.string,
        loading: PropTypes.bool,
        bordered: PropTypes.bool,
        template: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string,
                name: PropTypes.string,
                component: PropTypes.element,
            })),
        defaultData: PropTypes.arrayOf(PropTypes.object),
        minimalRow: PropTypes.number,
    }

    static defaultProps = {
        className: '',
        loading: false,
        bordered: true,
        template: [],
        defaultData: [],
        minimalRow: 0,
    }
    
    state = {
        dataSource: [],
        maxRow: 0,
    }

    componentWillMount() {
        const { defaultData, template, loadFirstData } = this.props;
        let data = [];
        const id = this.state.maxRow;
        if (defaultData.length > 0) {
            data = this.buildData(defaultData);
        } else if (loadFirstData) {
                const obj = {};
                template.map((item) => {
                    obj[item.name] = '';
                });
                obj.key = `key${id}`;
                data.push(obj);
        }
        this.setState({ dataSource: data, maxRow: (defaultData.length || 1) });
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.defaultData !== this.props.defaultData) {
            const data = this.buildData(nextProps.defaultData);
            this.setState({ dataSource: data });
        }
    }

    buildData = (defaultData) => {
        const data = [];
        let id = this.state.maxRow;
        defaultData.map((item, index) => {
            const keys = item ? Object.keys(item) : [];
            const values = item ? Object.values(item) : [];
            const obj = {};
            for (let i = 0; i < keys.length; i += 1) {
                obj[keys[i]] = values[i];
            }
            obj.key = `key${id}`;
            data.push(obj);
            id += 1;
        });
        return data;
    }

    defaultColumn = {
        title: '#',
        dataIndex: 'id',
        key: 'id',
        render: (text, record, index) => (
            <span>
                {index + 1}
            </span>
        ),
    }

    deleteRow = (record, index) => {
        const { dataSource } = this.state;
        const { minimalRow, onChange } = this.props;
        if (dataSource.length <= minimalRow) {
            message.error(`Cannot delete, at least ${minimalRow} row data`);
        } else {
            const data = [...dataSource];
            // const idx = data.findIndex(item => item.key === record.key);
            const filter = data.filter(item => item.key !== record.key);
            this.setState({ dataSource: filter });
            if (onChange) onChange(filter);
        }
    }

    actionColumn = () => {
        const { dataSource } = this.state;
        const { actionTitle, renderAction, buttonDeleteText } = this.props;
        return ({
        title: actionTitle || 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, record, index) => {
            if (renderAction) {
                return renderAction(this.deleteRow, dataSource, record, index);
            }
            return (
                <span>
                    <AtiButton
                        type="danger"
                        size="small"
                        text={buttonDeleteText || 'delete'}
                        events={
                            {
                                onClick: () => {
                                    this.deleteRow(record, index);
                                },
                            }
                        }
                    />
                </span>
            );
        },
        });
    }

    addRow = () => {
        const { template, onAddRow, onChange } = this.props;
        const { dataSource } = this.state;
        const obj = {};
        const data = [...dataSource];
        template.map((item) => {
            obj[item.name] = '';
        });
        obj.key = `key${Math.floor(Math.random() * 100) + 1}`;
        data.push(obj);
        this.setState({ dataSource: data, maxRow: this.state.maxRow + 1 });
        if (onAddRow) onAddRow();
        if (onChange) onChange(data);
    }

    updateData = (data, value) => {
        const { dataSource } = this.state;
        const { onChange } = this.props;
        const source = [...dataSource];
        const idx = source.findIndex(item => item.key === data.key);
        source[idx][data.name] = value;
        this.setState({ dataSource: source });
        if (onChange) onChange(source);
    }

    columns = () => {
        const { template } = this.props;
        const dataColumn = [];
        dataColumn.push(this.defaultColumn);
        template.map((item, index) => {
            dataColumn.push({
                title: item.title,
                dataIndex: item.name,
                key: item.name,
                render: (text, record, idx) => {
                    const data = {
                        index: idx,
                        name: item.name,
                        key: record.key,
                        value: this.state.dataSource.filter(src => src.key === record.key)[0][item.name],
                    };
                    return (<span>{item.component(data, this.updateData)}</span>);
                },
            });
        });
        dataColumn.push(this.actionColumn());
        return dataColumn;
    }

    render() {
        const {
            className, loading, bordered, rowClassName, onRow, header, footer, emptyText,
        } = this.props;
        const { dataSource } = this.state;
        const rowClassNameAttr = rowClassName ?
                                    { rowClassName } : { };
        return (
            <React.Fragment>
                {header
                    ? header(dataSource, this.addRow)
                    : (
                        <AtiButton
                            type="primary"
                            text={this.props.buttonText || 'Add Row'}
                            events={
                                {
                                    onClick: () => {
                                        this.addRow();
                                    },
                                }
                            }
                        />
                    )
                }
                <AtiTable
                    id="table-form"
                    rowKey="id"
                    name="table-form"
                    className={className}
                    columns={this.columns()}
                    dataSource={this.state.dataSource}
                    loading={loading}
                    showHeader
                    bordered={bordered}
                    locale={
                        {
                            emptyText: emptyText(dataSource, this.addRow) || 'No Data Found',
                        }
                    }
                    {...rowClassNameAttr}
                    pagination={false}
                    events={
                        {
                            onChange: () => {},
                            onHeaderRow: (column, index) => {},
                            onRow,
                            onExpandedRowsChange: (expandedRows) => {},
                        }
                    }
                />
                {footer ? footer(dataSource, this.addRow) : null}
            </React.Fragment>
        );
    }
}

export default AtiTableForm;