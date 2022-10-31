import React from 'react'

import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import { IconContext } from "react-icons";


const styles = {
  footer: {
    background: 'grey',
    display: 'flex',
    justifyContent: 'space-around',
    color: 'navy',
    padding: 20,
    margin: 10,
  },
};

export default function Footer() {
  return (
    <div style={styles.footer} className="footer container-fluid mt-auto py-1 ">
      <div className="row">
          <h3 className="col-md-6">Designed & Created by Zach van Dijk &copy; 2022 ZvD</h3>
        <div className="col-md-6">
          <a href="https://github.com/Zachattack221" target="_blank" rel="noopener noreferrer"><IconContext.Provider value={{ color: 'navy', size: 82 }}>
            <AiFillGithub />
          </IconContext.Provider></a>

          <a href="https://www.linkedin.com/in/zachary-van-dijk-787a9847/" target="_blank" rel="noopener noreferrer">
            <IconContext.Provider value={{ color: 'navy', size: 82 }}>
              <FaLinkedinIn />
            </IconContext.Provider></a>

          <a href="https://stackoverflow.com/users/19428213/zachattack221" target="_blank" rel="noopener noreferrer"><IconContext.Provider value={{ color: 'navy', size: 82 }}>
            <FaStackOverflow />
          </IconContext.Provider></a>
        </div>
      </div>
    </div>
  );
};


