import React from 'react'

const styles = {
  footer: {
    background: 'blue',
    justifyContent: 'flex-end',
    color: 'white',
    padding: 20
  },
};

export default function Footer() {
  return (
    <nav style={styles.footer} className="footer">
      <h2>&copy; 2022</h2>
    </nav>
  );
}

// TODO: Include GitHub, StackOverflow, and LinkedIn links