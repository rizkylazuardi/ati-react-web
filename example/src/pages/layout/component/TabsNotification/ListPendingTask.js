import React from 'react';
import { Tabs, Icon, List, Avatar, Button, Spin, Card  } from 'antd';
import {AtiList, AtiButton} from 'ati-react-web';

const dataBasicList2 = [
    {title: 'Account/Authorized', description: 'Autorhized Account'},
    {title: 'Cash Transaction', description: 'Authorized Transaction'},
    {title: 'Add Permission', description: 'Parameter Permission', actions : [<a><Icon type = "right"/></a>]},
    {title: 'Account/Authorized', description: 'Autorhized Account', actions : [<a><Icon type = "right"/></a>]},
    {title: 'Cash Transaction', description: 'Authorized Transaction', actions : [<a><Icon type = "right"/></a>]},
    {title: 'Add Permission', description: 'Parameter Permission', actions : [<a><Icon type = "right"/></a>]},
];

class ListComponent extends React.Component{

    state = {
        loading: true,
        loadingMore: false,
        showLoadingMore: true,
        data: [],
    }

    componentDidMount(){
        this.setState({
            loading : false, 
            data : dataBasicList2,
            showLoadingMore : true,
        })
        console.log(this.state.data);
    }

    // onLoadMore = () => {
    //     this.setState({
    //       loadingMore: !this.state.loadingMore
    //     });
    //       const data = this.state.data.concat(dataLoadMore);
    //       this.setState({
    //         data : data,    
    //         loadingMore: false,
    //       })
    //   }

    render(){

        const dataLoadMore = [
            {title: 'Account/Authorized', description: 'Autorhized Account', actions : [<a><Icon type = "right"/></a>]},
            {title: 'Cash Transaction', description: 'Authorized Transaction', actions : [<a><Icon type = "right"/></a>]},
            {title: 'Add Permission', description: 'Parameter Permission', actions : [<a><Icon type = "right"/></a>]},
        ];
        
        const { loading, loadingMore, showLoadingMore, data } = this.state;

        const onLoadMore = () => {
            this.setState({
              loadingMore: true
            });
              const data = this.state.data.concat(dataLoadMore);
              this.setState({
                data : data,    
                loadingMore: false,
                showLoadingMore : false,
              })
            console.log(this.state.loadingMore);
          }

          const onLoadLess = () => {
            this.setState({
              loadingMore: true
            });
              this.setState({
                data : dataBasicList2,    
                loadingMore: false,
                showLoadingMore : true,
              })
            console.log(this.state.loadingMore);
          }

        const loadMore = showLoadingMore ? (
            <div style={{ textAlign: 'left', marginTop: 12, height: 32, lineHeight: '32px' }}>
              {loadingMore && <Spin />}
              {!loadingMore && 
                <span style = {{cursor : 'pointer', color : 'red', fontStyle : 'italic'}}
                onClick={() => {
                    onLoadMore();
                    }
                }
                >Show more...</span>
               }
            </div>
          ) : 
          <div style={{ textAlign: 'left', marginTop: 12, height: 32, lineHeight: '32px' }}>
                <span style = {{cursor : 'pointer', color : 'red', fontStyle : 'italic'}}
                onClick={() => {
                    onLoadLess();
                    }
                }
                >Show less...</span>
            </div>;

        return (
            <div>
                <AtiList 
                    dataSource={data}
                    size = "small"
                    search = {false}
                    loading = {loading}
                    loadMore = {loadMore}
                    type = "default"
                    itemLayout="horizontal"
                />
            </div>
        );
    }
}

export default ListComponent;