import React from 'react';
import '../Css/Quests.css';
import telegram from'../IMG/telegram.svg';

const tgOctiesQuest = () => {

  return (
    <div className='questItem'>
        <div className='questItemLeft'>
            <div className='questIcon'>
                <img src={telegram} alt=""/>
            </div>
            <div className='questItemLeftContent'>
                <p className='questTitle'>Subscribe Octies channel</p>
                <p className='questSubtitle'>+200 points</p>
            </div>
        </div>
        <div className='questItemRight'>
            <button className='questBtn'>GO!</button>
        </div>
    </div>
  );
};

export default tgOctiesQuest;
