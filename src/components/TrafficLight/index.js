import { useContext } from 'react';
import GreenLight from '../GreenLight';
import YellowLight from '../YellowLight';
import RedLight from '../RedLight';
import PedestrianButton from '../Pedestrian';
import Timer from '../Timer';
import {TrafficLightContext} from '../TrafficLightProvider';

const TrafficLight = () => {
  const { state } = useContext(TrafficLightContext);
  //console.log(state.redTimer)
  return (
    <div className="traffic-light-container">
      <h1>Traffic Light Control</h1>
      <div className='traffic-light'>
        <GreenLight />
        <YellowLight />
        <RedLight />
        <Timer />
        <div className='time-conter-container'>
            <p>Time Left to change Light {state.currentLight==='green'?state.greenTimer:state.currentLight==='yellow'?state.yellowTimer:state.redTimer}</p>
        </div>
      </div>
      <PedestrianButton />
    </div>
  );
};

export default TrafficLight;