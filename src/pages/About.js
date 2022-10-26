import React from 'react'
import PropTypes from 'prop-types';
import profile from '../images/ProfilePicture.JPG'


const About = props => {
  return (
    <div  className='container'>
      <h1>About</h1>
      <img style={{ width: 300, height: 400 }} src={profile} alt='Profile' />
      <p>Zach van Dijk is an aspiring web developer, currently finishing UNC Charlotte's coding bootcamp. </p>
    </div>
  )
}

About.propTypes = {}

export default About;