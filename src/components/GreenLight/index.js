import React, { useContext } from 'react';
import {TrafficLightContext} from '../TrafficLightProvider';
import '../index.css'

const GreenLight = () => {
  const { state } = useContext(TrafficLightContext);

  return (
    <div className={`light ${state.currentLight === 'green' ? 'green on' : 'off'}`} />
  );
};

export default GreenLight;