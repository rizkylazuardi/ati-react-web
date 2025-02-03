import React from 'react';
import { Tabs, Icon, List, Avatar, Button, Spin, message  } from 'antd';
import {UPDATE_ABILITY, CHANGE_SELECTED,BARANG_SELECTED, TAB_CHANGE, STEP_CHANGE, LOAD_MORE, LOADING_MORE_TOGGLE, LOADING_INFINITE_TOGGLE, LOAD_INFINITE} from './../action';
import { ALERT_TOGGLE } from './../action/index';
import axios from 'axios';
//import ability from './../../config/ability';

const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

const dummyLoadMore = [
    {
        title: <a href='http://ant.design'>News and Article 1</a>,
        avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        actions: [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />],
        extra: <img width={272} alt="logo" src="http://teknologibank.com/upload/600x400/logo-anabatic-lg.png" />
    },
    {
        title: <a href='http://ant.design'>News and Article 2</a>,
        avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        actions: [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />],
        extra: <img width={272} alt="logo" src="http://teknologibank.com/upload/600x400/logo-anabatic-lg.png" />
    },
    {
        title: <a href='http://ant.design'>News and Article 3</a>,
        avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        actions: [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />],
        extra: <img width={272} alt="logo" src="http://teknologibank.com/upload/600x400/logo-anabatic-lg.png" />
    },
    {
        title: <a href='http://ant.design'>News and Article 4</a>,
        avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        actions: [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />],
        extra: <img width={272} alt="logo" src="http://teknologibank.com/upload/600x400/logo-anabatic-lg.png" />
    },
    {
        title: <a href='http://ant.design'>News and Article 5</a>,
        avatar: <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        actions: [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />],
        extra: <img width={272} alt="logo" src="http://teknologibank.com/upload/600x400/logo-anabatic-lg.png" />
    }
];

const initialState = {
    selectedValue: "null",
    selectedBarang: "null",
    alertToggle:false,
    tabKey:"",
    currentStep:0,
    dataLoadMore: dummyLoadMore,
    loadingList: false,
    loadingMore: false,
    showLoadingMore: true,
    infiniteLoading: false, 
    infiniteHasMore: true,
    //ability: ability,
    test:'a'
};

const welcomeReducer = (state=initialState,action)=>{
    
    const {type,payload} = action;
    switch(type){   
        case CHANGE_SELECTED:
            return {...state,selectedValue: payload.value};
        case BARANG_SELECTED :
            return {...state,selectedBarang: payload.value,alertToggle:payload.showAlert};
        case ALERT_TOGGLE:
            return {...state,alertToggle:payload.showAlert};
        case TAB_CHANGE:
            return {...state,tabKey:payload.tabKey};
        case STEP_CHANGE:
            if(payload.type === 'next'){
                return {...state,currentStep:state.currentStep + 1};
            }else{
                return {...state,currentStep:state.currentStep - 1};
            }
        case LOADING_MORE_TOGGLE:
            return {...state,loadingMore:!state.loadingMore};
        case LOADING_INFINITE_TOGGLE:
            return {...state,infiniteLoading :!state.infiniteLoading};
        case LOAD_INFINITE:
            if (state.dataLoadMore.length > 14) {
                message.warning('Infinite List loaded all');
                return {...state, infiniteLoading: false, infiniteHasMore: false};
            }

            const datas = state.dataLoadMore.concat(payload.data);
            return {...state,dataLoadMore:datas, infiniteLoading: false};
        case LOAD_MORE:
            const data = state.dataLoadMore.concat(payload.data);

            return {...state,dataLoadMore:data, loadingMore: false};
        case UPDATE_ABILITY:
            const newAbility =  state.ability;
            newAbility.update(payload.ability);
            return {...state,test:'b',ability:newAbility};
        default :
        return state;
    } 
};

export default welcomeReducer;