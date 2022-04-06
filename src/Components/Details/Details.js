import React from 'react';
import './Details.css';
import github from "../../Image/download.jpg";
import linkedIn from "../../Image/linkedin.png";
import facebook from "../../Image/fbbbb.png";
import crown from "../../Image/crown.png";
import thumbnil from "../../Image/image 17.png";
import thumsup from "../../Image/thumbup.png";
import glacessEmoji from "../../Image/glassesimoji.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
const Details = () => {
    return (
        <div className='details'>
            <div className="d-left">
             <div className="d-name">
                 <span>Hy! I Am</span>
                 <span>Mohin Al Hoque</span>
                 <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut numquam nihil fugit aliquid, architecto, perspiciatis laudantium voluptate nam culpa excepturi nesciunt minus reiciendis possimus omnis? A tempora iusto omnis necessitatibus!</span>

             </div>
                  <button className='button d-button'>Hire Me</button>
               <div className='i-cons' >
                 <img src={github} alt="" />
                 <img src={linkedIn} alt="" />
                 <img src={facebook} alt="" />
               </div>
            </div>
            <div className="d-right"> 
             
                <img className='my-imahe' src={thumbnil} alt="" />
                <img className='glacessEmoji' src={glacessEmoji} alt="" />
            <div className='float-main'  >
                <FloatingDiv image={crown} text1="Web" text2="Developer" />
            </div>
            <div className='float-main2'>
            <FloatingDiv image={thumsup} text1="Best Design" text2="Award" />
            </div>
             <div className='blur ' style={{background: 'rgb(238 210 255)'}} >

             </div>
             <div  className='blur'style={{
                 background : "#C1F5FF",
                 top: '17rem',
                 width:'21rem',
                 height:'11rem',
                 left:'-9rem'
             }} >

             </div>

            </div>
        </div>
    );
};

export default Details;