import React from 'react'
import PropTypes from 'prop-types'
import DividerI from "./../assets/dividers/div-IV.svg"
import "./Divider.css"

const Divider = props => {
  return (
    <div className='pageDivider'>
        <img alt='Page Divider' src={DividerI}></img>
    </div>
  )
}

Divider.propTypes = {}

export default Divider