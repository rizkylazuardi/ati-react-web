import React from 'react';
import {AtiTable,AtiTableForm} from 'ati-react-web';
import { Table , Button} from 'antd';
import {Popconfirm} from 'antd';
import axios from 'axios';
import {  push } from 'react-router-redux'
import request from './../../../service/invoke/request';
import * as navigationAction from './../../../store/action/NavigationAction';
import {connect} from 'react-redux'
import 'antd/dist/antd.css';

class TableComponent extends React.Component{

    state = {
        dataSource : [],
        loading: false,
    };

    getData = () =>{
        const mockData = [];
       this.setState({loading : true})
       request (
        'http://10.50.51.60:8196/pocket-rest/api/user/get/all',
        'GET',
        null,
        {
            "Content-Type": "application/json"
        },
        (response) => {
            const pagination = { ...this.state.pagination };
            pagination.total = response.data.response.length;
            response.data.response.map((user,i) => {
                const data = {
                    key : i.toString(),
                    name: user.firstName,
                    email: user.email,
                    phone: user.email,
                };
                mockData.push(data);
            })
            this.setState({
                dataSource : mockData, 
                loading : false,
                pagination,
            })
            // onSuccess();
        },
        (error) => {
            //handle error
        }
       )
        // axios({
        //     method: 'GET',
        //     url: 'http://10.50.51.60:8196/pocket-rest/api/user/get/all',
            
        //     data : null,
        //       headers: {
        //         "Content-Type": "application/json"
        //     },
        //     responseType : 'json'
        // })
        // .then(response => {
        //     const pagination = { ...this.state.pagination };
        //     pagination.total = response.data.response.length;
        //     response.data.response.map((user,i) => {
        //         const data = {
        //             key : i.toString(),
        //             name: user.firstName,
        //             email: user.email,
        //             phone: user.msisdn,
        //         };
        //         mockData.push(data);
        //     })
        //     console.log(mockData);
        //     this.setState({
        //         dataSource : mockData, 
        //         loading : false,
        //         pagination,
        //     })
        // }).catch(error => {
        //     console.log('aaa');
        // });
    }

    componentDidMount(){
        this.getData();
    }

    handleAdd = () => {
        const newDataSource = this.state.dataSource
        const length = this.state.dataSource.length+1
        const newData = {
            key: length.toString(),
            name:'New Data',
            email: '0',
            phone: 'New Address',
        }
        newDataSource.push(newData)
        this.setState({dataSource:newDataSource})
    }

    sortData = (data1,data2,key) =>{
        if(data1[key] < data2[key]) return -1;
        if(data1[key] > data2[key]) return 1;
        return 0;
    }

    render(){

        //const dataSource = getMockData(7);

        const handleDelete = (key) => {
            const filterDataSource = this.state.dataSource
            const params = {
                key:'key'
            }
            filterDataSource.some(function(item, index) {
                return (filterDataSource[index][params.key] === key) ? !!(filterDataSource.splice(index, 1)) : false;
            });
            this.setState({dataSource:filterDataSource})
        }

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            fixed:false,
            sorter:(a,b) => this.sortData(a,b,'name'),
            defaultSortOrder:null,
            align:'left',
            editable:true,
        }, {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            fixed:false,
            sorter: false,
            defaultSortOrder:null,
            align:'left',
            editable:true,
        }, {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            fixed:false,
            sorter:false,
            defaultSortOrder:null,
            align:'left',
            editable:false
        }, {title: 'operation',
        dataIndex: 'operation',
        key: 'operation',
        editable:false,
        fixed:false,
        sorter:false,
        defaultSortOrder:null,
        align:'left',
        render: (text, record) => {
            return (
                this.state.dataSource.length > 1
                ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                    <a href="javascript:;">Delete</a>
                </Popconfirm>
                ) : null
            );
        },
        }];

        return (
            <div style = {{padding : '20px'}}>
                <h3>User Management</h3>
                <hr/>
                <Button type="primary" htmlType="submit" >
                            <a href="#" onClick= {this.props.navigate("/modul/adduser")}> Add User </a>
                        </Button>
                <AtiTable
                    // addButtonText='Add Row'
                    // showAddButton = {true}
                    loading={this.state.loading}
                    // events={
                    //     {
                    //         onAdd:this.handleAdd
                    //     }
                    // }
                    columns={columns}
                    dataSource={this.state.dataSource}
                    // showHeader={false}
                    bordered={true}
                    pagination={{ pageSize: 10 }} 
                    // scroll={{ y: 240 }}
                />
            </div>
            // this.renderTable()
        );
    }
}

const mapStateToProps = (state, props) => {
    const { menu  } = state;
    return { ...menu };
}

const mapActionToProp = () => {
    return {
        ...navigationAction,
    };
}

export default connect(mapStateToProps, mapActionToProp())(TableComponent);