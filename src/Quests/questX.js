import React from 'react';
import '../Css/Quests.css';
import X from'../IMG/x_chan.svg';

const XQuest = () => {

  return (
    <div className='questItem'>
        <div className='questItemLeft'>
            <div className='questIcon'>
                <img src={X} alt=""/>
            </div>
            <div className='questItemLeftContent'>
                <p className='questTitle'>Subscribe X channel</p>
                <p className='questSubtitle'>+200 points</p>
            </div>
        </div>
        <div className='questItemRight'>
            <button className='questBtn'>GO!</button>
        </div>
    </div>
  );
};

export default XQuest;
