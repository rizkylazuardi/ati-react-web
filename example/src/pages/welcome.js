import React from 'react';
import AtiTextbox from './../components/field/textbox/default/AtiTextbox';
 import {connect} from 'react-redux';
import { Container, Row, Col, Form, FormGroup, Label } from 'reactstrap';
//import AtiCheckbox from './../components/field/checkbox/AtiCheckbox';
import AtiCheckbox from './../components/field/check-box/AtiCheckbox';
import AtiCheckboxGroup from './../components/field/checkbox/AtiCheckboxGroup';
import AtiListCheckBox from './../components/field/checkbox/AtiListCheckBox';
import AtiTextAreaField from './../components/field/textbox/textarea/AtiTextAreaField';
import AtiButton from './../components/button/AtiButton';
import AtiSelectBox from './../components/field/selectbox/AtiSelectBox';
import {UPDATE_ABILITY, CHANGE_SELECTED, BARANG_SELECTED,ALERT_TOGGLE,TAB_CHANGE,STEP_CHANGE, LOAD_MORE, LOADING_MORE_TOGGLE, LOAD_INFINITE, LOADING_INFINITE_TOGGLE} from './../store/action';
import AtiAlertBox from './../components/alert/AtiAlertBox';
import AtiDatePicker from './../components/field/datepicker/AtiDatePicker';
import AtiProgressBar from './../components/progressbar/progressbar/AtiProgressBar';
import AtiMultiProgressBar from './../components/progressbar/multiprogressbar/AtiMultiProgressBar'
import AtiRadioButton from './../components/field/radio/AtiRadioButton';
import AtiModals from './../components/modals/AtiModals';
import AtiTabsGroup from './../components/tabs/AtiTabsGroup';
import { Tabs, Icon, List, Avatar, Button, Spin  } from 'antd';
import AtiMultiStep from './../components/multistep/AtiMultiStep';
import AtiFileUpload from './../components/field/fileupload/AtiFileUpload';
import AtiCollapse from './../components/collapse/AtiCollapse';
import AtiList from './../components/list/AtiList';
import AtiCarousel from './../components/carousel/AtiCarousel';
import AtiEditor from './../components/editor/AtiEditor';
import ContentLoader from "react-content-loader";
import axios from 'axios';
import AtiDashboard from './../components/dashboard/AtiDashboard';
import AtiDashboardItem from './../components/dashboard/AtiDashboardItem';
import AtiBadgeNumber from './../components/badge/AtiBadgeNumber';
import baseRequest from './../service/baseRequest';
const TabPane = Tabs.TabPane;


const dataSource = [
    {id:"chk1",value:'renang', label:'Renang'},
    {id:"chk2",value:'sepakbola', label:'Sepak Bola'},
    {id:"chk3",value:'volley', label:'Volley'},
    {id:"chk4",value:'ngoding', label:'Coding'},
];



const onSelectChanged = (items,dispatch)=>{
    dispatch({type:CHANGE_SELECTED,payload:{value:items}});
}

const onBarangChanged = (items,dispatch)=>{
    dispatch({type:BARANG_SELECTED,payload:{value:items,showAlert:true}});
}

const onItemChanged = (items)=>{
    //handle here
}

const onToggle = (dispatch)=>{
    dispatch({type:ALERT_TOGGLE,payload:{showAlert:false}});
}

const isValidDate = function( current ){
    return current.day() !== 0 && current.day() !== 6;
}; 

const dataSourceTabs = [
    { title: 'Tab 1', key: 'tab1', icon:'apple', tabContent:<div>This Tab 1 Content</div> },
    { title: 'Tab 2', key: 'tab2', tabContent:<div>This Tab 2 Content</div> },
    { title: 'Tab 3', key: 'tab3', tabContent:<div>This Tab 3 Content</div>, closable: true },
    { title: 'Tab 4', key: 'tab4', tabContent:<div>This Tab 4 Content</div> },
    { title: 'Tab 5', key: 'tab5', tabContent:<div>This Tab 5 Content</div> },
];

