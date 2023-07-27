import React from 'react'
import PropTypes from 'prop-types'
import "./Order.css"
import OrderBox from '../comp/widgets/OrderBox'
import OderBG from "./../assets/images/C1.jpg"

const Order = props => {
  return (
    <div>
      <section id='OrderLanding'>
        <img alt='Pen and Paper' src={OderBG}></img>
        <OrderBox/>
      </section>
    </div>
  )
}

Order.propTypes = {}

export default Order