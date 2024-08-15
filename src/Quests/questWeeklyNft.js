import React from 'react';
import '../Css/Quests.css';
import arrows from'../IMG/arrows.svg';

const WeeklyNft = () => {

  return (
    <div className='questItem'>
        <div className='questItemLeft'>
            <div className='questIcon'>
                <img src={arrows} alt=""/>
            </div>
            <div className='questItemLeftContent'>
                <p className='questTitle'>Mint Weekly NFT</p>
                <p className='questSubtitle'>+2500 Points and Weekly NFT</p>
            </div>
        </div>
        <div className='questItemRight'>
            <button className='questBtn'>Mint</button>
        </div>
    </div>
  );
};

export default WeeklyNft;