import React from 'react';
import TrafficLight from './components/TrafficLight';
import TrafficLightProvider from './components/TrafficLightProvider';
import './App.css'

function App() {
  return (
    <TrafficLightProvider>
      <TrafficLight />
    </TrafficLightProvider>
  );
}

export default App;