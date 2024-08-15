import React from 'react';
import '../Css/Quests.css';
import wallet from'../IMG/wallet.svg';

const TonW = () => {

  return (
    <div className='questItem'>
        <div className='questItemLeft'>
            <div className='questIcon'>
                <img src={wallet} alt=""/>
            </div>
            <div className='questItemLeftContent'>
                <p className='questTitle'>Ton Wallet Connect</p>
                <p className='questSubtitle'>+500 points</p>
            </div>
        </div>
        <div className='questItemRight'>
        </div>
    </div>
  );
};

export default TonW;