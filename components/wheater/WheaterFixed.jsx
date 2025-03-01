import React from 'react';
import WheaterBase from './WheaterBase';

const WheaterFixed = () => {
  /* const BUENOS_AIRES_COORDS = { lat: -34.6980352, long: -58.4777728 }; */
  const BUENOS_AIRES_COORDS = { lat: 40.435069, long: -3.806378  };

  return <WheaterBase lat={BUENOS_AIRES_COORDS.lat} long={BUENOS_AIRES_COORDS.long} onRefresh={() => {}} res={'componentFixed'}/>;
};

export default WheaterFixed;
