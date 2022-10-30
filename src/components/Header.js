import React from 'react';
// import '../styles/Header.css';
import Navbar from './Navigation';


export default function Header() {
  const styles = {
    header: {
      backgroundColor: 'black',
    },
    h1: {
      fontSize: 30
  ,
      color: 'white',
    }
  }

  return (
    <header style={styles.header} className="header">
      <h1 style={styles.h1}>
        <Navbar />
        Test text
        </h1>
    </header>
  );
};
