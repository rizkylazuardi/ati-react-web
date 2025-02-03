import React, { Component } from 'react';
import { Tree } from 'antd';
import PropTypes from 'prop-types';

const TreeNode = Tree.TreeNode;
class AtiTree extends Component {
    static propTypes = {
        autoExpandParent: PropTypes.bool,
        checkable: PropTypes.bool,
        checkedKeys: PropTypes.arrayOf(PropTypes.string),
        defaultCheckedKeys: PropTypes.arrayOf(PropTypes.string),
        defaultExpandAll: PropTypes.bool,
        defaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),
        defaultExpandParent: PropTypes.bool,
        defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),
        disabled: PropTypes.bool,
        draggable: PropTypes.bool,
        expandedKeys: PropTypes.arrayOf(PropTypes.string),
        multiple: PropTypes.bool,
        showIcon: PropTypes.bool,
        showLine: PropTypes.bool,
        events: PropTypes.shape({
            onSelect: PropTypes.func
        })
    }

    static defaultProps = {
        autoExpandParent: true,
        checkable: false,
        checkedKeys: [],
        defaultCheckedKeys: [],
        defaultExpandAll: false,
        defaultExpandedKeys: [],
        defaultExpandParent: true,
        defaultSelectedKeys: [],
        disabled: false,
        draggable: false,
        expandedKeys: [],
        multiple: false,
        showIcon: false,
        showLine: false,
        events: {},
    }

    checkChild = (item) => {
        const disableCheckboxAttr = item.disableCheckbox ? { disableCheckbox: item.disableCheckbox } : {};
        const disabledAttr = item.disabled ? { disabled: item.disabled } : {};
        const isLeafAttr = item.isLeaf ? { isLeaf: item.isLeaf } : {};
        const keyAttr = item.key ? { key: item.key } : {};
        const selectableAttr = item.selectable ? { selectable: item.selectable } : {};
        const titleAttr = item.title ? { title: item.title } : {};
        const iconAttr = item.icon ? { icon: item.icon } : {};
        if (item.child) {
            return (
                <Tree.TreeNode
                    {...disableCheckboxAttr}
                    {...disabledAttr}
                    {...isLeafAttr}
                    {...keyAttr}
                    {...selectableAttr}
                    {...titleAttr}
                    {...iconAttr}
                >
                    {
                        item.child.map((data, index) => {
                            return this.checkChild(data);
                        })
                    }
                </Tree.TreeNode>
            )
        }
            return (
                <Tree.TreeNode
                    {...disableCheckboxAttr}
                    {...disabledAttr}
                    {...isLeafAttr}
                    {...keyAttr}
                    {...selectableAttr}
                    {...titleAttr}
                    {...iconAttr}
                />
            );
        
    }

    renderItems = () => {
        return this.props.dataSource.map((item, index) => {
            return this.checkChild(item);
        });
    }

    render() {
        const {
            children, autoExpandParent, checkable, checkedKeys, defaultCheckedKeys, 
            defaultExpandAll, defaultExpandedKeys, defaultExpandParent, defaultSelectedKeys,
            disabled, draggable, expandedKeys, multiple, selectedKeys, showIcon, showLine, events,
        } = this.props;
        const showLineAttr = showLine ? { showLine: true } : {};
        return (
            <Tree
                {...showLineAttr}
                defaultExpandedKeys={defaultExpandedKeys}
                onSelect={events.onSelect}
            >
                {this.renderItems()}
            </Tree>
        );
    }
}

export default AtiTree;
