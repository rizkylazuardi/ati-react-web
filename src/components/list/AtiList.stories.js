import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, object } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import { Icon, List, Avatar, Button, Spin, Card } from 'antd'
import AtiListMd from './AtiList.md'
import AtiList from './AtiList'
import { withState } from '@dump247/storybook-state'

storiesOf('Dynamic List', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiListMd))
  .addWithDoc('Default', AtiList, null, () => {
    // .addWithDoc('Default', AtiList,null,withState({value:null})(({ store })=>{
    const dataBasicList = [
      {title: 'Title 1'},
      {title: 'Title 2'},
      {title: 'Title 3'},
      {title: 'Title 4'},
      {title: 'Title 5'}
    ]
    const dataBasicList2 = [
      {title: <a href='https://ant.design'>Title 1</a>, description: 'Hi good people, this is description of title 1'},
      {title: <a href='https://ant.design'>Title 2</a>, description: 'Hi good people, this is description of title 2'},
      {title: 'Title 3', description: 'Hi good people, this is description of title 3'},
      {title: 'Title 4', description: 'Hi good people, this is description of title 4'},
      {title: 'Title 5', description: 'Hi good people, this is description of title 5'}
    ]
    return (
      <div>
        <b>using dataSource :dataBasicList</b>
        <AtiList
          dataSource={object('dataSource - dataBasicList', dataBasicList)}
        />
        <br />
        <b>using dataSource :dataBasicList2</b>
        <AtiList
          dataSource={object('dataSource - dataBasicList2', dataBasicList2)}
        />
      </div>
    )
  })
  .addWithDoc('Avatar', AtiList, null, () => {
    const dataAvatarList = [
      {title: 'Title 1', avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />, description: 'Hi good people, this is description of title 1'},
      {title: 'Title 2', avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />, description: 'Hi good people, this is description of title 2'},
      {title: 'Title 3', avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />, description: 'Hi good people, this is description of title 3'},
      {title: 'Title 4', avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />, description: 'Hi good people, this is description of title 4'},
      {title: 'Title 5', avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />, description: 'Hi good people, this is description of title 5'}
    ]
    return (
      <div>
        <AtiList
          dataSource={object('dataSource', dataAvatarList)}
        />
      </div>
    )
  })
// .addWithDoc('Paging', AtiList,null,withState({value:null})(({ store })=>{
  .addWithDoc('Paging', AtiList, null, () => {
    const dataArticleList = [
      {
        title: <a href='http://ant.design'>News and Article 1}</a>,
        avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        actions: [<span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='message' style={{ marginRight: 8 }} />2</span>],
        extra: <img width={272} alt='logo' src='http://teknologibank.com/upload/600x400/logo-anabatic-lg.png' />
      },
      {
        title: <a href='http://ant.design'>News and Article 2</a>,
        avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        actions: [<span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='message' style={{ marginRight: 8 }} />2</span>],
        extra: <img width={272} alt='logo' src='http://teknologibank.com/upload/600x400/logo-anabatic-lg.png' />
      },
      {
        title: <a href='http://ant.design'>News and Article 3</a>,
        avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        actions: [<span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='message' style={{ marginRight: 8 }} />2</span>],
        extra: <img width={272} alt='logo' src='http://teknologibank.com/upload/600x400/logo-anabatic-lg.png' />
      },
      {
        title: <a href='http://ant.design'>News and Article 4</a>,
        avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        actions: [<span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='message' style={{ marginRight: 8 }} />2</span>],
        extra: <img width={272} alt='logo' src='http://teknologibank.com/upload/600x400/logo-anabatic-lg.png' />
      },
      {
        title: <a href='http://ant.design'>News and Article 5</a>,
        avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        actions: [<span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='star-o' style={{ marginRight: 8 }} />156</span>, <span><Icon type='message' style={{ marginRight: 8 }} />2</span>],
        extra: <img width={272} alt='logo' src='http://teknologibank.com/upload/600x400/logo-anabatic-lg.png' />
      }
    ]

    return (
      <div>
        <AtiList
          itemLayout={select('itemLayout',
            {vertical: 'vertical', horizontal: 'horizontal'},
            'vertical')}
          pagination={object('pagination',
            {
              onChange: (page) => {
                //console.log(page)
              },
              pageSize: 3
            })
          }
          footer={<div><b>ant design</b> footer part</div>}
          dataSource={object('dataSource', dataArticleList)}
        />
      </div>
    )
  })
  .addWithDoc('Responsive', AtiList, null, () => {
    const data = [
      {
        title: 'Title 1'
      },
      {
        title: 'Title 2'
      },
      {
        title: 'Title 3'
      },
      {
        title: 'Title 4'
      },
      {
        title: 'Title 5'
      },
      {
        title: 'Title 6'
      }
    ]

    return (
      <div>
        <AtiList
          itemLayout={select('itemLayout',
            {vertical: 'vertical', horizontal: 'horizontal'},
            'vertical')}

          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          dataSource={object('dataSource', data)}
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
    )
  })
  .addWithDoc('Load More', AtiList, withState({loading: true, loadingMore: false, showLoadingMore: true, data: []})(({ store }) => {
    // .addWithDoc('Default', AtiList,null,withState({value:null})(({ store })=>{
    componentDidMount = () => {
      const dataBasicList2 = [
        {title: 'Title 3', description: 'Hi good people, this is description of title 1'},
        {title: 'Title 3', description: 'Hi good people, this is description of title 2'},
        {title: 'Title 3', description: 'Hi good people, this is description of title 3'},
        {title: 'Title 4', description: 'Hi good people, this is description of title 4'},
        {title: 'Title 5', description: 'Hi good people, this is description of title 5'}
      ]
      store.set({
        loading: false,
        data: [...store.state.data, dataBasicList2],
        showLoadingMore: true
      })
      //console.log(store.state.data)
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

    const dataLoadMore = [
      {title: 'Title 3', description: 'Hi good people, this is description of title 6'},
      {title: 'Title 3', description: 'Hi good people, this is description of title 7'},
      {title: 'Title 8', description: 'Hi good people, this is description of title 8'},
      {title: 'Title 9', description: 'Hi good people, this is description of title 9'},
      {title: 'Title 10', description: 'Hi good people, this is description of title 10'}
    ]

    const { loading, loadingMore, showLoadingMore, data } = store.state

    const onLoadMore = () => {
      this.setState({
        loadingMore: !store.state.loadingMore
      })
      this.setState({
        data: [...store.state.data, dataLoadMore],
        loadingMore: false
        // showLoadingMore : false,
      })
      //console.log(store.state.loadingMore)
    }

    const loadMore = showLoadingMore ? (
      <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        {loadingMore && <Spin />}
        {!loadingMore &&
        <Button
          onClick={() => {
            onLoadMore()
          }
          }
        >loading more</Button>
        }
      </div>
    ) : null

    return (
      <div>
        <AtiList
          dataSource={data}
          search={false}
          loading={loading}
          loadMore={loadMore}
          type='default'
          itemLayout='horizontal'
        />
      </div>
    )
  }))
