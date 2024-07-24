import React from 'react';
import '../Css/Years.css';
import star from '../IMG/All_Logo/star.gif';

const Years = ({ onClose, setOctOpen ,Yearr}) => {

  function Vibration() {
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  }

  const handleClick = (event) => {
    const { clientX } = event;
    const screenWidth = window.innerWidth;

    if (clientX > screenWidth / 2) {
      onClose(false);
      setOctOpen(true);
      Vibration();
    }
  };

  return (
    <div className="First_Window" id="checkwindow" onClick={handleClick}>
      <div className="Story">
        <div className="StoryOne"></div>
        <div className="StoryTwo"></div>
      </div>
      <div className="YearTxt">
        <p>Rising star!</p>
      </div>
      <div className="YearInfo">
        <p>You have joined Telegram</p>
      </div>
      <div className="YearMain">
        <p>{Yearr}</p>
        <p id="Ytxt">year ago</p>
        <img src={star} id="Star" alt="star" />
      </div>
      <div className="OrangeBtn" id="YearBTN">
        <div className="BtnO" onClick={(event) => { event.stopPropagation(); onClose(false); setOctOpen(true);  Vibration(); }}>
            <p>Continue</p>
        </div>
      </div>
    </div>
  );
};

export default Years;
