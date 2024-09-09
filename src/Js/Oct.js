import React from 'react';
import '../Css/Oct.css';

import Octo from '../IMG/All_Logo/Octo.png';
import Salut from '../IMG/All_Logo/salut.gif';

const Oct = ({ onClose, setYearsOpen, coinOnlyYears }) => {

  function Vibration() {
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  }

  const handleClick = (event) => {
    const { clientX } = event;
    const screenWidth = window.innerWidth;

    if (clientX <= screenWidth / 2) {
      onClose(false);
      setYearsOpen(true);
      Vibration();
    }
  };

  return (
    <div className="First_Window" id="checkwindow" onClick={handleClick}>
      <div className='Story'>
        <div className='StoryOne'></div>
        <div className='StoryTwo' id='TwoOcs'></div>
      </div>
      <div className='YearTxt'>
        <p>You are amazing!</p>
      </div>
      <div className='YearInfo'>
        <p>Here is your OCTIES reward</p>
      </div>
      <div className='YearMain'>
        <img src={Octo} alt='Octo' />
        <p id="Ytxt">{coinOnlyYears.toLocaleString('en-US')} $OCTIES</p>
        <img src={Salut} id='Salut' alt='Salut' />
      </div>
      <div className='YearInfo'>
        <p>Thanks for your time on Telegram 🤝</p>
      </div>
      <div className="OrangeBtn" id='YearBTN'>
        <div className='BtnO' onClick={(event) => { event.stopPropagation(); onClose(false); Vibration(); }}>
          <p>Continue</p>
        </div>
      </div>
    </div>
  );
};

export default Oct;