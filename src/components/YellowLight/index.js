import React, { useContext } from 'react';
import {TrafficLightContext} from '../TrafficLightProvider';
import '../index.css'

const YellowLight = () => {
  const { state } = useContext(TrafficLightContext);

  return (
    <div className={`light ${state.currentLight === 'yellow' ? 'yellow on' : 'off'}`} />
  );
};

export default YellowLight;