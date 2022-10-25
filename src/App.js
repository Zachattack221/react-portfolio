import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';

function renderPortfolio(currentPage) {
  if (currentPage === 'About') {
    return <About />
  }
  if (currentPage === 'Contact') {
    return <Contact />
  }
  if (currentPage === 'Portfolio') {
    return <Portfolio />
  }
  if (currentPage === 'Resume') {
    return <Resume />
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  return (
    <div>
      <nav>
        <a onClick={() => setCurrentPage('About')}>
          About
        </a>
        <a onClick={() => setCurrentPage('Contact')}>
          Contact
        </a>
        <a onClick={() => setCurrentPage('Portfolio')}>
          Portfolio
        </a>
        <a onClick={() => setCurrentPage('Resume')}>
          Resume
        </a>
      </nav>
      {renderPortfolio(currentPage)}
    </div>
  )
}


export default App;