import React, { Component } from 'react';
import { List } from 'antd'
import AtiList from '../list/AtiList';
import AtiImageView from './AtiImageView';

class AtiImageList extends Component {
    render() {
        const {
            dataSource, imageConfig, isLoading, containerStyle, className, buttonClassName, gridSetting,
        } = this.props;
        return (
            <React.Fragment>
                <AtiList
                    itemLayout="vertical"
                    grid={gridSetting}
                    bordered={false}
                    dataSource={dataSource}
                    type="custom"
                    events={
                    {
                        renderItem: item => (
                            <List.Item>
                                <AtiImageView
                                    src={item.src}
                                    isLoading={isLoading}
                                    alt={item.alt}
                                    containerStyle={containerStyle}
                                    className={className}
                                    imageConfig={imageConfig}
                                    buttonClassName={buttonClassName}
                                />
                            </List.Item>
                        ),
                    }
                    }
                />
            </React.Fragment>
        );
    }
}

export default AtiImageList;