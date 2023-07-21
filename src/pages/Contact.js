import React from 'react'
import PropTypes from 'prop-types'
import "./Contact.css"
import ContactImage from "../assets/images/VT2.jpg"
import Maps from '../comp/widgets/Maps'

const Contact = props => {
  return (
    <>
      <section id='ContactLanding'>
        <img alt='Vene Teater Front View' src={ContactImage}></img>
        <p>Visit Us</p>
      </section>
      <section id='ContactInfo'>
        <div id='ContactMap'>
          <Maps></Maps>
        </div>
        <div id='ContactData'>
          <p>data</p>
        </div>

      </section>
    </>
  )
}

Contact.propTypes = {}

export default Contact