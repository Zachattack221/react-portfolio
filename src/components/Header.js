import React from 'react';
// import '../styles/Header.css';
import Navbar from './Navigation';


const styles = {
  header: {
    backgroundColor: 'black',
  },
  h1: {
    fontSize: 10
,
    color: 'white',
  }
}
// Pulled from navBar 
// const styles = {
//   card: {
//     margin: 20,
//     background: '#e8eaf6',
//   },
//   heading: {
//     background: '#9a74db',
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: '1.2rem',
//     color: 'white',
//     padding: '0 20px',
//   },
// };

function Header() {
  return (
    <header style={styles.header} className="header">
      <h1 style={styles.h1}><Navbar /></h1>
    </header>
  );
}

export default Header;
