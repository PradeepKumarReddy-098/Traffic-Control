import { useContext, useEffect } from 'react';
import {TrafficLightContext} from '../TrafficLightProvider';

const Timer = () => {
  const { state, dispatch } = useContext(TrafficLightContext);

  useEffect(() => {
    const timer = setInterval(() => {
      if (state.pedestrianRequested) {
        if (state.currentLight==='red' && state.redTimer<7){
            dispatch({type:'INCREASE_RED_COUNT_BY_5'})
        }else if (state.currentLight === 'green') {
            if (state.greenTimer > 0) {
              dispatch({ type: 'UPDATE_GREEN_TIMER' });
            } else {
              dispatch({ type: 'CHANGE_LIGHT_TO_RED' });
              dispatch({type:'INCREASE_RED_COUNT_BY_5'}) //extra time for pedestrian crossing
            }
          } else if (state.currentLight === 'yellow') {
            if (state.yellowTimer > 0) {
              dispatch({ type: 'UPDATE_YELLOW_TIMER' });
            } else {
              dispatch({ type: 'CHANGE_LIGHT_TO_RED' });
              dispatch({type:'INCREASE_RED_COUNT_BY_5'}) //extra time for pedestrian crossing
            }
          } else {
            dispatch({ type: 'REQUEST_CROSSING', payload: false });
            dispatch({type:'RESET_TIMER'})
          }
      }else{
        //console.log("exu")
        if (state.greenTimer > 0) {
            dispatch({ type: 'UPDATE_GREEN_TIMER' });
            if (state.greenTimer===1){
              dispatch({ type: 'CHANGE_LIGHT', payload: 'yellow' });
              }
            //console.log(state.currentLight)
          } else if (state.yellowTimer > 0) {
            dispatch({ type: 'UPDATE_YELLOW_TIMER'});
              if (state.yellowTimer===1) {
                dispatch({ type: 'CHANGE_LIGHT', payload: 'red' });
              }
              //console.log(state.currentLight)
            } else if (state.redTimer >= 1) {
              dispatch({ type: 'UPDATE_RED_TIMER' });
              
              //console.log(state.currentLight)
    
            } else {
              dispatch({ type: 'CHANGE_LIGHT', payload: 'green' });
              dispatch({type:'RESET_TIMER'})
            }

      }
    }, 1000);

    return () => clearInterval(timer);
  }, [state, dispatch]);

  return null;
};

export default Timer;