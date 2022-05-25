import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [toggleSwtich, setToggleSwitch] = useState(false);
  const handlePlus = () => setCounter(prev => prev + 1);
  const handleMinus = () =>  setCounter(prev => prev - 1);
  const handleToggleSwtich = () => setToggleSwitch(prev => !prev);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button
            data-testid="plus-btn"
            onClick={handlePlus}
            disabled={toggleSwtich}
          >
            +
          </button>
          <button
            data-testid="minus-btn"
            onClick={handleMinus}
            disabled={toggleSwtich}
          >
            -
          </button>
          <button
            data-testid="on/off-btn"
            style={{ backgroundColor: 'blue', color: 'wheat' }}
            onClick={handleToggleSwtich}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
