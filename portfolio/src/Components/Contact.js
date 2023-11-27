import React from 'react'

function Contact() {
  return (
    <div>
   <section className='Contact' id='Contact'>
   <div class="sec-center" data-aos="fade-down">
                    <h2>Contact <span>Me</span></h2>    
                </div>
                <div className='Contact-form' data-aos="zoom-in-up">
                  <form action=''>
                 <input type='text' placeholder='Your name' required></input>
                 <input type='email' placeholder='Email address..' required></input>
                 <textarea name=''id='colls=30'rows="10"placeholder='Write Message Here...'required></textarea>
                 <input type='submit'name=''value="Send Message" className='send-btn'></input>
                  </form>
                </div>

   </section>
   <div className='footer'>
    <div className='copyright'>
      <p>2023 Muhammad Nadeem, All Rights Reserved..</p>
    </div>
   </div>
    </div>
  )
}

export default Contact