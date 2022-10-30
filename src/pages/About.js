import React from 'react'
import profile from '../images/ProfilePicture.JPG'


export default function About() {
  return (
    <div  className='container'>
      <h1>About</h1>
      <img style={{ width: 200, height: 300 }} src={profile} alt='Profile' />
      <p className='p-3'>Zach van Dijk is an aspiring web developer, currently finishing UNC Charlotte's coding bootcamp. He has worked in a variety of industries from healthcare, data entry, to distribution (including some with managerial experience). With patience and a willingness to learn, Zach hopes to start a web development career in the near future. </p>
    </div>
  )
};


