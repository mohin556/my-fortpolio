import React from 'react';
import './Details.css';
import github from "../../Image/download.jpg";
import linkedIn from "../../Image/linkedin.png";
import facebook from "../../Image/fbbbb.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import crown from "../../Image/crown.png";
import thumbnil from "../../Image/Title (3) (2) (1).png";
import thumsup from "../../Image/thumbup.png";
import glacessEmoji from "../../Image/glassesimoji.png";
import blue from '../../Image/blueBg.png';
import yellow from '../../Image/yellowBg.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion';
const Details = () => {
   const transition = { duration : 2, type : 'spring'}

    return (
        <div className='details'>
            <div className="d-left">
             <div className="d-name">
                 <span>Hy! I Am</span>
                 <span>Mohin Al Hoque</span>
                 <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut numquam nihil fugit aliquid, architecto, perspiciatis laudantium voluptate nam culpa excepturi nesciunt minus reiciendis possimus omnis? A tempora iusto omnis necessitatibus!</span>

             </div>
                  <button className='button d-button'>Hire Me</button>
               <div className='i-con1' >
                   <GitHubIcon />
                   <FacebookIcon />
                  < InstagramIcon />
                 {/* <img src={github} alt="" />
                 <img src={linkedIn} alt="" />
                 <img src={facebook} alt="" /> */}
               </div>
            </div>
            <div className="d-right"> 
                 <img src={blue} alt="" />
                 <img src={yellow} alt="" />

                <img className='my-image' src={thumbnil} alt="" />
                < motion.img
                initial = {{left: '-36%'}}
                whileInView={{left : '-24%'}}
                transition = {transition}
                
                className='glacessEmoji' src={glacessEmoji} alt="" />
            <motion.div
            initial={{top:'-4%',left:'74%' }}
            whileInView={{top:'-4%', left:'68%'}}
            transition = {transition}
            
            className='float-main'  >
                <FloatingDiv image={crown} text1="Web" text2="Developer" />
            </motion.div>
            <motion.div
            initial={{top:'24rem',left:'18rem'}}
            whileInView={{left:'0rem'}}
            transition = {transition}
            
            className='float-main2'>
            <FloatingDiv image={thumsup} text1="Best Design" text2="Award" />
            </motion.div>
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