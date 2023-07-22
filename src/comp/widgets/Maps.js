import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";

/* Currently not in use. */


const Maps = ({ data }) => {
  const [mapContainer, setMapContainer] = useState(null);
  const ref = useCallback(node => {
    node && setMapContainer(node);
  }, []);

  const mapOptions = {
    // Add your map options here
    // `center` and `zoom` are required for every map to be displayed
    center: {lat: 53.5582447, lng: 9.647645},
    zoom: 16
  };

  return (
    <GoogleMapsProvider
      googleMapsAPIKey={process.env.REACT_APP_MAPS_API_KEY}
      mapContainer={mapContainer}
      mapOptions={mapOptions}>
      <React.StrictMode>
        <div ref={ref} style={{height: '100%'}} />
      </React.StrictMode>
    </GoogleMapsProvider>
  );
}

Maps.propTypes = {};

export default Maps;

