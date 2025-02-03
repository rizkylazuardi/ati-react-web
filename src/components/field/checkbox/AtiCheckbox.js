import React, {Component} from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import PropTypes from 'prop-types'

/**
 * @author rizky.lazuardi
 * this component only used for input checkbox only using reactstrap.
 * v 1.0
 * param :
 *  id      = element id of checkbox
 *  name    = element name of checkbox
 *  size    = element size (sm, lg, or default blank for medium size)
 *  text    = checkbox text or description
 *  style   = checkbox additional class name
 *  value   = data value of checkbox
 *  checked = flag that indicate the component checkbox is checked or not
 *  isValid     = flag to indicate the checkbox is valid or not (true=valid,false=invalid,blank=not yet validate)
 *  onClick    = function when the checkbox clicked
 *  onChange      = function when the checkbox has changes
 */
class AtiCheckbox extends Component {
  render() {
    const {index, id, name, checked = false, text, size, value, className, onClick, onChange} = this.props
    const checkedAttr = checked ? {checked: 'checked'} : {}
    return (
      <FormGroup check>
        <Label size={size} check >
          <Input type='checkbox'
            id={id}
            name={name}
            value={value}
            className={className}
            bsSize={size}
            onClick={onClick}
            onChange={onChange}
            index={index}
            {...checkedAttr} />
          {text}
        </Label>
      </FormGroup>
    )
  }
}

/*
 * typechecking PocketCheckbox
 */
AtiCheckbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  checked: PropTypes.bool,
  size: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  isValid: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}
export default AtiCheckbox
