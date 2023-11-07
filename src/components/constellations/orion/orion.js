import React from 'react';
import './orion.css';
import orion from "../../../assets/constellations/orion.png"
//earth's adventure

function Orion() {

  return (
    <div className=''>
         <img src={orion} className="orion" />
         <div class="glowing-effect star-orion-1"></div>
         <div class="glowing-effect star-orion-2"></div>
         <div class="glowing-effect star-orion-3"></div>
         <div class="glowing-effect star-orion-4"></div>
         <div class="glowing-effect star-orion-5"></div>
    </div>
  );
}

export default Orion;