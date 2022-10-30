import React from 'react';
import MVC from '../images/homepage_featured_monsters.png'
import MoreThanMusic from '../images/More_Than_Music.png'
import PWA from '../images/Freestanding.png'


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
                  </h4>
                </a>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
                  <h4>More Than Music API Driven Application</h4>
                </a>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{ maxWidth: "540" }}>
          <div className="row g-0">
            <div class="col-md-4">
              <a href="https://desolate-taiga-69412.herokuapp.com/" target='_blank'>
                <img src={PWA} className="img-fluid rounded-start" alt="..." />
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <a href="https://github.com/Zachattack221/Progressive-Web-Applications-PWA-Text-Editor" target='_blank'>
                  <h4>Progressive Web Application Text Editor</h4>
                </a>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio;