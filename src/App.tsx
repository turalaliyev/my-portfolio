import React, { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Navigation from './components/navigation/Navigation';
import Welcome from './components/Welcome/Welcome';

import contentImage from './images/contentImage.png';

function App() {
  const [id, setId] = useState<number | null>(4);

  const handleClick = (num: number) => {
    setId(num);
  };

  return (
    <div className="App">
      <Navigation id={id} handleClick={handleClick} />
      <div className="content">
        {id === 4 && <Welcome handleClick={handleClick} />}
        {id === 0 && <About />}
      </div>
      <div className="imageContainer">
        <img className="contentImage" src={contentImage} alt="/" />
      </div>
    </div>
  );
}

export default App;
