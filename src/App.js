
import React ,{ useState } from 'react';

import './App.css';
import { Items } from './Items';

function App() {
  const [inputNumber, setInputNumber] = useState(); // State to manage input value

  const handleInputChange = (e) => {
    setInputNumber(parseInt(e.target.value)); // Update inputNumber state with the input value
    setInputNumber(isNaN(e.target.value) ? 0 : e.target.value);
  };
  return (
<div className="App">
  <input value={inputNumber || ''} onChange={handleInputChange} ></input>
  <Items num={inputNumber} />
</div>
  );
}

export default App;
