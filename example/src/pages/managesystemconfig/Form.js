import React from 'react';
import {connect} from 'react-redux';

//component
import PageName from './../component/PageName';
import {AtiSelectBox, AtiForm, AtiDatePicker, AtiTextbox, AtiButton, AtiErrorMessage, AtiFieldError, AtiCheckboxGroup} from 'ati-react-web';
import {withPocketRemoteService} from './../../service/invoke/PocketRemoteService';
import {Col,Row, Divider,Icon} from 'antd';
import * as action from './action/SytemConfigurationAction';
import { AppContext } from './../../App';
import {browserHistory, Redirect } from 'react-router'
import {  push } from 'react-router-redux'
import * as StringUtils from 'voca';
import showResults from "./form/ShowResult";
import * as navigationAction from './../../store/action/NavigationAction';

import {injectIntl, FormattedMessage} from 'react-intl';
import messages from './messages';

//style
import './systemconfig.css';
import './../style.css';
import { Spin } from 'antd';
import {AtiField, AtiForm as MyReduxForm} from 'ati-reduxform-web';
import { locale_en } from 'react-intl/locale-data/en';

var moment = require('moment');

class Form extends React.Component{
    
    state = {
        objectData : {
            id:0,
            groupName:'',
            name:'',
            value:'',
            createdTime:moment(),
            updatedTime:moment(),
        },
        testValue: null,
        configSetting: null,
        username: null,
        error: null,
        readonly : false,
        loading : false,
        hobby:['Football'],
        currency: null
    }

    onTestChange = (e) => {
        this.setState({testValue: e.target.value})
    }

    onConfigSettingChange = (e) => {
        this.setState({configSetting: e.target.value})
    }

    handleReduxSubmit = (e, values) => {
        e.preventDefault();
        return false;
    }

    reduxFormSubmit = (values) => {
        window.alert(JSON.stringify(values, null, 2))
    }

    handleReadonly = () =>{
        this.setState((prevState) => ({ readonly: !prevState.readonly }));
    }

    handleLoading = () =>{
        this.setState((prevState) => ({ loading : !prevState.loading }));
    }

    handleSumbit = () => {
        //this.handleLoading();
        const simpleData = {
            id:this.state.objectData.id,
            groupName:this.state.objectData.groupName,
            name:this.state.objectData.name,
            value:this.state.objectData.value,
        };

        this.props.postData(
            this.props.pocketRemoteService,
            simpleData,
            () => {
                this.props.router.push({
                    pathname: '/system',
                    state: {
                        name: this.props.objectData.name,
                    }
                  })
            }
        );
    }

    handleCancel = () =>{
        this.props.navigate('/modul/system');
    }

    handleValueChange = (e) =>{
        const oldData = this.state.objectData;
        oldData.value=e.target.value;
        this.setState({objectData:oldData});
    }

    componentWillMount(){
        this.props.pocketRemoteService.refreshCsrfToken();
    }

    componentDidMount() {
        this.handleLoading();
        const {match} = this.props;
        this.props.fetchDataById(match.params.id,
            () => {
                this.setState({objectData:this.props.objectData});
                this.setState((prevState) => ({ createdTime: moment(prevState.objectData.createdTime) }));
                this.setState((prevState) => ({ updatedTime: moment(prevState.objectData.updatedTime) }));
                this.handleLoading();
            }
        );
    }
    //FORM VALIDATION EACH FIELDS
    validate = values => {
        const errors = {}
        if (!values.configvalue) {
          errors.configvalue = 'Required'
        } else if (values.configvalue.length > 15) {
          errors.configvalue = 'Must be 15 characters or less'
        }
        if(!values.configsetting){
            errors.configsetting = 'wajib isi'
        }
        
        if(!values.hobby){
            errors.hobby = 'wajib pilih minimal 1'
        }
        if(values.hobby){
            if(values.hobby.length == 0){
                errors.hobby = 'wajib pilih minimal 1'
            }
        }

        if(!values.currency){
            errors.currency = 'Required'
        }
        if(values.currency){
            if(values.currency.length == 0){
                errors.currency = 'Required'
            }
        }
        /* if (!values.email) {
          errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address'
        }
        if (!values.age) {
          errors.age = 'Required'
        } else if (isNaN(Number(values.age))) {
          errors.age = 'Must be a number'
        } else if (Number(values.age) < 18) {
          errors.age = 'Sorry, you must be at least 18 years old'
        } */
        return errors
      }

