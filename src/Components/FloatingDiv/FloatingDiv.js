import React from 'react';
import './FloatingDiv.css'
const FloatingDiv = ({image,text1,text2}) => {
    return (
        <div className='floating' >
           <img src={image} alt="" />
           <span className='text' >
               {text1}
                <br />
                {text2}               
           </span>
           
        </div>
    );
};

export default FloatingDiv;