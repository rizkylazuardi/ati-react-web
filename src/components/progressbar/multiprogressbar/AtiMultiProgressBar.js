import React from 'react'
import { Progress } from 'reactstrap'
import PropTypes from 'prop-types'

/**
 * @author runy.novitasari
 *
 * @version 1.0
 *
 * <AtiMultiProgressBar/>
 * Progress bar that can show two or more process on once display.
 *
 */

const AtiMultiProgressBar = ({children}) => {
  return (
    <div className='text-center'>
      <Progress multi>
        {children}
      </Progress>
    </div>
  )
}

AtiMultiProgressBar.propTypes = {
  children: PropTypes.element
}

export default AtiMultiProgressBar
