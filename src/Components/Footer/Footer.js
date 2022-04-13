import React from 'react';
import footer from '../../Image/footer.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer' >
              <img className='footer-img' src={footer} alt="" />
              <div className='f-content' >
                <span>mohinalhoque@gmail.com</span>
                <div className="f-icons">
                <FacebookIcon className='iconss' />
               < GitHubIcon  className='iconss' />
               <InstagramIcon className='iconss' />
                </div>

              </div>
        </div>
    );
};

export default Footer;