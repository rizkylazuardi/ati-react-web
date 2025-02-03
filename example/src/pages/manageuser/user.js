import React, {Component} from 'react';
import { Container, Row, Col, Form, FormGroup, Label } from 'reactstrap';
import {AtiTextbox, AtiCheckboxGroup, AtiCheckbox, AtiButton} from 'ati-react-web';
import {connect} from 'react-redux';
import { Bar } from 'recharts';
// import { AtiContainer } from 'ati-web-security';

class User extends Component {
    state = {
        checkedList: ['Apple','Pear'],
        checkAll: false,
      };

      plainOptions = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
      ];
    onChange = (checkedList) => {
        this.setState({
          checkedList,
          checkAll: checkedList.length === this.plainOptions.length,
        });
    }
    

    onChangeCheck = (checkedList) => {
        //console.log(checkedList);
    }
      onCheckAllChange = (e) => {
        this.setState({
          checkedList: e.target.checked 
                        ? this.plainOptions.map((item,index)=> {
                            return item.value;
                        }) 
                        : [],
          checkAll: e.target.checked,
        });
      }
    
    render(){
            return(
                <div>
                   {/* <AtiContainer menuCode="manage_user"> */}
                                <h1>This is location page</h1>
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
                                                            access={['read']}
                                                        />
                                                    </div>
                                                
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div>if has "create" rule then the component below will appear</div>
                                                    <div>
                                                        <AtiButton type="button" id="primary" text="Create" color="primary" 
                                                            access={['create']}
                                                        ></AtiButton>
                                                    </div>
                                                
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div>if has "update" rule then the component below will appear</div>
                                                    <div>
                                                        <AtiButton type="button" id="primary" text="Update" color="default" 
                                                        access={['update']}
                                                        
                                                        ></AtiButton>
                                                    </div>
                                                
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div>if has "delete" rule then the component below will appear</div>
                                                    <div>
                                                        <AtiButton type="button" id="primary" text="Delete" color="danger" 
                                                        access={['delete']}
                                                        ></AtiButton>
                                                    </div>
                                                
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div>if has "authorize" rule then the component below will appear</div>
                                                    <div>
                                                        <AtiButton type="button" id="primary" text="Authorize" color="success" 
                                                        access={['authorize']}
                                                       
                                                        ></AtiButton>
                                                    </div>
                                                
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                                                <AtiCheckbox
                                                    events={
                                                        {
                                                            onChange : this.onCheckAllChange
                                                        }
                                                    }
                                                    checked={this.state.checkAll}
                                                >
                                                Check All
                                                </AtiCheckbox>
                                            </div>
                                                <AtiCheckboxGroup 
                                                    dataSource={this.plainOptions} 
                                                    value={this.state.checkedList} 
                                                    events={{onChange: this.onChange}} 
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <AtiCheckboxGroup style={{ width: '100%' }}>
                                                    <Row>
                                                        <Col><AtiCheckbox value="A">A</AtiCheckbox></Col>
                                                    </Row>
                                                    <Row>
                                                        <Col><AtiCheckbox value="B">B</AtiCheckbox></Col>
                                                    </Row>
                                                    <Row>
                                                        <Col><AtiCheckbox value="C">C</AtiCheckbox></Col>
                                                    </Row>
                                               </AtiCheckboxGroup>
                                            </Col>
                                        </Row>
                                    </Container>
                    </AtiContainer>
                    <AtiContainer menuCode={'manage_location'}>
                                <h1>This is location page</h1>
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
                                                            access={['read']}
                                                        />
                                                    </div>
                                                
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div>if has "create" rule then the component below will appear</div>
                                                    <div>
                                                        <AtiButton type="button" id="primary" text="Create" color="primary" 
                                                            access={['create']}
                                                        ></AtiButton>
                                                    </div>
                                                
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div>if has "update" rule then the component below will appear</div>
                                                    <div>
                                                        <AtiButton type="button" id="primary" text="Update" color="default" 
                                                        access={['update']}
                                                        
                                                        ></AtiButton>
                                                    </div>
                                                
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div>if has "delete" rule then the component below will appear</div>
                                                    <div>
                                                        <AtiButton type="button" id="primary" text="Delete" color="danger" 
                                                        access={['delete']}
                                                        ></AtiButton>
                                                    </div>
                                                
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div>if has "authorize" rule then the component below will appear</div>
                                                    <div>
                                                        <AtiButton type="button" id="primary" text="Authorize" color="success" 
                                                        access={['authorize']}
                                                       
                                                        ></AtiButton>
                                                    </div>
                                                
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                                                <AtiCheckbox
                                                    events={
                                                        {
                                                            onChange : this.onCheckAllChange
                                                        }
                                                    }
                                                    checked={this.state.checkAll}
                                                >
                                                Check All
                                                </AtiCheckbox>
                                            </div>
                                                <AtiCheckboxGroup 
                                                    dataSource={this.plainOptions} 
                                                    value={this.state.checkedList} 
                                                    events={{onChange: this.onChange}} 
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <AtiCheckboxGroup style={{ width: '100%' }} 
                                                     events={{onChange: this.onChangeCheck}} >
                                                    <Row>
                                                        <Col><AtiCheckbox value="A">A</AtiCheckbox></Col>
                                                    </Row>
                                                    <Row>
                                                        <Col><AtiCheckbox value="B">B</AtiCheckbox></Col>
                                                    </Row>
                                                    <Row>
                                                         <Col><AtiCheckbox value="C">C</AtiCheckbox></Col>
                                                    </Row>
                                               </AtiCheckboxGroup>
                                            </Col>
                                        </Row>
                                    </Container>
                    {/* </AtiContainer> */}
                    </div>
            );
        }
}

const mapStateToProps = (state,props)=>{
    return {...state.welcome};
}

export default connect(mapStateToProps)(User);