      //SINGLE FIELD VALIDATION
    required = value => (value || typeof value === 'number' ? undefined : 'Required')
    maxLength = max => value =>
        value && value.length > max ? `Must be ${max} characters or less` : undefined
    maxLength15 = this.maxLength(15)
      
      warn = values => {
        const warnings = {}
        if (values.age < 19) {
          warnings.age = 'Hmm, you seem a bit young...'
        }
        return warnings
      }

    render(){
        const authority = 'manage_system_config';
        const pageName = 'System Configuration Data';
        const { formatMessage, formatDate } = this.props.intl;
        return(
            <div style={{margin:'1em'}}>
                    {/* <Spin spinning={this.state.loading}> */}
                    <AtiForm
                        events = {{onSubmit : this.handleSumbit}}
                    >
                        <Row>
                            <Col span={24}>
                                <PageName id={'page-title'} name={'page-title'} title={<FormattedMessage {...messages.header} />}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}  offset={1}>
                                <div className='form-content'>
                                    <AtiTextbox id={'groupName'} name={'groupName'}
                                        type="text" 
                                        placeholder={formatMessage(messages.inputGroupName)}
                                        size={'md'}
                                        readonly
                                        label={<FormattedMessage {...messages.inputGroupName} />}
                                        value={this.state.objectData.groupName}
                                    />
                                </div>
                            </Col>
                            <Col span={6} offset={2}>
                                <div className='form-content'>
                                    <AtiDatePicker id={'createdTime'} name={'createdTime'}
                                        placeholder={formatMessage(messages.inputCreatedTime)}
                                        dateFormat={'YYYY-MM-DD HH:mm:ss'} 
                                        size={'md'}
                                        locale={'id'}
                                        readonly
                                        label={<FormattedMessage {...messages.inputCreatedTime} />}
                                        value={this.state.objectData.createdTime}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}  offset={1}>
                                <div >
                                    <AtiTextbox id={'name'} name={'name'}
                                        type="text" 
                                        placeholder={formatMessage(messages.inputName)}
                                        size={'md'}
                                        readonly
                                        label={<FormattedMessage {...messages.inputName} />}
                                        value={this.state.objectData.name}
                                    />
                                </div>
                            </Col>
                            <Col span={6} offset={2}>
                                <div>
                                    <AtiDatePicker id={'updatedTime'} name={'updatedTime'}
                                        placeholder={formatMessage(messages.inputUpdatedTime)}
                                        dateFormat={'YYYY-MM-DD HH:mm:ss'} 
                                        size={'md'}
                                        locale={'id'}
                                        readonly
                                        label={<FormattedMessage {...messages.inputUpdatedTime} />}
                                        value={this.state.objectData.updatedTime}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={14}  offset={1}>
                                <div>
                                    <AtiTextbox id={'configValue'} name={'configValue'}
                                        placeholder={formatMessage(messages.inputValue)}
                                        type="text" 
                                        label={<FormattedMessage {...messages.inputValue} />}
                                        value={this.state.objectData.value}
                                        events={{onChange:this.handleValueChange}}
                                        readonly={this.state.readonly}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={10}>
                            <Col span={2}  offset={1}>
                                <div>
                                    <AtiButton type={'submit'}
                                        id={'submitButton'}
                                        name={'submitButton'}
                                        size={'md'}
                                        block={true}
                                        color={'warning'}
                                        text={'Submit'}
                                    />
                                </div>
                            </Col>
                            <Col span={2}>
                                <div>
                                    <AtiButton type={'button'}
                                        id={'cancelButton'}
                                        name={'cancelButton'}
                                        size={'md'}
                                        block={true}
                                        color={'danger'}
                                        text={'Cancel'}
                                        events = {{onClick:this.handleCancel}}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </AtiForm>
                    <MyReduxForm
                        onSubmit={showResults}
                        formId="pretetForm"
                        validation={this.validate}
                        warn={this.warn}
                    >
                        <AtiField
                            name="configvalue"
                        >
                            <Row>
                                <Col span={6}  offset={1}>
                                    <AtiTextbox id={'configValue'} name={'configValue'}
                                        placeholder={formatMessage(messages.inputValue)}
                                        type="text" 
                                        label={<FormattedMessage {...messages.inputValue} />}
                                        containerStyle={{marginBottom:0}}
                                    />
                                </Col>
                                <Col span={4}>
                                    <AtiFieldError style={{color: 'red', display: 'block', marginTop: '37px'}} />
                                </Col>
                            </Row>
                        </AtiField>
                        
