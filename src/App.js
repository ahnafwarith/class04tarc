import { useState } from 'react';
import './App.css';
import SayMyName from './components/SayMyName';

function App() {
  return (
    <div className="App">
      <SayMyName name={"Ahnaf"} age={21}></SayMyName>
      <SayMyName name={"Anika"} age={19}></SayMyName>
    </div>
  );
}

export default App;