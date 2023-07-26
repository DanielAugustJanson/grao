import React from 'react'
import PropTypes from 'prop-types'
import "./OrderBox.css"
import { TextField } from '@mui/material'

const OrderBox = props => {
  return (
    <div id='OrderBox'>
        <TextField id="NameInput" label="Name" variant="outlined" />
        <TextField id="EmailInput" label="Email" variant="outlined" />
        <TextField id="PhoneIntput" label="Phone" variant="outlined" />
        <TextField id="MessageInput" label="Message" variant="outlined" />
    </div>
  )
}

OrderBox.propTypes = {}

export default OrderBox