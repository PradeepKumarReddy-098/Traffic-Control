import { createContext, useReducer } from 'react';

const TrafficLightContext = createContext();

const initialState = {
  currentLight: 'green',
  pedestrianRequested: false,
  greenTimer: 10,
  yellowTimer: 3,
  redTimer: 7,
};

const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT':
      return {
        ...state,
        currentLight: action.payload,
      };
    case 'REQUEST_CROSSING':
        return {
            ...state,
            pedestrianRequested: true,
          };
    case 'RESET_TIMER':
      return {
        ...state,
        greenTimer: 10,
        yellowTimer: 3,
        redTimer: 7,
      };
      case 'UPDATE_GREEN_TIMER':
        return {
          ...state,
          greenTimer: state.greenTimer - 1,
        };
      case 'UPDATE_YELLOW_TIMER':
        return {
          ...state,
          yellowTimer: state.yellowTimer - 1,
        };
      case 'UPDATE_RED_TIMER':
        return {
          ...state,
          redTimer: state.redTimer - 1,
        };
    case 'INCREASE_RED_COUNT_BY_5':
        return{
            ...state,
            redTimer:state.redTimer + 5,
            pedestrianRequested: false,
            greenTimer: 0,
            yellowTimer: 0
        }
    case 'CHANGE_LIGHT_TO_RED':
        return{
            ...state,
            pedestrianRequested:false,
            greenTimer: 0,
            yellowTimer: 0,
            redTimer:7,
            currentLight:'red',
        }
    default:
      return state;
  }
};

const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export default TrafficLightProvider;
export { TrafficLightContext};