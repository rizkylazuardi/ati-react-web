import React from 'react'
import { FormGroup, Label } from 'reactstrap'
import PropTypes from 'prop-types'

/**
 * @author rizky.lazuardi
 * this component used to grouping of any PocketCheckbox component
 * v 1.0
 * param :
 *  id       = element id of PocketCheckboxGroup
 *  label    = element name of PocketCheckboxGroup
 *  children = children element of PocketCheckboxGroup
 */

const AtiCheckboxGroup = ({id, label, children}) => {
  // console.log(React.Children.map(children, x => x.props.text));
  // console.log(arrayId);

  return (
    <FormGroup id={id}>
      <Label check> {label} </Label>

      {children}
    </FormGroup>
  )
}

/*
 * typechecking PocketCheckbox
 */
AtiCheckboxGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: PropTypes.element
}
export default AtiCheckboxGroup
