import React from 'react';
import '../Css/P2e.css';


const PlayToEarn = ({soon, PLANET, OctiesCosmo, starship}) => {

  return (
    <div className='P2E_Window' >
      <div class="background-container">
      <div class="clouds"></div>
        <div class="stars"></div>
        <div class="twinkling"></div>
      </div>
      <img src={soon} id='soontext'alt=''/>
      <img src={OctiesCosmo} id='cosmo'alt=''/>
      <img src={starship} id='starship'alt=''/>
      <img src={PLANET} id='planet' alt=''/>
    </div>
);
};

export default PlayToEarn;
