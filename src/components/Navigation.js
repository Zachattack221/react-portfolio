import React from 'react';
// import App from '../App';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
};

// TODO: move functional links into navbar component
function Navbar() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>
        {/* <App /> */}
        </div>
    </div>
  );
}

export default Navbar;
