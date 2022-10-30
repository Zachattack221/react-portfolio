import React, { useState } from 'react';

import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import NavBar from './Navigation';
import Header from './Header';
import Footer from './Footer';

export default function ProjectPage() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage () => {
    switch (currentPage) {
      case "About"
        return <About />;
      case "Contact"
        return <Contact />;
      case "Portfolio"
        return <Portfolio />;
      case "Resume"
        return <Resume />;
    }
  }
  
  const styles = {
    div: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }
  
  return (
    <div>
      <header>
        
      </header>
    </div>
  
    )
}