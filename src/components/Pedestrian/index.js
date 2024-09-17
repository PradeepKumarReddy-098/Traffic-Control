import React, { useContext } from 'react';
import {TrafficLightContext} from '../TrafficLightProvider';
import '../index.css'

const PedestrianButton = () => {
  const { state,dispatch } = useContext(TrafficLightContext);

  return (
    <>
    <button className='pedstrian-btn' onClick={() => dispatch({ type: 'REQUEST_CROSSING' })}>
      Request Crossing
    </button>
     {state.pedestrianRequested && <p>Pedestrian Crossing Requested extra time will be added</p>}
    </>
  );
};

export default PedestrianButton;