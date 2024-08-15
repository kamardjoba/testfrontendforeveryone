import React from 'react';
import '../Css/Quests.css';
import invite from'../IMG/invite.svg';

const FrendsQuest = () => {

  return (
    <div className='questItem'>
        <div className='questItemLeft'>
            <div className='questIcon'>
                <img src={invite} alt=""/>
            </div>
            <div className='questItemLeftContent'>
                <p className='questTitle'>Invite 10 friends</p>
                <p className='questSubtitle'>+5000 Points and Referral NFT</p>
            </div>
        </div>
        <div className='questItemRight'>
            <button className='questBtn'>Link</button>
        </div>
    </div>
  );
};

export default FrendsQuest;