import {useState} from 'react';
import './App.css'

function App() {
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setColor  
  };

  return (
    <div>
      <div className='div' >
          <button onClick={handleClick} className='rb'>Red</button>
          <button onClick={handleClick} className='bb'>Blue</button>
          <button onClick={handleClick} className='ob'>Orange</button>
      </div>

    </div>
  );
}

export default App
