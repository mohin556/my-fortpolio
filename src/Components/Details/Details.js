import React from 'react';
import './Details.css';
import github from "../../Image/download.jpg";
import linkedIn from "../../Image/linkedin.png";
import facebook from "../../Image/fbbbb.png";
import crown from "../../Image/crown.png";
import thumbnil from "../../Image/image 17.png";
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
            <div>
                <FloatingDiv image={crown} text1="Web" text2="Developer" />
            </div>
            </div>
        </div>
    );
};

export default Details;