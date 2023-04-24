import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ContactMe from './components/ContactMe/ContactMe';
import Experience from './components/Experience/Experience';
import Navigation from './components/navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import Skills from './components/Skills/Skills';
import Welcome from './components/Welcome/Welcome';

// import contentImage from './images/contentImage.png';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <Navigation />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        {/* <div className="imageContainer">
          <img className="contentImage" src={contentImage} alt="contentImage" />
        </div> */}
      </div>
    </Router>
  );
}

export default App;
