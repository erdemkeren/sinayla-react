import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const MyButton = ({ label, myOnClick }) => {
  return (
    <button type="button" onClick={myOnClick}>
      { label }
    </button>
  );
}

function App() {
  const [number, setNumber] = useState(0);

  const increment = function () {
    const incremented = number + 1;
    
    setNumber(incremented);
  }
  
  const incrementBak = () => {
    setNumber(number + 1);
  };
  const decrement = () => setNumber(number - 1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <input type="text" value={number} />
          <MyButton label="Yukselt" myOnClick={increment} />
          <MyButton label="Azalt" myOnClick={decrement} />
      </header>
    </div>
  );
}

export default App;
