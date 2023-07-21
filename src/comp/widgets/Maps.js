import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

const Maps = (lat, lng, zoom) => {
    const defaultProps = {
        center: {
          lat: 59.43274889412256,
          lng: 24.74463366254776,
        },
        zoom: 14,
      };


  return(
    <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
    </GoogleMapReact>
  )
};

Maps.propTypes = {};

export default Maps;
