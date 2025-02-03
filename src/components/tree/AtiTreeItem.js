import React, { Component } from 'react';
import { Tree } from 'antd';
import PropTypes from 'prop-types';

class AtiTreeItem extends Component {
    static propTypes = {
        disableCheckbox: PropTypes.bool,
        disabled: PropTypes.bool,
        icon: PropTypes.node,
        isLeaf: PropTypes.bool,
        key: PropTypes.string.isRequired,
        selectable: PropTypes.bool,
        title: PropTypes.string,
    }

    static defaultProps = {
        disableCheckbox: false,
        disabled: false,
        icon: null,
        isLeaf: false,
        selectable: true,
        title: '',
    }

    render() {
        const { disableCheckbox, disabled, icon, isLeaf,
             key, selectable, title, children } = this.props;
        
        const iconAttr = icon ? { icon } : {};
        const renderChildren = children != null ? children : null;
        return (
            <Tree.TreeNode
                disableCheckbox={disableCheckbox}
                disabled={disabled}
                isLeaf={isLeaf}
                key={key}
                selectable={selectable}
                title={title}
                {...iconAttr}

            >
                {renderChildren}
            </Tree.TreeNode>
        );
    }
}

export default AtiTreeItem;
