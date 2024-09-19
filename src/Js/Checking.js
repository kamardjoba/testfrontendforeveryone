
import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../Css/Checking.css';
import V from '../IMG/All_Logo/V.png';

const Check = ({ setCheckOpen, setYearsOpen }) => {

  function handleClickCheckWithVibration() {
    setCheckOpen(false);
    setYearsOpen(true);
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  }

  const [showButton, setShowButton] = useState(false);
  const progressRefs = useRef([]);
  const imageRefs = useRef([]);

  const totalDuration = 3000; 
  const stages = 8;
  const stageDuration = totalDuration / stages;

  const animateProgress = useCallback((ref, imageRef, index, stage) => {
    if (stage <= stages) {
      const currentWidth = parseFloat(ref.style.width) || 0;
      const targetWidth = stage * (100 / stages);
      if (currentWidth < targetWidth) {
        const randomPause = Math.random() * (stageDuration / 2); 
        ref.style.transition = `width ${stageDuration}ms ease-in-out`;
        setTimeout(() => {
          ref.style.width = `${targetWidth}%`;

          setTimeout(() => {
            animateProgress(ref, imageRef, index, stage + 1);
          }, stageDuration + randomPause); 
        }, randomPause); 
      } else {
        animateProgress(ref, imageRef, index, stage + 1);
      }
    } else {
      imageRef.classList.remove('grayscale');
      if (index === progressRefs.current.length - 1) {
        setTimeout(() => {
          setShowButton(true);
        }, 100);
      }
    }
  }, [stageDuration, stages]);

  useEffect(() => {
    progressRefs.current.forEach((ref, index) => {
      animateProgress(ref, imageRefs.current[index], index, 1);
    });
  }, [animateProgress]);

  return (
    <div className="First_Window" id="checkwindow">
      <div className='Chk_Info'>
        <p>Checking<br />your account</p>
      </div>
      <div className='Load'>
        <div className='CheckLoad'>
          <div className='CheckUp'>
            <p>Account Age Verified</p>
            <img src={V} alt="V" className="grayscale" ref={(el) => (imageRefs.current[0] = el)} />
          </div>
          <div className='CheckDown'>
            <div className='ProgressCheck' ref={(el) => (progressRefs.current[0] = el)}></div>
          </div>
        </div>

        <div className='CheckLoad'>
          <div className='CheckUp'>
            <p>Activity Level Analyzed</p>
            <img src={V} alt="V" className="grayscale" ref={(el) => (imageRefs.current[1] = el)} />
          </div>
          <div className='CheckDown'>
            <div className='ProgressCheck' ref={(el) => (progressRefs.current[1] = el)}></div>
          </div>
        </div>

        <div className='CheckLoad'>
          <div className='CheckUp'>
            <p>Telegram Premium Checked</p>
            <img src={V} alt="V" className="grayscale" ref={(el) => (imageRefs.current[2] = el)} />
          </div>
          <div className='CheckDown'>
            <div className='ProgressCheck' ref={(el) => (progressRefs.current[2] = el)}></div>
          </div>
        </div>

        <div className='CheckLoad'>
          <div className='CheckUp'>
            <p>OC Status Confirmed</p>
            <img src={V} alt="V" className="grayscale" ref={(el) => (imageRefs.current[3] = el)} />
          </div>
          <div className='CheckDown'>
            <div className='ProgressCheck' ref={(el) => (progressRefs.current[3] = el)}></div>
          </div>
        </div>
      </div>

      <div className={`OrangeBtn ${showButton ? 'visible' : ''}`} id="checkBtn">
        <div className='BtnO' onClick={handleClickCheckWithVibration}>
          <p>Continue</p>
        </div>
      </div>
    </div>
  );
};

export default Check;
