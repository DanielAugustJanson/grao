import React from 'react'
import PropTypes from 'prop-types'
import "./Order.css"
import OderBG from "./../assets/images/C1.jpg"
import ContactUs from '../comp/widgets/ContactUs'

const Order = ({language}) => {
  return (
    <div id='OrderPage'>
      <section id='OrderLanding'>
        <img alt='Pen and Paper' src={OderBG}></img>
          <ContactUs language={language}></ContactUs>
      </section>
    </div>
  )
}

Order.propTypes = {}

export default Order