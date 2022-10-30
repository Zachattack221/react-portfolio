import React from 'react';

import MVC from '../images/homepage_featured_monsters.png'
import MoreThanMusic from '../images/More_Than_Music.png'
import PWA from '../images/Freestanding.png'

import {
  AiFillGithub
} from "react-icons/ai";

const Portfolio = () => {
  return (
    <div className='container'>
      <h1>Portfolio</h1>
      <section>
        <div className="card mb-3" style={{ maxWidth: "440" }}>
          <div className="row g-0">
            <div class="col-md-4">
              <a href="https://monster-maker01.herokuapp.com/" target='_blank'>
                <img src={MVC} className="img-fluid rounded-start" alt="Monster Maker Fantasy Team Generator, Deployed" />
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <a href="https://github.com/Christian-Hoffman/monster-maker" target='_blank'>
                  <h4>Monster Maker Model View Controller
            <AiFillGithub />
                  </h4>
                </a>
                <p className="card-text">This application will allow a user to dynamically create, customize, and display monsters to be able to put them into a game such as DnD. Monsters can be generated from a variety of categories, including options for weapon choice.</p>
                <p>Click image to view deployed site, or click title to checkout the project repo!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{ maxWidth: "540" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <a href="https://dstelzl.github.io/more-than-music/" target='_blank'>
                <img src={MoreThanMusic} className="img-fluid rounded-start" alt="More Than Music API driven search page, Deployed" />
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <a href="https://github.com/dstelzl/more-than-music" target='_blank'>
                  <h4>More Than Music API Driven Application
                  <AiFillGithub />
                  </h4>
                </a>
                <p className="card-text">Application programming interface based search platform that leverages local storage to set artist/search favorites. Powered with requests from the New York Times API the theaudioDB API</p>
                <p>Click image to view deployed site, or click title to checkout the project repo!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{ maxWidth: "540" }}>
          <div className="row g-0">
            <div class="col-md-4">
              <a href="https://desolate-taiga-69412.herokuapp.com/" target='_blank'>
                <img src={PWA} className="img-fluid rounded-start" alt="Progressive Web Application Text Editor" />
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <a href="https://github.com/Zachattack221/Progressive-Web-Applications-PWA-Text-Editor" target='_blank'>
                  <h4>Progressive Web Application Text Editor
                  <AiFillGithub />
                  </h4>
                </a>
                <p className="card-text">This is a progressive web application that can function in a browser operating both online and offline. Additionally, the app can be used in a freestanding context and still operate correctly.</p>
                <p>Click image to view deployed site, or click title to checkout the project repo!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio;