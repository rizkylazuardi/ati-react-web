import React, {Component} from 'react';
import request from './request';
import config from './../../config/Config';

const PocketRemoteContext = React.createContext({baseUrl: null, csrfToken: null});

export class PocketRemoteServiceProvider extends Component {
    state = {
        baseUrl: null,
        csrfToken: null
    }

    setBaseUrl = (url) => {
        this.setState({baseUrl: url});
    }

    setCsrfToken = (csrfToken) => {
        this.setState({csrfToken});
    }

    componentWillMount(){ 
        this.setBaseUrl(this.props.baseUrl);
    }

    render(){
        const {baseUrl, csrfToken} = this.state;
        const action = {setBaseUrl:this.setBaseUrl,setCsrfToken:this.setCsrfToken};
        return (
            <PocketRemoteContext.Provider value={{baseUrl, csrfToken, action}}>
                {this.props.children}
            </PocketRemoteContext.Provider>
        )
    }
}


export const withPocketRemoteService = (WrapperComponent) => {
    
    return class extends Component {
        
        state = {
            waitingForCsrf:false,
            error:null
        };

        invoke = (baseUrl,serviceName,params,method,header)=>{
            return new Promise((resolve,reject)=>{
                 request(this.appendUrl(baseUrl,serviceName),method,params,header,resolve,reject);
            });
       
        }


        appendUrl = (baseUrl,service)=>{
            return baseUrl+"/"+service;
        }

        createAction = (context)=>{
            const invoke = (serviceName,params,option)=>{
                const _option ={method:"POST",useCsrfToken:true,...option}; 
                const {method,header,useCsrfToken} = _option;
                
                if(useCsrfToken){
                    const _header = header || {};
                    _header['X-CSRF-TOKEN'] = context.csrfToken;
                    return this.invoke(context.baseUrl,serviceName,params,method,header);       
                }
                return this.invoke(context.baseUrl,serviceName,params,method,header);
            }

            

            const refreshCsrfToken = ()=>{
                this.setState({waitingForCsrf:true});
                 invoke(config.csrfServiceName,{},{method:"GET",useCsrfToken:false}).then((response)=>{
                    const {data} = response;
                    context.action.setCsrfToken(data.token);
                    this.setState({waitingForCsrf:false});
                 },(errResponse)=>{
                    this.setState({waitingForCsrf:false,error:errResponse});
                 });
            }

            return {invoke,refreshCsrfToken};
        }

        render(){
            return (
                <PocketRemoteContext.Consumer>
                    {(context)=>{
                        const action = this.createAction(context);
                        const pocketRemoteService = action;
                        return (<WrapperComponent {...this.props} pocketRemoteService={pocketRemoteService}/>)
                    }}
                </PocketRemoteContext.Consumer>
            );
        }

    }
}