import React from 'react';
import {connect} from 'react-redux';

//component
import PageName from './../component/PageName';
import {AtiTable,AtiTextbox} from 'ati-react-web';
import {Col,Row, Divider,Icon} from 'antd';
import * as action from './action/SytemConfigurationAction';
import { AppContext } from './../../App';
import * as StringUtils from 'voca';
import {notification } from 'antd';
import {  push } from 'react-router-redux'
import * as navigationAction from './../../store/action/NavigationAction';

//style
import './systemconfig.css';
import './../style.css';


class Main extends React.Component{

    openSuccessNotification = (message,description) => {
        notification.success({
          message: message,
          description:description,
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
            columns: [],
            count:0,
            tempDataSource: [],
            loading:false
        };
    }

    updateTable = (e) =>{
        const datas = this.state.tempDataSource;
        const searchVal = e.target.value.toLowerCase() || '';
        if(!StringUtils.isEmpty(searchVal)){
            const array = datas.filter((data) => {
                return data.groupName.toLowerCase().includes(searchVal) || data.name.toLowerCase().includes(searchVal) || data.value.toLowerCase().includes(searchVal);        
            });
            this.setState({dataSource:array});
            this.setState({count:array.length});
        }else{
            this.setState({dataSource:this.state.tempDataSource});
            this.setState({count:this.state.tempDataSource.length});
        }
    }

    sortData = (data1,data2,key) =>{
        if(data1[key] < data2[key]) return -1;
        if(data1[key] > data2[key]) return 1;
        return 0;
    }
    handleLoading = () =>{
        this.setState((prevState) => ({ loading: !prevState.loading }));
    }
    getDatas = () => {
        this.setState({ columns: this.createColumns() });
        this.handleLoading();
        this.props.fetchData(
            () => {
                this.setState({ dataSource: this.props.dataSource });
                this.setState({count:this.props.dataSource.length});
                this.setState({tempDataSource:this.props.dataSource});
                this.handleLoading();
            }
        );
    }

    renderAction = (record) =>{
        console.log(record);
        const link = '/modul/system/form/'+record.id;
        return (
            <span>
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    this.props.navigate(link)
                }} className="icon-link"><Icon type="eye" /></a>
                <Divider type='vertical'/>
                <a href="javascript:;" className='icon-delete'><Icon type="delete" /></a>
            </span>
        );
    }

    renderDate = (record) =>{
        var stringDate = 'NOT IDENTIFIED';

        if(record.createdTime != null){
            const date = new Date(record.createdTime);
            stringDate=date.toDateString();
        }
        
        return stringDate;
    }

    createColumns = () => {
        const columns = [{
            title: 'Created Time',
            dataIndex: 'createdTime',
            key:'createdTime',
            align:'left',
            fixed:false,
            render: (text,record) => this.renderDate(record),
            sorter:(a,b) => this.sortData(a,b,'groupName'),
          },{
            title: 'Group Name',
            dataIndex: 'groupName',
            key:'groupName',
            align:'left',
            fixed:false,
            sorter:(a,b) => this.sortData(a,b,'groupName'),
          }, {
            title: 'Configuration Name',
            dataIndex: 'name',
            key:'name',
            align:'left',
            fixed:false,
            sorter:(a,b) => this.sortData(a,b,'name'),
          }, {
            title: 'Configuration Value',
            dataIndex: 'value',
            key:'value',
            align:'left',
            fixed:false,
            sorter:(a,b) => this.sortData(a,b,'value'),
          }, {
            title: 'Action',
            dataIndex: 'action',
            key:'action',
            align:'center',
            fixed:'right',
            width: 150,
            render: (text,record) => this.renderAction(record)
          }];

          return columns;
    }

    componentDidMount() {
        this.getDatas();

        if(this.props.location.state !== undefined && this.props.location.state != null){
            if(this.props.location.state.name !== undefined && this.props.location.state.name != null){
                const mess = 'Edit Succesfully';
                const desc = 'Record ' + this.props.location.state.name + ' were successfully changed';
                this.openSuccessNotification(mess,desc);
            }
        }
    }

    render(){
        const authority = 'manage_system_config';
        const pageName = 'System Configuration Management';
        return(
            <AppContext.Consumer>
            {(context) => {
                return(
                <div style={{margin:'1em'}}>
                    <Row>
                        <Col span={24}>
                            <PageName id={'page-title'} name={'page-title'} title={pageName}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <div className='search-content'>
                                <AtiTextbox id={'table-search-box'} name={'table-search-box'}
                                    type="text" 
                                    placeholder={'Search for ...'}
                                    size={'sm'}
                                    events={{onKeyUp:this.updateTable}}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div>
                                <AtiTable
                                    rowKey={'id'}
                                    id={'content-table'} name={'content-table'}
                                    columns={this.state.columns}
                                    dataSource={this.state.dataSource}
                                    loading={this.state.loading}
                                    showHeader={true}
                                    bordered={true}
                                    footer={false}
                                    rowClassName={()=>'sysconfig-row'}
                                    pagination={{showSizeChanger:true,position:'bottom',total:this.state.count}}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            )}}
            </AppContext.Consumer>
        )
    }
}

const mapStateToProps = (state,props)=>{
    return { ...state.dataSourceSystemConfig };
}

const mapActionToProp = () => {
    return {
        ...action, ...navigationAction,
    };
}

export default connect(mapStateToProps,mapActionToProp())(Main);