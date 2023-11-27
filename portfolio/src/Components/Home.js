import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div>
      
        <section className='hero'id='home'>
        <div className='main-content' data-aos="fade-in">
            <h4>
                Hi, There !
            </h4>
            <h1>I'm<span>Nadeem</span></h1>
            <p>My name is Muhammad Nadeem from Rahim Yar khan</p>
            
            <div className='social'>
                <a href='#'><i class="ri-facebook-fill"></i></a>
               <a href='#'><i class="ri-instagram-fill"></i></a>
               <a href='#'><i class="ri-twitter-fill"></i></a>
               <a href='#'><i class="ri-youtube-fill"></i></a>
            </div>
            <div className='main-btn'>
              <a href='#' className='btn'>Hire me</a>
              <a href='#' className='btn btn2'>Download CV</a>
            </div>
        </div>
        </section>
        
       
      </div>
    )
  }
}

export default Home