import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Projects.css';
import 'swiper/css';
import project1 from "../../Image/hoc.png";
import project2 from "../../Image/sidebar.png";
import project3 from "../../Image/musicapp.png";
import project4 from "../../Image/ecommerce.png";

const Projects = () => {
    return (
        <div className='projects'>
            <span className='heading1' >Recent Projects</span>
            <span  className='heading2'> Portfolio   </span>

         <Swiper  
         spaceBetween={35}
         slidesPerView={2}
         grabCursor={true}
         className="projects-slider"
         >

           <SwiperSlide>
              <img src={project1} alt="" />
           </SwiperSlide>
           <SwiperSlide>
              <img src={project2} alt="" />
           </SwiperSlide>
           <SwiperSlide>
              <img src={project3} alt="" />
           </SwiperSlide>
           {/* <SwiperSlide>
              <img src={project4} alt="" />
           </SwiperSlide> */}



         </Swiper>





        </div>
    );
};

export default Projects;