const onTabChange = (key,dispatch)=>{
    dispatch({type:TAB_CHANGE,payload:{tabKey:key}});
}

const multiStepSource = [
    {title: '', icon: <span>Pretet</span>, description:'desc 1', stepContent: <span>Registration</span>},
    {title: 'Full Registration', icon: <Icon type="apple" />, description:'desc 2', stepContent: <span>Full Registration</span>},
    {title: 'Account Security', icon: <Icon type="apple" />, description:'desc 3', stepContent: <span>Account Security</span>},
];

const dataPanel = [
    {header: 'Panel 1', key: '1', style:{}, disabled: true, showArrow: true, text:<p>This is Content of panel 1</p>},
    {header: 'Panel 2', key: '2', style:{}, showArrow: true, text:<p>This is Content of panel 2</p>},
    {header: 'Panel 3', key: '3', style:{}, showArrow: false, text:<p>This is Content of panel 3</p>},
    {header: 'Panel 4', key: '4', style:{}, showArrow: true, text:<p>This is Content of panel 4</p>},
];

const dataBasicList = [
    {title: 'Title 1'},
    {title: 'Title 2'},
    {title: 'Title 3'},
    {title: 'Title 4'},
    {title: 'Title 5'},
];
const dataBasicList2 = [
    {title: 'Title 1', description: 'Hi good people, this is description of title 1'},
    {title: 'Title 2', description: 'Hi good people, this is description of title 2'},
    {title: 'Title 3', description: 'Hi good people, this is description of title 3'},
    {title: 'Title 4', description: 'Hi good people, this is description of title 4'},
    {title: 'Title 5', description: 'Hi good people, this is description of title 5'},
];
const dataAvatarList = [
    {title: 'Title 1',avatar:<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />, description: 'Hi good people, this is description of title 1'},
    {title: 'Title 2',avatar:<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />, description: 'Hi good people, this is description of title 2'},
    {title: 'Title 3',avatar:<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />, description: 'Hi good people, this is description of title 3'},
    {title: 'Title 4',avatar:<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />, description: 'Hi good people, this is description of title 4'},
    {title: 'Title 5',avatar:<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />, description: 'Hi good people, this is description of title 5'},
];

const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  ); 

const dataArticleList = [];
for (let i = 0; i < 23; i++) {
dataArticleList.push({
    title: <a href='http://ant.design'>News and Article {i}</a>,
    avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    actions: [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />],
    extra: <img width={272} alt="logo" src="http://teknologibank.com/upload/600x400/logo-anabatic-lg.png" />
  });
}

const additionalLoadMore = [
    {
        title: <a href='http://ant.design'>Additional News 1</a>,
        avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        actions: [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />],
        extra: <img width={272} alt="logo" src="http://teknologibank.com/upload/600x400/logo-anabatic-lg.png" />
    },
    {
        title: <a href='http://ant.design'>Additional News 2</a>,
        avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        actions: [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />],
        extra: <img width={272} alt="logo" src="http://teknologibank.com/upload/600x400/logo-anabatic-lg.png" />
    },
    {
        title: <a href='http://ant.design'>Additional News 3</a>,
        avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        actions: [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />],
        extra: <img width={272} alt="logo" src="http://teknologibank.com/upload/600x400/logo-anabatic-lg.png" />
    },
    {
        title: <a href='http://ant.design'>Additional News 4</a>,
        avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        actions: [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />],
        extra: <img width={272} alt="logo" src="http://teknologibank.com/upload/600x400/logo-anabatic-lg.png" />
    },
    {
        title: <a href='http://ant.design'>Additional News 5</a>,
        avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        actions: [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />],
        extra: <img width={272} alt="logo" src="http://teknologibank.com/upload/600x400/logo-anabatic-lg.png" />
    },
];

