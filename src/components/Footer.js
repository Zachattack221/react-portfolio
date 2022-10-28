import React from 'react'

import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const styles = {
  footer: {
    background: 'blue',
    justifyContent: 'flex-end',
    color: 'white',
    padding: 20,
    margin: 20,
  },
};

export default function Footer() {
  return (
    <div style={styles.footer} className="footer container-fluid">
      <div className="row">
        <div className="col-md-4">
          <h3>Designed and Created by Zach van Dijk</h3>
        </div>
        <div className="col-md-4">
          <h2>Copyright &copy; 2022 ZvD</h2>
        </div>
        <div className="col-md-4">
          <ul>
            <li>
              <a href="https://github.com/Zachattack221" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/zachary-van-dijk-787a9847/" target="_blank" rel="noopener noreferrer">...</a>
            </li>
            <li>
              <a href="https://stackoverflow.com/users/19428213/zachattack221" target="_blank" rel="noopener noreferrer">
                <svg width="100" height="100">
                  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="red" />
                </svg>
              </a>
            </li>
          </ul>

        </div>

      </div>
    </div>
  );
}

// TODO: Include GitHub, StackOverflow, and LinkedIn links