import React from 'react';
import '../styles/Header.css';



const styles = {
  header: {
    backgroundColor: 'black',
  },
  h1: {
    fontSize: 10
  }
}

function Header() {
  return (
    <header style={styles.header} className="header">
      <h1 style={styles.h1}>Home</h1>
    </header>
  );
}

export default Header;
