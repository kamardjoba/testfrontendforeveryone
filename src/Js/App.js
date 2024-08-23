// eslint-disable-next-line

import React, { useState, useEffect, useCallback, useRef } from 'react';
import '../Css/App.css';
import axios from 'axios';
import { TonConnectUIProvider, TonConnectButton} from '@tonconnect/ui-react';
import { useTonConnectUI } from '@tonconnect/ui-react';

import Friends from './Friends';
import Leaderboard from './Leaderboard';
import First from './Firstpage';
import Check from './Checking';
import Years from './Years';
import Oct from './Oct';

import TS1 from '../IMG/TaskIcon/TS1.png';
import TS2 from '../IMG/TaskIcon/TS2.png';
import TS3 from '../IMG/TaskIcon/TS3.png';
import TS4 from '../IMG/TaskIcon/TS4.png';
import TSX from '../IMG/TaskIcon/TSX.png';
import SubTg from '../IMG/TaskIcon/Other_Tg.png';
import TSNFT from '../IMG/TaskIcon/TS_NFT.png';
import TSnick from '../IMG/TaskIcon/TS_nick.png';
import galo4ka from '../IMG/All_Logo/galol4ka.png';
import nickGalka from '../IMG/All_Logo/galka.png';
import nickKr from '../IMG/All_Logo/nickNema.png';
import Ellipse from '../IMG/All_Logo/Ellipse.png';
import Block1 from '../IMG/All_Logo/Block1.png';
import FreePosition from '../IMG/All_Logo/freePosiction.png';
import ContactUs from '../IMG/All_Logo/ContactUs.png';
import AnyTapChanel from '../IMG/All_Logo/AnyTapChanel.png';

import tgLogo from '../IMG/All_Logo/TgComunity.png';
import XLogo from '../IMG/All_Logo/XCominity.png';
import NickLogo from '../IMG/All_Logo/nick.png';

import IconHome from '../IMG/LowerIcon/Home.png';
import IconLeaderboard from '../IMG/LowerIcon/Leaderboard.png';
import IconFriends from '../IMG/LowerIcon/Friends.png';

import Logo from '../IMG/All_Logo/Logo.png';
import Play from '../IMG/All_Logo/Play.png';
import Octo from '../IMG/All_Logo/Octo.png';
import invite from '../IMG/All_Logo/Invite_png.png';
import Join from '../IMG/All_Logo/Join.png';
import Nft from '../IMG/Nft_ref/Nft_ref.png';
import Checknft from '../IMG/Nft_ref_check/chech.png';
import ChecknftDone from '../IMG/Nft_ref_check_done/Done_ref.png';
import NFTm from '../IMG/All_Logo/NFTmint.png';

const REACT_APP_BACKEND_URL = 'https://testforeveryoneback-production.up.railway.app';
const userId = new URLSearchParams(window.location.search).get('userId');

