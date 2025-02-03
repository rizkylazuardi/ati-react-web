import React from 'react';
import { Tabs, Icon, List, Avatar, Button, Spin, Card  } from 'antd';
import {AtiList, AtiButton} from 'ati-react-web';

const dataBasicList2 = [
    {title: 'Title 3', description: 'Hi good people, this is description of title 1'},
    {title: 'Title 3', description: 'Hi good people, this is description of title 2'},
    {title: 'Title 3', description: 'Hi good people, this is description of title 3'},
    {title: 'Title 4', description: 'Hi good people, this is description of title 4'},
    {title: 'Title 5', description: 'Hi good people, this is description of title 5'},
];

class ListComponent extends React.Component{

    state = {
        loading: true,
        loadingMore: false,
        showLoadingMore: true,
        data: [],
    }

    componentDidMount(){
        const dataBasicList2 = [
            {title: 'Title 3', description: 'Hi good people, this is description of title 1'},
            {title: 'Title 3', description: 'Hi good people, this is description of title 2'},
            {title: 'Title 3', description: 'Hi good people, this is description of title 3'},
            {title: 'Title 4', description: 'Hi good people, this is description of title 4'},
            {title: 'Title 5', description: 'Hi good people, this is description of title 5'},
        ];
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
        const dataBasicList = [
            {title: 'Title 1'},
            {title: 'Title 2'},
            {title: 'Title 3'},
            {title: 'Title 4'},
            {title: 'Title 5'},
        ];

        const dataLoadMore = [
            {title: 'Title 3', description: 'Hi good people, this is description of title 6'},
            {title: 'Title 3', description: 'Hi good people, this is description of title 7'},
            {title: 'Title 8', description: 'Hi good people, this is description of title 8'},
            {title: 'Title 9', description: 'Hi good people, this is description of title 9'},
            {title: 'Title 10', description: 'Hi good people, this is description of title 10'},
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

        const loadMore = showLoadingMore ? (
            <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
              {loadingMore && <Spin />}
              {!loadingMore && 
                <Button 
                onClick={() => {
                    onLoadMore();
                    }
                }
                >loading more</Button>
               }
            </div>
          ) : null;

        return (
            <div>
                <AtiList 
                    dataSource={data}
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