const dataSourceBanner = [
    {image: 'http://react-responsive-carousel.js.org/assets/1.jpeg', title: 'This is my plan'},//imageStyle:{width:100,height:100}
    {image: 'http://react-responsive-carousel.js.org/assets/2.jpeg', title: 'This is your plan'},
    {image: 'http://react-responsive-carousel.js.org/assets/3.jpeg', title: 'This is our plan'},
    {image: 'http://react-responsive-carousel.js.org/assets/4.jpeg', title: 'There is no plan'},
    {image: 'http://react-responsive-carousel.js.org/assets/4.jpeg', title: 'There is no plan'},
    {image: 'http://react-responsive-carousel.js.org/assets/2.jpeg', title: 'This is your plan'},
];

for(var i=0;i<=100;i++){
    dataSourceBanner.push(
        {image: 'https://dummyimage.com/960x400/000/fff.jpg&text=HIqq'+i, title: 'This is your plan'},
    );
}

const onLoadMore = (dispatch) => {
    dispatch({type:LOADING_MORE_TOGGLE});
    setTimeout(()=>{
        dispatch({type:LOAD_MORE,payload:{data: additionalLoadMore}})
    }
            , 3000);
}

const onInfiniteLoadMore = (dispatch) => {
    dispatch({type:LOADING_INFINITE_TOGGLE});
    setTimeout(
        ()=>{
            dispatch({type:LOAD_INFINITE,payload:{data: additionalLoadMore}})
        }, 
        3000
    );
}

const loadMore = (showLoadingMore,loadingMore, dispatch) => {
    return (
    showLoadingMore ? (
    <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
      {loadingMore && <Spin />}
      {!loadingMore && 
        <Button 
            onClick={() => {
                onLoadMore(dispatch);
                }
            }
        >loading more</Button>
       }
    </div>
  ) : null);
};

const changeRole = (name, dispatch) => {
    const can = [];
    if(name === 'reset'){
        can.push({ subject: 'all', actions: ['read','create','update','delete'] });
        dispatch({type:UPDATE_ABILITY,payload:{ability: can}});
    }else{
        axios.get(`http://localhost:3000/user?name=${name}`)
            .then(res => {
                res.data[0].role.forEach((item, index) => {
                    const auth = item.authorities;
                    const role = item.name;
                    can.push({ subject: role, actions: auth });
                });
            }).then(() => {
                dispatch({type:UPDATE_ABILITY,payload:{ability: can}});
            });
    }
    //ability.update([{ subject: 'all', actions: ['read'] }])
}

