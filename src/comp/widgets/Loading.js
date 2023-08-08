import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import "./Loading.css"
import loadingGif from "./../../assets/icons/Eclipse-2s.svg"

const Loading = ({loading}) => {
  const[fadeOut, setFadeOut] = useState("");

  useEffect(() => {
    if (!loading) {
      // Delay the fade-out effect to let the loading image show for a moment
      setTimeout(() => {
        setFadeOut("fade-out");
      }, 400);
      console.log("Use Effect fade out used")
    }
  }, [loading]);


  return (
    <div id='loadingDiv' className={fadeOut}>
        <img alt='loading' src={loadingGif} ></img>
    </div>
  )
}

Loading.propTypes = {}
export default Loading