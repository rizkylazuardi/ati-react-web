# AtiList

## General

Base component that for use to help create list of `element` 
A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.

## Example

### `default`

Example using default format, 

```js

const dataBasicList = [
            {title: 'Title 1', description: 'Hi good people, this is description of title 1'},
            {title: 'Title 2', description: 'Hi good people, this is description of title 2'},
            {title: 'Title 3', description: 'Hi good people, this is description of title 3'},
            {title: 'Title 4', description: 'Hi good people, this is description of title 4'},
            {title: 'Title 5', description: 'Hi good people, this is description of title 5'},
        ];

<AtiList 
    dataSource={dataBasicList}
/>
```

### `Avatar`
Example using avatar
```js
import { Avatar } from 'antd';

const dataAvatarList = [
            {title: 'Title 1',avatar:<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />, description: 'Hi good people, this is description of title 1'},
            {title: 'Title 2',avatar:<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />, description: 'Hi good people, this is description of title 2'},
            {title: 'Title 3',avatar:<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />, description: 'Hi good people, this is description of title 3'},
            {title: 'Title 4',avatar:<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />, description: 'Hi good people, this is description of title 4'},
            {title: 'Title 5',avatar:<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />, description: 'Hi good people, this is description of title 5'},
        ];

<div>
    <AtiList 
        dataSource={dataAvatarList}
    />
</div>
```

### `Paging`
Example using pagination, just set the attribute pagination with the available config 
reference [Pagination Config](https://ant.design/components/pagination/).
```js
import { Avatar, Icon } from 'antd';

const dataArticleList = [
                {
                    title: <a href='http://ant.design'>News and Article 1}</a>,
                    avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
                    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    actions: [<span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='message' style={{ marginRight: 8 }} />2</span>],
                    extra: <img width={272} alt="logo" src="http://teknologibank.com/upload/600x400/logo-anabatic-lg.png" />
                },
                {
                    title: <a href='http://ant.design'>News and Article 2</a>,
                    avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
                    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    actions: [<span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='message' style={{ marginRight: 8 }} />2</span>],
                    extra: <img width={272} alt="logo" src="http://teknologibank.com/upload/600x400/logo-anabatic-lg.png" />
                },
                {
                    title: <a href='http://ant.design'>News and Article 3</a>,
                    avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
                    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    actions: [<span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='message' style={{ marginRight: 8 }} />2</span>],
                    extra: <img width={272} alt="logo" src="http://teknologibank.com/upload/600x400/logo-anabatic-lg.png" />
                },
                {
                    title: <a href='http://ant.design'>News and Article 4</a>,
                    avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
                    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    actions: [<span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='message' style={{ marginRight: 8 }} />2</span>],
                    extra: <img width={272} alt="logo" src="http://teknologibank.com/upload/600x400/logo-anabatic-lg.png" />
                },
                {
                    title: <a href='http://ant.design'>News and Article 5</a>,
                    avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
                    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    actions: [<span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='message' style={{ marginRight: 8 }} />2</span>],
                    extra: <img width={272} alt="logo" src="http://teknologibank.com/upload/600x400/logo-anabatic-lg.png" />
                }
            ];
<AtiList 
    itemLayout='vertical'
    pagination={  
        {
            onChange: (page) => {
                console.log(page);
            },
            pageSize: 3,
        }
    }
    footer={<div><b>ant design</b> footer part</div>}
    dataSource={dataArticleList}
/>
```
### `Load More`
Example using load more button
```js
import { Avatar, Icon } from 'antd';

state = {
    dataLoadMore: dataArticleList,//see on part paging on the top
    loadingList: false,
    loadingMore: false,
}

onLoadMore = () => {
    this.setState(...state,loadingList:true);
    setTimeout(()=>{
        this.setState(...state,{dataLoadMore:this.state.dataLoadMore.concat(dataArticleList)});
    }
            , 3000);
}

loadMore = () => {
    return (
    this.state.showLoadingMore ? (
    <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
      {this.state.loadingMore && <Spin />}
      {!this.state.loadingMore && 
        <Button 
            onClick={() => {
                onLoadMore();
                }
            }
        >loading more</Button>
       }
    </div>
  ) : null);
};

<div className="demo-infinite-container">
                    <AtiList
                        className="demo-loadmore-list"
                        itemLayout="vertical"
                        loading={this.state.loadingList}
                        loadMore={this.loadMore()}
                        dataSource={this.state.dataLoadMore}
                        
                    />
                    </div>

//CSS
.demo-loadmore-list {
  min-height: 350px;
}

.demo-infinite-container {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;
  height: 400px;
}
```
### `Infinite Scroll`
Example using infinite scroll feature

```js
import { Avatar, Icon, message } from 'antd';

state = {
    dataLoadMore: dataArticleList,//see on part paging on the top
    infiniteLoading: false, 
    infiniteHasMore: true,
}

onInfiniteLoadMore = () => {
    this.setState(...state,infiniteLoading:true);
    setTimeout(
        ()=>{
            if (this.state.dataLoadMore.length > 14) {
                message.warning('Infinite List loaded all');
                this.setState(...state, {infiniteLoading: false, infiniteHasMore: false});
            }

            const datas = this.state.dataLoadMore.concat(this.dataArticleList);
            this.setState(...state, {dataLoadMore:datas, infiniteLoading: false});
        }, 
        3000
    );
}


<div className="demo-infinite-container">
    <AtiList
        className="demo-loadmore-list"
        itemLayout="vertical"
        dataSource={this.state.dataLoadMore}
        loading={this.state.infiniteLoading}
        infiniteScroll
        infiniteScrollConfig= {
            {
                loadMore: () => {
                    this.onInfiniteLoadMore(dispatch)
                },
                hasMore:(!this.state.infiniteLoading && this.state.infiniteHasMore),
            }
        }
    />
</div>

//CSS
.demo-loadmore-list {
  min-height: 350px;
}

.demo-infinite-container {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;
  height: 400px;
}
```

### `Responsive`
Example using responsive List

```js
import { Avatar, Icon, message, Card } from 'antd';

const data = [
                {
                  title: 'Title 1',
                },
                {
                  title: 'Title 2',
                },
                {
                  title: 'Title 3',
                },
                {
                  title: 'Title 4',
                },
                {
                  title: 'Title 5',
                },
                {
                  title: 'Title 6',
                },
              ];
        
    return (
        <div>
            <AtiList 
                        itemLayout='vertical'}
                        
                        grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
                        dataSource={data}
                        type='custom'
                        events={
                            {
                                renderItem: item => (
                                    <List.Item>
                                        <Card title={item.title}>Card content</Card>
                                    </List.Item>
                                )
                            }
                        }
                    />
        </div>
        );
```