function App() {
  if (!localStorage.getItem('Galka')) {localStorage.setItem('Galka', 'false');}
  const Galo4ka = localStorage.getItem('Galka') === 'true';
  if (!localStorage.getItem('Knopka')) {localStorage.setItem('Knopka', 'true');}
  const Knopka = localStorage.getItem('Knopka') === 'true';
  if (!localStorage.getItem('GalkaX')) {localStorage.setItem('GalkaX', 'false');}
  const Galo4kaX = localStorage.getItem('GalkaX') === 'true';
  if (!localStorage.getItem('KnopkaX')) {localStorage.setItem('KnopkaX', 'true');}
  const KnopkaX = localStorage.getItem('KnopkaX') === 'true';

  if (!localStorage.getItem('GalkaAnyTap')) {localStorage.setItem('GalkaAnyTap', 'false');}
  const GalkaAnyTap = localStorage.getItem('GalkaAnyTap') === 'true';
  if (!localStorage.getItem('KnopkaAnyTap')) {localStorage.setItem('KnopkaAnyTap', 'true');}
  const KnopkaAnyTap = localStorage.getItem('KnopkaAnyTap') === 'true';

  // if (!localStorage.getItem('GalkaBlock1')) {localStorage.setItem('GalkaBlock1', 'false');}
  // const GalkaBlock1 = localStorage.getItem('GalkaBlock1') === 'true';
  // if (!localStorage.getItem('KnopkaBlock1')) {localStorage.setItem('KnopkaBlock1', 'true');}
  // const KnopkaBlock1 = localStorage.getItem('KnopkaBlock1') === 'true';

  if (!localStorage.getItem('GalkaBlock2')) {localStorage.setItem('GalkaBlock2', 'false');}
  const GalkaBlock2 = localStorage.getItem('GalkaBlock2') === 'true';
  if (!localStorage.getItem('KnopkaBlock2')) {localStorage.setItem('KnopkaBlock2', 'true');}
  const KnopkaBlock2 = localStorage.getItem('KnopkaBlock2') === 'true';

  if (!localStorage.getItem('KnopkaNick')) {localStorage.setItem('KnopkaNick', 'false');}
  const KnopkaNick = localStorage.getItem('KnopkaNick') === 'true';

  if (!localStorage.getItem('Sub')) { localStorage.setItem('Sub', 'false');}
  const Sub = localStorage.getItem('Sub') === 'true';

  const [coinOnlyYears, setcoinOnlyYears] = useState(0);
  const [VisibleInvite, setVisibleInvite] = useState(false);
  const [VisibleTelegramPremium, setVisibleTelegramPremium] = useState(false);
  const [coins, setCoins] = useState(0);
  const [referralCoins, setReferralCoins] = useState(0);
  const [hasTelegramPremium, setHasTelegramPremium] = useState(false);
  const [accountAgeCoins, setAccountAgeCoins] = useState(0);
  const [referralCode, setReferralCode] = useState('');
  const [telegramLink, setTelegramLink] = useState('');
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isFrendsOpen, setIsFrendsOpen] = useState(false);
  const [FPage, setFPage] = useState(() => localStorage.getItem('FPage') !== 'false');
  const [CheckOpen, setCheckOpen] = useState(false);
  const [YearsOpen, setYearsOpen] = useState(false);
  const [OctOpen, setOctOpen] = useState(false);
  const [Yearr, setYearr] = useState(0);
  const [FriendsAnim, setFriendsAnim] = useState(false);
  const [LeaderboardAnim, setLeaderboardAnim] = useState(false);
  const [app, setApp] = useState(false);
  const [tonConnectUI] = useTonConnectUI();
  const [transactionNumber, setTransactionNumber] = useState(null);
  const [subscriptionCoins, setSubscriptionCoins] = useState(0);

  const TG_CHANNEL_LINK = "https://t.me/octies_channel";
  const TG_CHANNEL_LINK2 = "https://t.me/test_sub_check2";
  const TG_CHANNEL_LINK3 = "https://t.me/+8YkeoXBKP9JkOGMy";
  // const TG_CHANNEL_LINK4 = "https://t.me/Checkcheckcheck3";
  const X_LINK = "https://x.com/Octies_GameFI";
  const Support = "https://t.me/octies_manage";

  if (!localStorage.getItem('buttonVisibleNFT')) {localStorage.setItem('buttonVisibleNFT', 'true');}
  const buttonVisible = localStorage.getItem('buttonVisibleNFT') === 'true';
  const [showNotCompleted, setShowNotCompleted] = useState(false);
  if (!localStorage.getItem('isMintNFT')) {localStorage.setItem('isMintNFT', 'false');}
  const isMint = localStorage.getItem('isMintNFT') === 'true';
 
  useEffect(() => {
    if (window.TON_CONNECT_UI) {
        const tonConnectUI = new window.TON_CONNECT_UI.TonConnectUI({
            manifestUrl: 'https://resilient-madeleine-9ff7c2.netlify.app/tonconnect-manifest.json',
            buttonRootId: 'TonMainConBtn'
        });

        tonConnectUI.onStatusChange((walletInfo) => {
            if (walletInfo) {
                console.log('Кошелек подключен!', walletInfo);
            } else {
                console.log('Кошелек отключен!');
            }
        });
    }
}, []);