const Welcome = ({name,user,isValid,checked,dispatch,currentStep,selectedValue,selectedBarang,
            alertToggle,tabKey, dataLoadMore,loadingList,loadingMore,showLoadingMore,
            infiniteLoading, infiniteHasMore, test})=>{
        function subjectName(item) {
            if (!item || typeof item === 'string') {
                return item
            }
            
            return item.__type
        }
    /* const ability = AbilityBuilder.define({ subjectName }, can => {
        can(['read', 'create','update','delete'], 'system')
        can(['read', 'create'], 'manage_user')
        can(['read','update','delete'], 'manage_location')
        //can(['read', 'create'], 'Todo')
        //can(['update', 'delete'], 'Todo', { assignee: 'me' })
      });*/
    //const Can = createCanBoundTo(ability); 
    return(<div>
        <h1>This is welcome page</h1>
        <Form>
        <Container>
            <Row>
                <Col>
                <AtiBadgeNumber 
                        count={9}
                        title={"Card Title"}
                        showZero={false}
                        overflowCount={99}
                        className="test-badge"
                    />
                    <AtiTextbox id="email" name="email"
                        type="text" 
                        label="Email Address" 
                        className={"error-data"} 
                        placeholder="Input Email Here" 
                        size="sm"
                        inputLength={{max: 10,min: 5}} 
                        disabled
                        authority={
                            {
                                menuCode: 'manage_user',
                                access: ['read']
                            }
                        }
                        />
                    <AtiTextbox id="nama" name="nama"
                        type="text" 
                        label="Nama" 
                        placeholder="Read Only" 
                        size="sm"
                        readonly={true}
                        inputLength={{max: 10,min: 0}} 
                        />
                    <p>Text Area</p>
                    <AtiTextAreaField id="address" name="address"
                        label="Address" 
                        placeholder="Address" 
                        readonly={true}
                        rows = {5}
                        onChange ={
                            (e)=>{
                                //test onChange
                            }}
                        onBlur  ={
                            (e)=>{
                                //test onBlur
                            }}
                        disabled ={false}
                        isValid={true}
                        readonly ={false}
                        />
                </Col>
            </Row>
            <Row>
                <Col>
                <p>Datepicker</p>
                    <AtiDatePicker 
                        showError = {false}
                        locale="fr-ca"
                        timeFormat={false}
                        dateFormat="YYYY-DD-MM"
                        input= {true}
                        disableOnClickOutside ={false}
                        events={
                            {
                                 onFocus: (e, items) =>{
                                    //console.log("tes onFocus");
                                 }, 
                                 onChange: (e, items)=>{
                                    //console.log("tes onChange");
                                 },
                                  onBlur: (e,items)=>{
                                    //console.log("tes onBlur");
                                  }
                            }
                        }
                        closeOnSelect={true}
                        validDate = {isValidDate}
                        placeholder="Input Date"
                        readonly = {false}
                        groupClassName ="datePicker"
                        /* value ={new Date()} */
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                        <p>Progress Bar</p>
                        <AtiProgressBar type="range" className ="progressBar" value={50} maxValues={100} color="info"/>

                </Col>
                <Col>
                        <p>Multi Progress Bar</p>
                        <AtiMultiProgressBar>
                            <AtiProgressBar asBar={true} color="danger" type="range" value={80} maxValues={100}/>
                            <AtiProgressBar asBar={true} color="info" type="range" value={20} maxValues={100}/>
                        </AtiMultiProgressBar>
                </Col>
            </Row>
            <Row>
                <Col>
                       <p>Modals</p>
                    {
                       /*  <AtiModals 
                            isOpen={true} 
                            header={<div><h6>Header</h6></div>} 
                            footer={<div><h5>Footer</h5></div>} 
                            size="sm" 
                            contentClassName={"backdropModals"} 
                            events = {
                            { onOpened: ()=>{
                                    console.log("tes onOpen");
                                },
                                onClose: ()=>{
                                    console.log("tes onClose");
                                },
                                onExit: ()=>{
                                    console.log("tes onExit");
                                },
                                onEnter: ()=>{
                                    console.log("tes onEnter");
                                }
                                }
                            }
                            backdrop={false}
                            zIndex={1001}
                            >
                            <div>
                                <table>
                                <tr>
                                    <th>Month</th>
                                    <th>Savings</th>
                                </tr>
                                <tr>
                                    <td>January</td>
                                    <td>$100</td>
                                </tr>
                                <tr>
                                    <td>February</td>
                                    <td>$80</td>
                                </tr>
                                </table>
                            </div>
                        </AtiModals> */ 
                    }

                        {/*<AtiModals 
                            isOpen={true} 
                            header={<div><h5>Header</h5></div>} 
                            footer={ <AtiButton type="button" id="primary" text="Submit" color="primary"></AtiButton>}
                            backdrop={true}
                            zIndex={900}
                            contentClassName={"backgroundModals"}
                         >
                        <div>
                            <table>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@facebook</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@instagram</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                            </table>
                        </div>
                        </AtiModals>*/}
                </Col>
            </Row>

            <Row>
                <Col>
                    <AtiCheckboxGroup label="Hobi">
                        <AtiCheckbox 
                            value="renang"
                            text="Renang"
                            events={
                                {
                                    onChange: (e) =>{
                                        //console.log(e.target.checked);    
                                    }
                                }
                            }
                        />    
                        <AtiCheckbox 
                            value="futsal"
                            text="Futsal"
                            events={
                                {
                                    onChange: (e) =>{
                                      //  console.log(e.target.checked);    
                                    }
                                }
                            }
                        />  
                    </AtiCheckboxGroup>
                    <AtiListCheckBox label="Hobi"
                        dataSource={dataSource}
                        events={
                            {
                                onItemsChanged: onItemChanged,
                                 onChange: (e, items)=>{
                                    // console.log("hello "+e.target.value);
                                     
                                }
                            }
                        }
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                     <AtiRadioButton label="Jalur" name="jalur" itemClassName={"radioButtonCustom"} 
                     wrapperClassName={"wrapperRadio"}
                     data={[
                        {id: "id1",label:"Reguler",value:"R"},
                        {id: "id2",label:"Premium",value:"P"},
                        {id: "id3",label:"VIP",value:"V"},
                        {id: "id4",label:"Khusus",value:"K"},
                    ]}
                    events={
                        {onChange:(items,e)=>{
                           // console.log(items);
                        }}
                    }
                     ></AtiRadioButton>
                     <AtiRadioButton label="Custom" name="jk" labelKey="myText" valueKey="myKey"
                     data={[
                         {id:"id11",myText:"Laki Laki",myKey:"L"},
                         {id:"id22",myText:"Perempuan",myKey:"P"},
                    ]}
                    events={
                        {onChange:(items,e)=>{
                           // console.log(items);
                        }}
                    }
                     ></AtiRadioButton>
                </Col>
            </Row>
              
            <Row>
                <Col>
                    <AtiButton type="button" id="primary" text="primary" color="primary" 
                        events={
                            {onClick:()=>{
                              //  console.log("clicked");
                                }
                            }
                        }
                    ></AtiButton>
                    <AtiButton type="button" id="secondary" text="secondary" color="secondary"></AtiButton>
                    <AtiButton type="button" id="success" text="success" color="success"></AtiButton>
                    <AtiButton type="button" id="info" text="info" color="info"></AtiButton>
                    <AtiButton type="button" id="warning" text="warning" color="warning"></AtiButton>
                    <AtiButton type="button" id="danger" text="danger outline" color="danger" outline={true}></AtiButton>
                    <AtiButton type="button" id="link" text="link" color="link"></AtiButton>
                    <AtiButton type="button" id="small" text="Small" color="primary" size="sm"></AtiButton>
                    <AtiButton type="button" id="disabled" text="Disabled" color="primary" disabled={true}></AtiButton>
                    <AtiButton type="button" id="block" text="Danger Block" color="danger" block={true}></AtiButton>
                </Col>
            </Row>
            
            <Row>
                <Col>
                        <AtiSelectBox id="mataUang" name="mataUang" label="Mata Uang" 
                            placeholder="Pilih mata uang .."
                            labelKey="desc" valueKey="name"
                            data={[
                                { name: 'USD', desc: 'USD' },
                                { name: 'IDR', desc: 'IDR' },
                                { name: 'SGD', desc: 'SGD' },
                              ]}
                            events={
                                {onItemChanged:(items)=>{
                                    onSelectChanged(items,dispatch);
                                }}
                            }
                            value={selectedValue}
                            searchable={true}
                            clearable={false}
                        ></AtiSelectBox>
                       <AtiSelectBox id="barang" name="barang" label="Multiple Choise" isLoading={true}
                            placeholder="Pilih Barang .."
                            data={[
                                { value: 'HP', label: 'Handphone' },
                                { value: 'MOUSE', label: 'Mouse' },
                                { value: 'CHARGER', label: 'Charger' },
                              ]}
                            events={
                                {onItemChanged:(items)=>{
                                    onBarangChanged(items,dispatch);
                                }}
                            }
                            value={selectedBarang}
                            searchable={true}
                            clearable={true}
                            multi={true}
                        ></AtiSelectBox> 
                </Col>
            </Row>
            <Row>
                <Col>
                            <AtiAlertBox color="success" isOpen={alertToggle} 
                                onToggle={()=>{
                                        onToggle(dispatch)
                                        }} closable message="Successfull !!!!"></AtiAlertBox>
                            <AtiAlertBox isOpen={alertToggle} closable message="Error submitting data."></AtiAlertBox>
                            <AtiAlertBox color="primary" closable message="Don't forget to pay your loan"></AtiAlertBox>
                            <AtiAlertBox color="warning" closable message="Error uploading file ! your file too large"></AtiAlertBox>
                            <AtiAlertBox color="dark" closable={false}>
                                <h4 className="alert-heading">Well done!</h4>
                                <p>
                                Aww yeah, you successfully read this important alert message. This example text is going
                                to run a bit longer



                                </p>
                                <hr />
                                <p className="mb-0">
                                Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                                </p>
                            </AtiAlertBox>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AtiTabsGroup
                        dataSource={dataSourceTabs}
                        activeKey={tabKey}
                        events = {
                            {onChange: (key) => {onTabChange(key, dispatch)}}
                        }
                    />
                    <AtiTabsGroup
                        tabPosition="left"
                        dataSource={dataSourceTabs}
                        type="editable-card"
                        activeKey={tabKey}
                        customStyle={{ height: 220 }}
                        events = {
                            {
                                onChange: (key) => {onTabChange(key, dispatch)},
                                onEdit: (targetKey, action) => {
                                    alert("update state to remove selected index");
                                }
                            }
                        }
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AtiMultiStep 
                        dataSource={multiStepSource}
                        currentStep={currentStep}
                    ></AtiMultiStep>
                     {
                        currentStep < multiStepSource.length - 1
                        &&
                    <AtiButton type="button" id="primary" text="Next" color="primary" 
                        events={
                            {onClick:()=>{
                                dispatch({type:STEP_CHANGE,payload:{type:'next'}});
                                }
                            }
                        }
                    ></AtiButton>
                    }
                     &nbsp; &nbsp;
                    {
                        currentStep > 0
                        &&
                    <AtiButton type="button" id="primary" text="Prev" color="default" 
                        events={
                            {onClick:()=>{
                                dispatch({type:STEP_CHANGE,payload:{type:'prev'}});
                                }
                            }
                        }
                    ></AtiButton>
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <AtiFileUpload type='button' 
                         multiple={true} 
                         action="//jsonplaceholder.typicode.com/posts/"
                         listType='text'
                         limit={2}
                         acceptType={"image/*"}
                         maxSize={25000}
                         allowedExtension={['jpg','png','gif']}
                    />
                    <AtiFileUpload type='avatar' listType="picture-card" />
                    <AtiFileUpload
                        type='drag'
                        multiple={true}
                        events={
                            {
                                onChange: (file) => {
                                  //  console.log(file);
                                },
                                beforeUpload: (file) => {
                                    /*this.setState(({ fileList }) => ({
                                        fileList: [...fileList, file],
                                    }));*/
                                    return false;
                                }    
                            }
                        }
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AtiCollapse
                        defaultActiveKey={['1','3']}
                        bordered={true}
                        events={
                            {
                                onChange: (key) => {
                                   // console.log(key);
                                }    
                            }
                        }
                        dataSource={dataPanel}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AtiList 
                        dataSource={dataBasicList}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AtiList 
                        dataSource={dataBasicList2}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AtiList 
                        dataSource={dataAvatarList}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    PAGING
                </Col>
            </Row>
            <Row>
                <Col>
                    <AtiList 
                        itemLayout="vertical"
                        pagination={
                            {
                                onChange: (page) => {
                                  //  console.log(page);
                                },
                                pageSize: 3,
                            }
                        }
                        footer={<div><b>ant design</b> footer part</div>}
                        dataSource={dataArticleList}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    LOAD MORE
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="demo-infinite-container">
                    <AtiList
                        className="demo-loadmore-list"
                        itemLayout="vertical"
                        loading={loadingList}
                        loadMore={loadMore(showLoadingMore, loadingMore, dispatch)}
                        dataSource={dataLoadMore}
                        
                    />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    INFINITE SCROLL
                </Col>
            </Row>
            <Row>
                <Col>
                <div className="demo-infinite-container">
                        <AtiList
                            className="demo-loadmore-list"
                            itemLayout="vertical"
                            dataSource={dataLoadMore}
                            loading={infiniteLoading}
                            infiniteScroll
                            infiniteScrollConfig= {
                                {
                                    loadMore: () => {
                                        onInfiniteLoadMore(dispatch)
                                    },
                                    hasMore:(!infiniteLoading && infiniteHasMore),
                                }
                            }
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    
                        <AtiCarousel 
                            dataSource={dataSourceBanner}
                            
                        />
                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <AtiEditor
                        events={
                            {
                                onContentChange: (data) => {
                                   // console.log(data);
                                }
                            }
                        }
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                <ContentLoader
                                        speed={2}
                                        primaryColor="#f3f3f3"
                                        secondaryColor="#ecebeb"
                                    >
                                        <rect x="0" y="0" rx="5" ry="5" width="100" height="100" />
                                    </ContentLoader>
                </Col>
            </Row>
            <Row>
                <Col>
                        <div>Security Test</div>
                        <AtiButton type="button" id="primary" text="pretet" color="primary" 
                            events={
                                {
                                    onClick: () => {
                                        //console.log(ability);
                                        changeRole('pretet', dispatch);
                                    }
                                }
                            }
                        ></AtiButton>
                        <AtiButton type="button" id="primary" text="yuni" color="primary" 
                            events={
                                {
                                    onClick: () => {
                                        changeRole('yuni', dispatch);
                                    }
                                }
                            }
                        ></AtiButton>
                        <AtiButton type="button" id="primary" text="reset" color="default" 
                            events={
                                {
                                    onClick: () => {
                                        changeRole('reset', dispatch);
                                    }
                                }
                            }
                        ></AtiButton>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <h1>This is user page</h1>
                            <Container>
                                <Row>
                                    <Col>
                                        <div>if has "read" rule then the component below will appear</div>
                                            <div>
                                                <AtiTextbox id="email" name="email"
                                                    type="text" 
                                                    label="Email Address" 
                                                    className={"error-data"} 
                                                    placeholder="Input Email Here" 
                                                    size="sm"
                                                    inputLength={{max: 10,min: 5}} 
                                                    authority={
                                                        {
                                                            menuCode: 'manage_user',
                                                            access: ['read']
                                                        }
                                                    }
                                                />
                                            </div>
                                        
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div>if has "create" rule then the component below will appear</div>
                                            <div>
                                                <AtiButton type="button" id="primary" text="Create" color="primary" 
                                                    authority={
                                                        {
                                                            menuCode: 'manage_user',
                                                            access: ['create']
                                                        }
                                                    }
                                                ></AtiButton>
                                            </div>
                                        
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div>if has "update" rule then the component below will appear</div>
                                            <div>
                                                <AtiButton type="button" id="primary" text="Update" color="default" 
                                                authority={
                                                    {
                                                        menuCode: 'manage_user',
                                                        access: ['update']
                                                    }
                                                }
                                                ></AtiButton>
                                            </div>
                                        
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div>if has "delete" rule then the component below will appear</div>
                                            <div>
                                                <AtiButton type="button" id="primary" text="Delete" color="danger" 
                                                authority={
                                                    {
                                                        menuCode: 'manage_user',
                                                        access: ['delete']
                                                    }
                                                }
                                                ></AtiButton>
                                            </div>
                                        
                                    </Col>
                                </Row>
                            </Container>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <h1>This is location page</h1>
                        <Form>
                            <Container>
                                <Row>
                                    <Col>
                                        <div>if has "read, create" rule then the component below will appear</div>
                                            <div>
                                                <AtiTextbox id="email" name="email"
                                                    type="text" 
                                                    label="Address" 
                                                    className={"error-data"} 
                                                    placeholder="Address" 
                                                    size="sm"
                                                    inputLength={{max: 10,min: 5}} 
                                                    authority={
                                                        {
                                                            menuCode: 'manage_location',
                                                            access: ['read','create']
                                                        }
                                                    }
                                                />
                                            </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div>if has "create" rule then the component below will appear</div>
                                            <div>
                                                <AtiButton type="button" id="primary" text="Create" color="primary" 
                                                authority={
                                                    {
                                                        menuCode: 'manage_loation',
                                                        access: ['create']
                                                    }
                                                }
                                                ></AtiButton>
                                            </div>
                                    
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div>if has "update" rule then the component below will appear</div>
                                    
                                            <div>
                                            <AtiTextbox id="test" name="email"
                                                    type="text" 
                                                    label="Address" 
                                                    className={"error-data"} 
                                                    placeholder="Address" 
                                                    size="sm"
                                                    inputLength={{max: 10,min: 5}} 
                                                    authority={
                                                        {
                                                            menuCode: 'manage_location',
                                                            access: ['read','update']
                                                        }
                                                    }
                                                />
                                                <AtiButton type="button" id="primary" text="Update" color="default" 
                                                authority={
                                                    {
                                                        menuCode: 'manage_location',
                                                        access: 'update'
                                                    }
                                                }
                                                ></AtiButton>
                                            </div>
                                    
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div>if has "delete" rule then the component below will appear</div>
                                            <div>
                                                <AtiButton type="button" id="primary" text="Delete" color="danger" 
                                                authority={
                                                    {
                                                        menuCode: 'manage_location',
                                                        access: ['delete']
                                                    }
                                                }
                                                ></AtiButton>
                                            </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <AtiDashboard
                // cols = {number("coloumn",3)} 
                // items = {number("Items",6)} 
                rowHeight = {30} 
                width = {2} 
                height = {3}
                // cols = {number("cols",6)}   
                cols = {{ lg: 12, md: 6, sm: 6, xs: 4, xxs: 2 }}
                // w = {number("width",2)} 
                // h = {number("height",3)} 
                isResizable = {true}
                isDraggable = {true}
                preventCollision = {false}
                // activeKey={select("activeKey", dataSource.map((item, i) => {return item.key}))}
            >
                <AtiDashboardItem key = "0" >
                    <span className="text">This Tab 1 Content</span>
                </AtiDashboardItem>
                <AtiDashboardItem key = "1" >
                    <span className="text">This Tab 2 Content</span>
                </AtiDashboardItem>
                <AtiDashboardItem key = "2" >
                    <span className="text">This Tab 3 Content</span>
                </AtiDashboardItem>
                <AtiDashboardItem key = "3" >
                    <span className="text">This Tab 4 Content</span>
                </AtiDashboardItem>
                <AtiDashboardItem key = "4" >
                    <span className="text">This Tab 5 Content</span>
                </AtiDashboardItem>
                <AtiDashboardItem key = "5" >
                    <span className="text">This Tab 6 Content</span>
                </AtiDashboardItem>
               
            </AtiDashboard>
                </Col>
            </Row>
        </Container>
        </Form>
        </div>
    );
}

const mapStateToProps = (state,props)=>{
    //console.log(state.welcome);
    return {...state.welcome};
}

export default connect(mapStateToProps)(Welcome);
