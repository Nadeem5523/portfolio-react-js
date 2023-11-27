import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <div>
     
       
       
        
      <section className='about' id='about'>
        <div className='about-img'  data-aos="zoom-in-down">
        <img src='images/p3.jpg'></img>
        </div>

        <div className='about-text' data-aos="zoom-in-up">
          <h2>I'm React js<span>Developer</span>
          <p  className='exp'>
        Experience
        <span>6 Month</span>
        
       </p>
       <p className='exp'>
        Skill:
        <span>React+node js, Html, CSS, Bootstrap, Javascript, Mongodb</span>
       </p>
       <p className='exp'>
        Address:
        <span>Kotsamaba, Dist&Tehsile:Rahim Yar Khan</span>
       </p>
       <p className='exp'>
       Email:
        <span>nadeemjami403@gmail.com</span>
       </p>
       <p className='exp'>
      Phone:
        <span>+923055523491</span>
       </p>
      
          </h2>
          <a href='#' className='btn-1'>View All Project </a>
        </div>
        
        
      </section>
      </div>
      
    )
  }
}

export default About