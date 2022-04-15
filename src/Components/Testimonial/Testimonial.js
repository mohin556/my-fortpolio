import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import profile1 from '../../Image/profile1.jpg';
import profile2 from '../../Image/profile2.jpg';
import profile5 from '../../Image/profile5.jpg';
import profile6 from '../../Image/profile6.jpg';
import {  Pagination } from 'swiper';
import 'swiper/css/pagination';
import './Testimonial.css';
import 'swiper/css';

const Testimonial = () => {
   const users = [
       {  
           img : profile1,
           review : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus beatae aperiam voluptate, blanditiis praesentium optio voluptas officiis? Ducimus provident, neque alias blanditiis culpa excepturi officia dolorem rerum, fuga iusto ab!"

       },
       {  
        img : profile2,
        review : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus beatae aperiam voluptate, blanditiis praesentium optio voluptas officiis? Ducimus provident, neque alias blanditiis culpa excepturi officia dolorem rerum, fuga iusto ab!"

    },
    {  
        img : profile5,
        review : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus beatae aperiam voluptate, blanditiis praesentium optio voluptas officiis? Ducimus provident, neque alias blanditiis culpa excepturi officia dolorem rerum, fuga iusto ab!"

    },
    {  
        img : profile6,
        review : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus beatae aperiam voluptate, blanditiis praesentium optio voluptas officiis? Ducimus provident, neque alias blanditiis culpa excepturi officia dolorem rerum, fuga iusto ab!"

    }
   ]
 



    return (
        <div className='testimonial'>
            <div className="t-heading">
                <span> Clients Always get   </span>
                <span> Exceptional work </span>
                <span> from me </span>
                <div className="blur t-blur1 "   >  </div>
                  <div className="blur t-blur2 " style={{background:"skyblue"}} >  </div>
            </div>
       
              <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{clickable : true}}
              
              >
                {
                    users.map((user,index)=>{
                       return(
                        <SwiperSlide key = {index} >
                        <div className="t-user">
                            <img src={user.img} alt="" />
                            <span>{user.review}</span>
                        </div>
                    </SwiperSlide>
                       )
                    })
                }
              </Swiper>



        </div>
    );
};

export default Testimonial;