                        <AtiField
                            name="configsetting"
                        >
                            <Row>
                                <Col span={6}  offset={1}>
                                    <AtiTextbox id={'configSetting'} name={'configSetting'}
                                        placeholder={"Config setting"}
                                        type="text" 
                                        label={"Config Setting"}
                                    />
                                </Col>
                                <Col span={4}>
                                    <AtiFieldError style={{color: 'red', display: 'block', marginTop: '37px'}} />
                                </Col>
                            </Row>
                        </AtiField>
                        <AtiField
                            name="username"
                            validate={[this.required, this.maxLength15]}
                        >
                            <Row>
                                <Col span={6}  offset={1}>
                                    <AtiTextbox id={'username'} name={'username'}
                                        placeholder={"User Name"}
                                        type="text" 
                                        label={"User Name"}
                                    />
                                </Col>
                                <Col span={4}>
                                    <AtiFieldError style={{color: 'red', display: 'block', marginTop: '37px'}} />
                                </Col>
                            </Row>
                        </AtiField>
                        <AtiField
                            name="hobby"
                        >
                            <Row>
                                <Col span={6} offset={1}>
                                    <span>Hobby :  </span>
                                    <AtiCheckboxGroup
                                        dataSource={
                                            [
                                                { label: 'Football', value: 'Football' },
                                                { label: 'Volley', value: 'Volley' },
                                                { label: 'Fitness', value: 'Fitness' }
                                            ]
                                        }
                                        events={{onChange: (data) => {
                                            this.setState({hobby: JSON.stringify(data)})
                                        }}}
                                    />
                                </Col>
                                <Col span={4}>
                                    <AtiFieldError style={{color: 'red', display: 'block', marginTop: '22px'}} />         
                                </Col>
                            </Row>
                        </AtiField>
                        <AtiField
                            name="currency"
                        >
                            <Row>
                                <Col span={6} offset={1}>
                                <AtiSelectBox id={'mataUang'} name={'mataUang'}
                                    label={'Mata Uang'}
                                    placeholder={'Pilih mata uang ..'}
                                    data={[
                                        { label: 'USD', value: 'USD' },
                                        { label: 'IDR', value: 'IDR' },
                                        { label: 'SGD', value: 'SGD' }
                                      ]}
                                    events={
                                    {
                                        onItemChanged: (values) => {
                                            this.setState({currency: values})
                                        }
                                    }}
                                    value={this.state.currency}
                                    searchable={true}
                                    clearable={true}
                                    showSpinner={false}
                                    disabled={false}
                                    multi={false}
                                    noResultsText={'data not found'}
                                />
                                </Col>
                                <Col span={4}>
                                <AtiFieldError style={{color: 'red', display: 'block', marginTop: '34px'}} />         
                                </Col>
                            </Row>
                        </AtiField>
                        <Row gutter={10}>
                            <Col span={2}  offset={1}>
                                <div>
                                    <AtiButton type={'submit'}
                                        id={'submitButton'}
                                        name={'submitButton'}
                                        size={'md'}
                                        block={true}
                                        color={'warning'}
                                        text={'Submit'}
                                    />
                                </div>
                            </Col>
                            <Col span={2}>
                                <div>
                                    <AtiButton type={'button'}
                                        id={'cancelButton'}
                                        name={'cancelButton'}
                                        size={'md'}
                                        block={true}
                                        color={'danger'}
                                        text={'Cancel'}
                                        events = {{onClick:this.handleCancel}}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </MyReduxForm>
                    {/* </Spin> */}
                </div>
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

export default withPocketRemoteService(injectIntl(connect(mapStateToProps,mapActionToProp())(Form)));