import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
const Contact = () => {
    const form = useRef();
   const [done,setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kxrh1qm', 'template_xp6nyk3', form.current, 'r0i1zZjjjMBX8zCjd')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };






    return (
        <div className='contact-form' >
           <div className="w-left">
               <div className="awesome">
                   <span>Get in touch</span>
                   <span> Contact me </span>
                  <div className='blur s-blur1' 
                   style={{ background: "#ABF1FF94" }}
                  >    
                  </div>
               </div>
           </div>
                <div className='c-right'>
               <form ref={form} onSubmit={sendEmail} >
                        <input type="text" name="user_name " className='client' placeholder='Name'  />

                        <input type="email" name="user_email " className='client' placeholder='Email'  />
                         
                         <textarea name="message" className='client'  placeholder='Message'          />        
                          <input type="submit" value="Send" className='button' />
                          <h2 className='text-message' >{done && ` Email send successfully 
                           Thanks For Contact me !`}</h2>
                         



                          <div className='blur c-blur1'
                          style={{background: "purple"}} >

                          </div>
               </form>



                </div>

        </div>
    );
};

export default Contact;