const sendTransaction = async () => {
  window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');

  // Проверка подключения кошелька
  const walletInfo = tonConnectUI.walletInfo; // Получаем информацию о подключении кошелька
  if (!walletInfo) { // Если кошелек не подключен
    alert("First ‘Connect Wallet’ to you can call ‘Mint’ function");
    return; // Останавливаем выполнение функции
  }

  const transaction = {
    validUntil: Math.floor(Date.now() / 1000) + 600,
    messages: [
      {
        address: "EQAI8SXHLi_y3ao5kqTFwT6rNDDzh_1UhicVR4jbwQhg-L4m", // Проверь правильность адреса
        amount: "10000000", // Пример в наносекундах (1 TON)
      },
    ],
  };

  try {
    await tonConnectUI.sendTransaction(transaction);

    const response = await axios.post(`${REACT_APP_BACKEND_URL}/record-transaction`, { userId });

    if (response.data.success) {
        setTransactionNumber(response.data.transactionNumber);
        localStorage.setItem('isMintNFT', 'true'); 
        alert(`Transaction successful! You are user number ${response.data.transactionNumber}`);
    } else {
        alert('Transaction failed!');
    }
  } catch (error) {
    console.error("Error sending transaction:", error);
    alert("Failed to send transaction.");
  }
};


