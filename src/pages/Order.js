import React from 'react'
import PropTypes from 'prop-types'
import OrderBox from '../comp/widgets/OrderBox'

const Order = props => {
  return (
    <div>
      <section id='OrderLanding'>
        <h2>Sumbit order</h2>
        <OrderBox/>
      </section>
    </div>
  )
}

Order.propTypes = {}

export default Order