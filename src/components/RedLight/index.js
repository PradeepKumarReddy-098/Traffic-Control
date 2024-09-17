import React, { useContext } from 'react';
import {TrafficLightContext} from '../TrafficLightProvider';
import '../index.css'

const RedLight = () => {
  const { state } = useContext(TrafficLightContext);
  console.log(state.pedestrianRequested)

  return (
    <div className={`light ${state.currentLight === 'red' ? 'red on' : 'off'} ${state.pedestrianRequested?'blinking-background':''}`} />
  );
};

export default RedLight;