//________________________________________________________________Task_Swap
  const blockRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [blockVisibility, setBlockVisibility] = useState([false, false, false, false, false, false]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const index = blockRefs.findIndex(ref => ref.current === entry.target);
        if (index !== -1) {
          setBlockVisibility(prevVisibility => {
            const newVisibility = [...prevVisibility];
            newVisibility[index] = entry.isIntersecting;
            return newVisibility;
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    blockRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      blockRefs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, );
  //_______________________________________________________________________________________

  function handleHomeWithVibration() {
    handleHome();
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  }

  function handleLeaderboardWithVibration() {
    handleLeaderboard();
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  }

  function handleFrendsWithVibration() {
    handleFrends();
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  }

  function handleOpenStoryWithVibration() {
    setYearsOpen(true);
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  }

  const checkSubscription = useCallback(async () => {
    if (!userId) return;
    try {
      const response = await axios.post(`${REACT_APP_BACKEND_URL}/check-subscription-and-update`, { userId });
      if (response.status === 200) {
        const data = response.data;
        setCoins(data.coins);
        setSubscriptionCoins(data.coinsSub)

        if (data.hasCheckedSubscription) {
          localStorage.setItem('Galka', 'true');
          localStorage.setItem('Knopka', 'false');
        } else {
          localStorage.setItem('Galka', 'false');
          localStorage.setItem('Knopka', 'true');
        }

        if (data.hasNicknameBonus){
          localStorage.setItem('KnopkaNick', 'true');
        }
        else{
          localStorage.setItem('KnopkaNick', 'false');
        }
        
      } else {
        console.error('Ошибка при проверке подписки:', response.data.message);
      }
    } catch (error) {
      console.error('Ошибка при проверке подписки:', error);
    }
  }, []);

  if(subscriptionCoins > 0){
    localStorage.setItem('Sub', 'true');
  } else {
    localStorage.setItem('Sub', 'false');
  }

  useEffect(() => {
    if (userId) {
      const intervalId = setInterval(() => {
        checkSubscription();
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [checkSubscription]);

  useEffect(() => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    if (userId) {
        const intervalId = setInterval(() => {
            checkSubscriptionAndUpdate(userId);
        }, 3000); 

        return () => clearInterval(intervalId);
    }
}, []);


  const fetchUserData = useCallback(async (userId) => {
    try {
      const response = await axios.post(`${REACT_APP_BACKEND_URL}/get-coins`, { userId });
      const data = response.data;
      if (response.status === 200) {
        setCoins(data.coins);
        setReferralCoins(data.referralCoins);
        setHasTelegramPremium(data.hasTelegramPremium);
        setTransactionNumber(data.transactionNumber);

  
        const accountCreationDate = new Date(data.accountCreationDate);
        const currentYear = new Date().getFullYear();
        const accountYear = accountCreationDate.getFullYear();
        const yearsOld = currentYear - accountYear;
        setYearr(yearsOld);
        let accountAgeCoins = yearsOld * 500;
        if (yearsOld < 1) {
          accountAgeCoins = 300; // Минимум 300 монет для аккаунтов младше года
      }
        setcoinOnlyYears(accountAgeCoins);
        if (hasTelegramPremium === true) {
          setVisibleTelegramPremium(true);
        }
        if (referralCoins > 0) {
          setVisibleInvite(true);
        }
        
        if (data.hasCheckedSubscription) {
          localStorage.setItem('Galka', 'true');
          localStorage.setItem('Knopka', 'false');

        } else {
          localStorage.setItem('Galka', 'false');
          localStorage.setItem('Knopka', 'true');
        }

        if (data.hasCheckedSubscription2) {
          localStorage.setItem('GalkaAnyTap', 'true');
          localStorage.setItem('KnopkaAnyTap', 'false');

        } else {
          localStorage.setItem('GalkaAnyTap', 'false');
          localStorage.setItem('KnopkaAnyTap', 'true');
        }

        if (data.hasCheckedSubscription3) {
          localStorage.setItem('GalkaBlock1', 'true');
          localStorage.setItem('KnopkaBlock1', 'false');

        } else {
          localStorage.setItem('GalkaBlock1', 'false');
          localStorage.setItem('KnopkaBlock1', 'true');
        }

        if (data.hasCheckedSubscription4) {
          localStorage.setItem('GalkaBlock2', 'true');
          localStorage.setItem('KnopkaBlock2', 'false');

        } else {
          localStorage.setItem('GalkaBlock2', 'false');
          localStorage.setItem('KnopkaBlock2', 'true');
        }

        if (data.hasNicknameBonus){
          localStorage.setItem('KnopkaNick', 'true');
        }
        else{
          localStorage.setItem('KnopkaNick', 'false');
        }

        setAccountAgeCoins(accountAgeCoins);
  
        const referralResponse = await axios.post(`${REACT_APP_BACKEND_URL}/generate-referral`, { userId });
        const referralData = referralResponse.data;
        if (referralResponse.status === 200) {
          setReferralCode(referralData.referralCode);
          setTelegramLink(referralData.telegramLink);
        } else {
          console.error('Ошибка при получении реферальных данных:', referralData.message);
        }
      } else {
        console.error('Ошибка при получении данных пользователя:', data.error);
      }
    } catch (error) {
      console.error('Ошибка при получении данных пользователя:', error);
    }
  }, [hasTelegramPremium, referralCoins]);
  
const handleCheckReferrals = () => {
    axios.post(`${REACT_APP_BACKEND_URL}/get-referral-count`, { userId })
      .then(response => {
        const referralCount = response.data.referralCount;

        if (referralCount >= 14) {
          localStorage.setItem('buttonVisibleNFT', 'false'); // Меняем кнопку на "Mint NFT"
          window.Telegram.WebApp.HapticFeedback.notificationOccurred('success');
        } else {
          setShowNotCompleted(true);
          window.Telegram.WebApp.HapticFeedback.notificationOccurred('error');
          setTimeout(() => {
            setShowNotCompleted(false);
          }, 5000);
        }
      })
      .catch(error => {
        console.error('Ошибка при проверке рефералов:', error);
      });
  };

  const checkSubscriptionAndUpdate = async (userId) => {
    try {
      const response = await axios.post(`${REACT_APP_BACKEND_URL}/check-subscription-and-update`, { userId });
      if (response.status === 200) {
        const data = response.data;
        setCoins(data.coins);
        
        if (data.hasCheckedSubscription) {
          localStorage.setItem('Galka', 'true');
          localStorage.setItem('Knopka', 'false');

        } else {
          localStorage.setItem('Galka', 'false');
          localStorage.setItem('Knopka', 'true');
        }

        if (data.hasCheckedSubscription2) {
          localStorage.setItem('GalkaAnyTap', 'true');
          localStorage.setItem('KnopkaAnyTap', 'false');

        } else {
          localStorage.setItem('GalkaAnyTap', 'false');
          localStorage.setItem('KnopkaAnyTap', 'true');
        }

        if (data.hasCheckedSubscription3) {
          localStorage.setItem('GalkaBlock1', 'true');
          localStorage.setItem('KnopkaBlock1', 'false');

        } else {
          localStorage.setItem('GalkaBlock1', 'false');
          localStorage.setItem('KnopkaBlock1', 'true');
        }

        if (data.hasCheckedSubscription4) {
          localStorage.setItem('GalkaBlock2', 'true');
          localStorage.setItem('KnopkaBlock2', 'false');

        } else {
          localStorage.setItem('GalkaBlock2', 'false');
          localStorage.setItem('KnopkaBlock2', 'true');
        }
     
      } else {
        console.error('Ошибка при проверке подписки:', response.data.error);
      }
    } catch (error) {
      console.error('Ошибка при проверке подписки:', error);
    }
  };

  useEffect(() => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    if (userId) {
      const handleVisibilityChange = () => {
        if (!document.hidden) {
          checkSubscription(userId);
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    } else {
      console.error('userId не найден в URL');
    }
  }, [checkSubscription]);

  useEffect(() => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    if (userId) {
      fetchUserData(userId).then(() => {
        checkSubscription(userId).then(() => {
          fetchUserData(userId);
        });
      });
    } else {
      console.error('userId не найден в URL');
    }
  }, [fetchUserData, checkSubscription]);


  
  const Tg_Channel_Open_X = async () => {
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    window.open(X_LINK, '_blank');
    setTimeout(async () => {
        if (localStorage.getItem('KnopkaX') === 'true') {
            localStorage.setItem('KnopkaX', 'false');
            localStorage.setItem('GalkaX', 'true');
            try {
                const response = await axios.post(`${REACT_APP_BACKEND_URL}/update-coins`, { userId, amount: 500 });
                if (response.data.success) {
                    setCoins(response.data.coins);
                    if (response.data.hasReceivedTwitterReward) {
                        localStorage.setItem('hasReceivedTwitterReward', 'true');
                         setCoins(response.data.coins);
                    }
                } else {
                    console.error('Ошибка при обновлении монет:', response.data.message);
                }
            } catch (error) {
                console.error('Ошибка при обновлении монет:', error);
            }
        }
    }, 5000);
};

  const Tg_Channel_Open_chek = () => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    window.open(TG_CHANNEL_LINK, '_blank');
    setTimeout(() => {
      checkSubscriptionAndUpdate(userId);
    }, 3000);
  };

  const Tg_Channel_Open_chek2 = () => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    window.open(TG_CHANNEL_LINK2, '_blank');
    setTimeout(() => {
      checkSubscriptionAndUpdate(userId);
    }, 3000);
  };

  const Tg_Channel_Open_chek3 = () => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    window.open(TG_CHANNEL_LINK3, '_blank');
    setTimeout(() => {
      checkSubscriptionAndUpdate(userId);
    }, 3000);
  };

  // const Tg_Channel_Open_chek4 = () => {
  //   const userId = new URLSearchParams(window.location.search).get('userId');
  //   window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  //   window.open(TG_CHANNEL_LINK4, '_blank');
  //   setTimeout(() => {
  //     checkSubscriptionAndUpdate(userId);
  //   }, 3000);
  // };

  const Tg_Channel_Support = () => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    window.open(Support, '_blank');
    setTimeout(() => {
      checkSubscriptionAndUpdate(userId);
    }, 3000);
  };



  useEffect(() => {
    if (window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand();
    }
  }, []);

  const handleHome = () => {
    setIsLeaderboardOpen(false);
    setIsFrendsOpen(false);
    setFriendsAnim(true);
    setLeaderboardAnim(true);
    setApp(false);
  };

  const handleFrends = () => {
    setIsFrendsOpen(true);
    setFriendsAnim(false);
    setLeaderboardAnim(true);
    setIsLeaderboardOpen(false);
    setApp(true);
  };

  const handleLeaderboard = () => {
    setIsLeaderboardOpen(true);
    setFriendsAnim(true);
    setLeaderboardAnim(false);
    setIsFrendsOpen(false);
    setApp(true);
  };

  const handleFirstPageClose = () => {
    setFPage(false);
    localStorage.setItem('FPage', 'false');
  };

  const getRandomColor = useCallback(() => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }, []);

  return (
    <TonConnectUIProvider manifestUrl="https://resilient-madeleine-9ff7c2.netlify.app/tonconnect-manifest.json">
    <div className="App">

      {app && <div className='blk'></div>}
      <div className="info">
        <img src={Logo} alt='Logo' />
        <div className='Txt' onClick={handleOpenStoryWithVibration}>
          <img src={Play} alt='Play' />
          <p>Your Score</p>
        </div>
      </div>
      {!isMint && <div className="main">
        <img src={Octo} alt='Octo' onClick={(event) => {localStorage.clear(); }} />
      </div>}
      {!isMint &&<div className='MainCoin'>
        <p>{coins} $OCTIES</p>
      </div>}
      {isMint &&<div className='MintCoin'>
        <img src={NFTm} alt='NFTm'  onClick={(event) => {localStorage.clear(); }} />
        <p id='endtxt'>{coins} <span id='highlight'>{transactionNumber}</span> $OCTIES</p>
      </div>}

      <div className='Menu'>
      
      {!isMint && <div className='nft-promo'>
          <div className='nft-text'>
            <h2>GET YOUR <span id='highlight'>FREE</span> NFT!</h2>
            <p>Invite 15 friends, Connect Wallet <br/>and receive unique OCTIES NFT</p>
            <div className='nft-buttons'>
              {buttonVisible ? (
                <div className="mint-section">
                  <button className="referral-button" onClick={handleCheckReferrals}> Check referrals</button>
                  {showNotCompleted && (
                  <p id="not-completed">
                    <img src={Checknft} alt="Not completed" />Not completed
                  </p>)}
                </div>
              ) : (
                <div className="mint-section">
                  <p id="friends-count">15 friends <img src={ChecknftDone} alt="Checkmark" /></p>  
                  <button className="mint-button" onClick={sendTransaction}>Mint</button>
                </div>)}
              <div className="ton-con">
                <div className='feikton'>
                  <TonConnectButton/>
                </div>
              </div>
            </div>
          </div>
          <div className='nft-image'>
            <img src={Nft} alt='OCTIES NFT' /> 
          </div>
        </div>}

        <div className='Skroll_Menu_Border'>
          <div className='MenuBorder' ref={blockRefs[0]}>
            <div className='flex_menu_border'>
              <div className='rightFlex'>
                <p id='up'>OCTIES COMMUNITY</p>
                <p id='dp'>Home for Telegram OCs</p>
                <div className='MenuBtn'>
                  {Knopka && <img onClick={Tg_Channel_Open_chek} src={Join} alt='Join' />}
                  <p> {Knopka && <p id="plus">+</p>}1000 $OCTIES</p>
                  {Galo4ka && <img id="galo4ka" src={galo4ka} alt='galo4ka' />}
                </div>
              </div>
              <div className='leftFlex'>
                <img src={tgLogo} alt='tgLogo'/>
              </div>
            </div>
          </div>

          <div className='MenuBorder' ref={blockRefs[1]}>
            <div className='flex_menu_border'>
              <div className='rightFlex'>
                <p id='up'>OCTIES X</p>
                <p id='dp'>Home for X OCs</p>
                <div className='MenuBtn'>
                  {KnopkaX && <img onClick={Tg_Channel_Open_X} src={Join} alt='Join' />}
                  <p> {KnopkaX && <p id="plus">+</p>}500 $OCTIES</p>
                  {Galo4kaX && <img id="galo4ka" src={galo4ka} alt='galo4ka' />}
                </div>
              </div>
              <div className='leftFlex'>
                <img src={XLogo} alt='XLogo'/>
              </div>
            </div>
          </div>

          <div className='MenuBorder' ref={blockRefs[2]}>
            <div className='flex_menu_border' id='orangeBack'>
              <div className='rightFlex'>
              <p id='up'>Тапаем <span class="emoji">🐹</span></p>
                <p id='dp'>Потыкать и стать миллионером!</p>
                <div className='MenuBtn'>
                  {KnopkaBlock2 && <img onClick={Tg_Channel_Open_chek3} src={Join} alt='Join' />}
                  <p> {KnopkaBlock2 && <p id="plus">+</p>}750 $OCTIES</p>
                  {GalkaBlock2 && <img id="galo4ka" src={galo4ka} alt='galo4ka' />}
                </div>
              </div>
              <div className='leftFlex'>
                <img src={Block1} alt='Tapaem_Logo'/>
              </div>
            </div>
          </div>

          <div className='MenuBorder' ref={blockRefs[3]}>
            <div className='flex_menu_border'  id='orangeBack'>
              <div className='rightFlex'>
                <p id='up'>AnyTap Community</p>
                <p id='dpp'>Complete tasks, earn rewards, and join <br/>the on-chain community.</p>
                <div className='MenuBtn'>
                  {KnopkaAnyTap && <img onClick={Tg_Channel_Open_chek2} src={Join} alt='Join' />}
                  <p> {KnopkaAnyTap && <p id="plus">+</p>}750 $OCTIES</p>
                  {GalkaAnyTap && <img id="galo4ka" src={galo4ka} alt='galo4ka' />}
                </div>
              </div>
              <div className='leftFlex'>
                <img src={AnyTapChanel} alt='XLogo'/>
              </div>
            </div>
          </div>

          <div className='MenuBorder' ref={blockRefs[4]}>
            <div className='flex_menu_border' id='greenBack'>
              <div className='rightFlex'>
                <p id='up'>Available Partner Space</p>
                <p id='dp'>Your proposition</p>
                <div className='MenuBtn'>
                  <img onClick={Tg_Channel_Support} src={ContactUs} alt='ContactUs' />
                  <p>+??? $OCTIES</p>
                </div>
              </div>
              <div className='leftFlex'>
                <img src={FreePosition} alt='XLogo'/>
              </div>
            </div>
          </div>

          <div className='MenuBorder' ref={blockRefs[5]}>
            <div className='flex_menu_border'>
              <div className='rightFlex'>
                <p id='up'>OCTIES NICKNAME</p>
                <p id='dp'>Add the word “Octies” to <br/>your nickname.</p>
                
                <div className='MenuBtn'>
                  {KnopkaNick &&  <div className='nickDiv'>
                    <p><img src={nickGalka} alt=''/><span id='Greentxt'>Completed </span>300 $OCTIES</p>  
                  </div>}
                  {!KnopkaNick &&  <div className='nickDiv'>
                    <p><img src={nickKr} alt=''/><span id='Redtxt'>Not completed</span>+300 $OCTIES</p>  
                  </div>}
                </div>
              </div>
              <div className='leftFlex' id='nick'>
                <img src={NickLogo} alt='NickLogo'/>
              </div>
             </div>
          </div>      

        </div>
        <div className='Reward'>
          <div className='EllipsSkroll'>
            <img src={Ellipse} alt='Ellips' className={blockVisibility[0] ? '' : 'img-dark'} />
            <img src={Ellipse} alt='Ellips' className={blockVisibility[1] ? '' : 'img-dark'} />
            <img src={Ellipse} alt='Ellips' className={blockVisibility[2] ? '' : 'img-dark'} />
            <img src={Ellipse} alt='Ellips' className={blockVisibility[3] ? '' : 'img-dark'} />
            <img src={Ellipse} alt='Ellips' className={blockVisibility[4] ? '' : 'img-dark'} />
            <img src={Ellipse} alt='Ellips' className={blockVisibility[5] ? '' : 'img-dark'} />
          </div>
          <p>Your Rewards</p>
        </div>
        <div className='Tasks' id={isMint ? 'TaskswithoutNft' : undefined}>

        {isMint && <div className='TS'>
            <div className='tsPhoto'>
              <img src={TSNFT} alt='TSNFT' /> <p>OCTIES NFT</p>
            </div>
            <div className='tsPhoto'>
              <p id='highlight' >+1 NFT</p>
            </div>
          </div>}

          {Sub && <div className='TS'>
            <div className='tsPhoto'>
              <img src={SubTg} alt='SubTg' /> <p id='highlight'>Partner channels subs</p>
            </div>
            <div className='tsPhoto'>
              <p>+{subscriptionCoins} $OCTIES</p>
            </div>
          </div>}

          <div className='TS'>
            <div className='tsPhoto'>
              <img src={TS1} alt='TS1' /> <p>Account age</p>
            </div>
            <div className='tsPhoto'>
              <p>+{accountAgeCoins} $OCTIES</p>
            </div>
          </div>

          {VisibleTelegramPremium && <div className='TS'>
            <div className='tsPhoto'>
              <img src={TS2} alt='TS2' /> <p>Telegram Premium</p>
            </div>
            <div className='tsPhoto'>
              <p>+{hasTelegramPremium ? 500 : 0} $OCTIES</p>
            </div>
          </div>}

          {Galo4ka && <div className='TS'>
            <div className='tsPhoto'>
              <img src={TS3} alt='TS3' /> <p>Channel Subscription</p>
            </div>
            <div className='tsPhoto'>
              <p>+1000 $OCTIES</p>
            </div>
          </div>}

          {KnopkaNick && <div className='TS'>
            <div className='tsPhoto'>
              <img src={TSnick} alt='TS3' /> <p>Add "Octies" to nickname</p>
            </div>
            <div className='tsPhoto'>
              <p>+ 300 $OCTIES</p>
            </div>
          </div>}

          {Galo4kaX && <div className='TS'>
          <div className='tsPhoto'>
            <img src={TSX} alt='TSX' /> <p>Octies X</p>
          </div>
          <div className='tsPhoto'>
            <p>+ 500 $OCTIES</p>
          </div>
        </div>}       

          {VisibleInvite && <div className='TS'>
            <div className='tsPhoto'>
              <img src={TS4} alt='TS4' /> <p>Invites</p>
            </div>
            <div className='tsPhoto'>
              <p>+{referralCoins} $OCTIES</p>
            </div>
          </div>}
        </div>
      </div>

      <div className='BTNLow'>
        <div className='LowerBTN'>
          <div className={`BTN ${(isLeaderboardOpen || isFrendsOpen) ? 'img-dark' : ''}`} onClick={handleHomeWithVibration}>
            <img src={IconHome} alt='IconHome' />
          </div>
          <div className={`BTN ${!isLeaderboardOpen ? 'img-dark' : ''}`} onClick={handleLeaderboardWithVibration}>
            <img src={IconLeaderboard} alt='IconLeaderboard' />
          </div>
          <div className={`BTN ${!isFrendsOpen ? 'img-dark' : ''}`} onClick={handleFrendsWithVibration}>
            <img src={IconFriends} alt='IconFriends' />
          </div>
        </div>
      </div>

      {FPage && (<First onClose={handleFirstPageClose} setCheckOpen={setCheckOpen} />)}

      {CheckOpen && (<Check setCheckOpen={setCheckOpen} setYearsOpen={setYearsOpen} />)}

      {YearsOpen && (<Years onClose={setYearsOpen} setOctOpen={setOctOpen} Yearr={Yearr} />)}

      {OctOpen && (<Oct onClose={setOctOpen} setYearsOpen={setYearsOpen} coinOnlyYears={coinOnlyYears} />)}

      {isLeaderboardOpen && (<Leaderboard LeaderboardAnim={LeaderboardAnim} userId={userId} coins={coins} getRandomColor={getRandomColor}/>)}

      {isFrendsOpen && (<Friends FriendsAnim={FriendsAnim} invite={invite} referralCode={referralCode} telegramLink={telegramLink} getRandomColor={getRandomColor}/>)}

    </div>
     </TonConnectUIProvider>
  );
}

export default App;