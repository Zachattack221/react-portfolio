import React from 'react';

const Portfolio = () => {
  return (
    <div className='container'>
      <h1>Portfolio</h1>
      <section>
        <div className="card mb-3" style={{maxWidth: "540"}}>
          <div className="row g-0">
            <div class="col-md-4">
              <img src="..." className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
              <h4>Monster Maker Model View Controller</h4>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{maxWidth: "540"}}>
          <div className="row g-0">
            <div class="col-md-4">
              <img src="..." className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
              <h4>More Than Music API Driven Application</h4>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{maxWidth: "540"}}>
          <div className="row g-0">
            <div class="col-md-4">
              <img src="..." className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
              <h4>Progressive Web Application Text Editor</h4>
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