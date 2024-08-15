import React, { useEffect, useState } from 'react';
import '../Css/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import userAvatar from '../IMG/user_avatar.jpg';
import home from '../IMG/home.svg';
import leaderboard from '../IMG/leaderboard.svg';
import quests from '../IMG/quests.svg';
import friends from '../IMG/friends.svg';
import HomePage from "./HomePage";
import Leaderboard from "./Leaderboard";
import NoFriends from "./NoFriends";
import Friends from "./Friends";
import Quests from "./Quests";


function App() {

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ firstName: '', coins: 0 });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const telegramId = urlParams.get('telegramId');

    if (telegramId) {
      fetch(`https://anypatbackend-production.up.railway.app/user-info?telegramId=${telegramId}`)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setUserInfo({
              firstName: data.firstName,
              coins: data.coins
            });
          } else {
            console.error('Ошибка при получении данных о пользователе:', data.message);
          }
        })
        .catch(error => {
          console.error('Ошибка при запросе:', error);
        });
    }
  }, []);


  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
      <div className='appWrapper'>
        <header className='headerWrapper'>
            <p className='userName'>{userInfo.firstName}</p>
            <div className='userAvatarWrapper'>
                <img className='userAvatarImg' src={userAvatar} alt="userAvatar"/>
            </div>
        </header>
          <div className='centeredBlock'>
              <Routes>
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/leaderboard" element={<Leaderboard />} />
                  <Route path="/nofriends" element={<NoFriends />} />
                  <Route path="/friends" element={<Friends />} />
                  <Route path="/quests" element={<Quests />} />

              </Routes>
          </div>

        <footer className='footer'>
          
            <ul className='footerItems'>
                <li className='footerItem' onClick={() => handleNavigation('/home')}>
                    <div className='footerItemImgWrapper'>
                        <img src={home} alt="home" className='footerItemImg'/>
                    </div>
                    <p className='footerItemLabel'>Home</p>
                </li>
                <li className='footerItem' onClick={() => handleNavigation('/leaderboard')}>
                    <div className='footerItemImgWrapper'>
                        <img src={leaderboard} alt="leaderboard" className='footerItemImg'/>
                    </div>
                    <p className='footerItemLabel'>Leaderboard</p>
                </li>
                <li className='footerItem' onClick={() => handleNavigation('/quests')}>
                    <div className='footerItemImgWrapper'>
                        <img src={quests} alt="quests" className='footerItemImg'/>
                    </div>
                    <p className='footerItemLabel'>Quests</p>
                </li>
                <li className='footerItem' onClick={() => handleNavigation('/friends')}>
                    <div className='footerItemImgWrapper'>
                        <img src={friends} alt="friends" className='footerItemImg'/>
                    </div>
                    <p className='footerItemLabel'>Friends</p>
                </li>
            </ul>
        </footer>
      </div>
  );
}

export default App;
