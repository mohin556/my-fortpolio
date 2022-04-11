import React from 'react';

const Contact = () => {
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
               <form action="">
                 <input type="text" name="user_name " className='client' placeholder='Name'  />

                 <input type="email" name="user_email " className='client' placeholder='Email'  />


               </form>



                </div>

        </div>
    );
};

export default Contact;