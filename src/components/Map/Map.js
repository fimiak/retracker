import React from 'react';

function Map() {
  return (
    <div className="inner-home-map">
      <iframe
        className="maps"
        frameBorder="0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBEERsCbyJvSuyQFpq2IcnunlrO-m-qhc0&q=united+states"
        title="map"
        allowFullScreen
      />
    </div>
  );
}

export default Map;
