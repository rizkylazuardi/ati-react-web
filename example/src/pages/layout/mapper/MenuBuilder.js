import React from 'react'
import { Icon, Popover } from 'antd'
import {  push } from 'react-router-redux'

const MenuBuilder = {
    buildMenu: (dataSource, navigate) => {
        if(dataSource.length === 0){
            return [
                {
                    key: 'sub-1',
                    type: 'item',
                    childComponent: <span>
                        <Popover placement="bottom" content={
                            <span>if you wait too long please log in again. 
                                <a href="#" onClick={
                                    (e) => { 
                                        e.preventDefault();
                                        navigate('/'); 
                                    }
                                } style = {{color : '#000000'}}>Login</a>
                            </span>
                        }>
                            <span><Icon type="loading" /><span>fetching menu ...</span></span>
                        </Popover>
                        </span>,
                    childItems:[]
                }
              ]
        }
        return dataSource.map((item, index) => {
            const {key, type, icon, title, link, child} = item;
            return {
                key,
                type,
                childComponent: ( 
                <span>
                    <Icon type={icon} />
                    {child.length > 0 ? 
                        <span>{title}</span> :
                            <span><a href="#" onClick={
                                (e) => { 
                                    e.preventDefault();
                                    navigate(`/modul/${link}`); 
                                }
                            } style = {{color : '#ffffff'}}>{title}</a></span>
                    }
                </span>
                ),
                childItems: child.map((childItem, childIndex) => {
                    return {
                        key: childItem.key,
                        type: childItem.type,
                        childComponent: (
                        <span>
                            <Icon type={childItem.icon} />
                            <a href="#" onClick={(e) => { 
                                e.preventDefault();
                                navigate(`/modul/${childItem.link}`); }} style = {{color : '#ffffff'}}>{childItem.title}</a>
                        </span>
                        )
                    }
                })
            }
        })
    }
}

export default MenuBuilder;
