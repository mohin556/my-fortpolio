import React from 'react';
import Cards from '../Cards/Cards';
import heart from "../../Image/heartemoji.png" ;
import glacess from "../../Image/glasses.png" ;
import humble from "../../Image/humble.png" ;
import './Servicess.css'
const Servicess = () => {
    return (
        <div className='servicess' >
            <div className="awesome">
                 
                 <span>My Awesome   </span>
                 <span> servicess </span>
                 <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur neque delectus  dolorum vero. 
                       <br />
                      Culpa iure quae, voluptatibus reprehenderit id impedit!</span>
                      <button className='button s-button'> Download resume  </button>
                      <div className='blur s-blur1' style={{ background: '#ABF1FF94'}}  >

                      </div>




                </div>  

             <div className="cards">
                 <div style={{left: "18rem", top:"-4rem"}} >
                 <Cards
                  emoji= {heart} 
                  heading = {"Design"}
                  detail = {"Adove Phtotshop,editing, etc"}
                 
                 />
                 </div>
                 <div style={{top : "10rem", left:"-4rem"}} >
                 <Cards
                  emoji= {glacess} 
                  heading = {"Developer"}
                  detail = {"Html,Css,JvaScript,React,etc"}
                 
                 />
                 </div>
                 <div style={{top : "18rem", left:"17rem"}} >
                 <Cards
                  emoji= {humble} 
                  heading = {"UI/XI"}
                  detail = {"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
                 
                 />
                 </div>
                 <div className=' blur s-blur2'  > </div>
             </div>

        </div>
    );
};

export default Servicess;