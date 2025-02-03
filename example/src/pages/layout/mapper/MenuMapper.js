import React from 'react'
import * as StringUtils from 'voca'
import { Icon } from 'antd';

const mapServerToDto = (serverData) => {
    return {
        key: serverData.parent.name,
        type: serverData.child.length > 0 ? 'subitem' :'item',
        icon: serverData.parent.icon ? 'credit-card' : 'credit-card',
        title: serverData.parent.description,
        link:serverData.parent.permalink,
        child: serverData.child.map((item, index) => {
            return {
                key: item.name,
                type: 'item',
                icon: StringUtils.isEmpty(item.icon) ? "select" : 'select',
                title: item.description,
                link: item.permalink
            }
        })
    };
}

const mapServerToDtoList = (datas) => {
    return datas.map((item, index) => {
        return mapServerToDto(item);
    });
}

const MenuMapper = {
    mapServerToDto,
    mapServerToDtoList,
}

export default MenuMapper;