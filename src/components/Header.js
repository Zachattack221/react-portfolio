import React from 'react';
// import '../styles/Header.css';
// import Navbar from './Navigation';


export default function Header() {
  const styles = {
    header: {
      backgroundColor: 'black',
      padding: '25px'
    },
    h1: {
      fontSize: 30,
      color: 'white',
    }
  }

  return (
    <div style={styles.header} className="header">
      <h1 style={styles.h1}>
        Test text
        </h1>
    </div>
  );
};
