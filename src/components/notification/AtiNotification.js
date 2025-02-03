import {notification} from 'antd'

/** default ditentuin dari kita aja */
const config = {
  placement: 'topRight',
  duration: 4
}

const defaultProps = {
  type: 'open',
  customStyle: null
}

const applyConfiguration = (config) => {
  notification.config(config)
}

const AtiNotification = (props) => {
  applyConfiguration(Object.assign(config, props.config))
  const newProps = Object.assign(defaultProps, props)
  const style = newProps.customStyle !== undefined && newProps.customStyle !== null ? newProps.customStyle : null
  const icon = newProps.icon !== undefined && newProps.icon !== null ? newProps.icon : null
  if (newProps.type === 'open') {
    return notification.open({
      ...newProps,
      style: style,
      message: newProps.title,
      description: newProps.content,
      icon: icon
    })
  } else {
    return notification[newProps.type]({
      ...newProps,
      message: newProps.title,
      description: newProps.content
    })
  }
}
export default AtiNotification
