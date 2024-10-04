import React, { useState, useEffect, useCallback} from 'react';
import { TonConnectUIProvider, useTonAddress } from '@tonconnect/ui-react';
import { Routes, Route, Link, useLocation, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import '../Css/App.css';
//import pages
import Home from './Home';
import First from './Firstpage';
import Check from './Checking';
import Years from './Years';
import Oct from './Oct';
import Leaderboard from './Leaderboard';
import PlayToEarn from './P2e.js';
import Friends from './Friends';
import NFTs from './NFTs.js';
import Qr from '../Loading/DesktopQR.js';
import LoadingScreen from '../Loading/Loading.js';
import LoadingScreenOcto from '../Loading/LoadingOcto.js';
import LoadingScreenOctoNft from '../Loading/LoadingOctoNft.js'
//import image Friends
import invite from '../IMG/All_Logo/Invite_png.png';
//import image p2e
import soon from '../IMG/ComingSoon/Text_soon.png';
import PLANET from '../IMG/ComingSoon/PLANET.png';
import OctiesCosmo from '../IMG/ComingSoon/OctiesCosmo.png';
import starship from '../IMG/ComingSoon/starship.png';
//import image NFT
import missed from '../IMG/NFTs/Missed.png';
import complated from '../IMG/NFTs/Complated.png';
import shapka2 from '../IMG/NFTs/Shapka2.png';
import dedpool from '../IMG/NFTs/dedpool.png';
import rosomaha from '../IMG/NFTs/rosomaha.png';
import ton5 from '../IMG/NFTs/5Ton.png';
import ton55 from '../IMG/NFTs/Ton5.png';
import durov from '../IMG/NFTs/durov.png';
import Nft from '../IMG/Nft_ref/Nft_ref.png';
import Checknft from '../IMG/Nft_ref_check/chech.png';
import ChecknftDone from '../IMG/Nft_ref_check_done/Done_ref.png';
//import image Lower
import IconHome from '../IMG/LowerIcon/Home.png';
import IconLeaderboard from '../IMG/LowerIcon/Leaderboard.png';
import IconFriends from '../IMG/LowerIcon/Friends.png';
import NFTlogo from '../IMG/LowerIcon/NFTLogo.png';
import p2e from '../IMG/LowerIcon/p2e.png';


const REACT_APP_BACKEND_URL = 'https://octiesback-production.up.railway.app';


function App() {

 

  useEffect(() => {
    const userAgent = navigator.userAgent; // Define userAgent

    if (
      userAgent.match(/Mobile/i) ||
      userAgent.match(/Android/i) ||
      userAgent.match(/iPhone/i) ||
      userAgent.match(/iPad/i)
    ) {
      navigateOcties("/loading");
    } else {
      navigateOcties("/qr");
    }
  }, );

 
  

  const [userId, setUserId] = useState(null); // Используем useState для хранения userId

  useEffect(() => {
    // Проверяем, если Telegram Web App доступен
    if (window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();

      // Извлекаем user_id из initDataUnsafe
      const userIdFromTG = tg.initDataUnsafe?.user?.id;

      if (userIdFromTG) {
        setUserId(userIdFromTG);  // Устанавливаем userId в state
        localStorage.setItem('userId', userIdFromTG);
        console.log("User ID from Telegram WebApp: ", userIdFromTG);
      } else {
        console.error('userId не найден в initDataUnsafe');
      }
    } else {
      console.error('Telegram Web App недоступен');
    }

    // Если не было получено userId из Telegram WebApp, проверим localStorage
    const savedUserId = localStorage.getItem('userId');
    if (savedUserId && !userId) {
      setUserId(savedUserId); // Если userId сохранен в localStorage, устанавливаем его в state
    }
  }, [userId]);

  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
  };
  preloadImage(soon); 
  preloadImage(PLANET); 
  preloadImage(OctiesCosmo);
  preloadImage(starship);
  preloadImage(Nft);
  preloadImage(shapka2);
  preloadImage(dedpool);
  preloadImage(rosomaha);
  preloadImage(ton5);
  preloadImage(ton55);
  preloadImage(durov);
  preloadImage(invite);
  preloadImage(complated);
  preloadImage(missed);

  }, []);

  useEffect(() => {
    
    import('./Home');
    import('./Leaderboard');
    import('./P2e.js');
    import('./Friends');
    import('./NFTs.js');
  }, []);

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
  if (!localStorage.getItem('KnopkaNick')) {localStorage.setItem('KnopkaNick', 'false');}
  const KnopkaNick = localStorage.getItem('KnopkaNick') === 'true';
  if (!localStorage.getItem('buttonVisibleNFT')) {localStorage.setItem('buttonVisibleNFT', 'false');}
  const buttonVisible = localStorage.getItem('buttonVisibleNFT') === 'true';
  const [showNotCompleted, setShowNotCompleted] = useState(false);
  if (!localStorage.getItem('isMintNFT')) {localStorage.setItem('isMintNFT', 'false');}
  const isMint = localStorage.getItem('isMintNFT') === 'true';

  if (!localStorage.getItem('Galo4kaBee')) {localStorage.setItem('Galo4kaBee', 'false');}
  const [Galo4kaBee, setGalo4kaBee] = useState(localStorage.getItem('Galo4kaBee') === 'true')

  if (!localStorage.getItem('KnopkaBee')) {localStorage.setItem('KnopkaBee', 'true');}
  const [KnopkaBee, setKnopkaBee] = useState(localStorage.getItem('KnopkaBee') === 'true')


  const [alert, setalert] = useState(false);

  //const tonConnectUI = useTonConnectUI();
  const locationOcties = useLocation();
  const navigateOcties = useNavigate();

  const [isLoadingOcto, setLoadingOcto] = useState(true);
  const [isLoadingOctoVs, setLoadingOctoVs] = useState(true);

  const [coinOnlyYears, setcoinOnlyYears] = useState(0);
  const [coins, setCoins] = useState(0);
  const [Ton5Succes, setTon5Succes] = useState(0);
  const [referralCoins, setReferralCoins] = useState(0);
  const [hasTelegramPremium, setHasTelegramPremium] = useState(false);
  const [accountAgeCoins, setAccountAgeCoins] = useState(0);
  const [referralCode, setReferralCode] = useState('');
  const [telegramLink, setTelegramLink] = useState('');
  const [FPage, setFPage] = useState(() => localStorage.getItem('FPage') !== 'false');
  const [CheckOpen, setCheckOpen] = useState(false);
  const [YearsOpen, setYearsOpen] = useState(false);
  const [OctOpen, setOctOpen] = useState(false);
  const [Yearr, setYearr] = useState(0);
  const [updatedSpots, setupdatedSpots] = useState(0);
  const [transactionNumber, setTransactionNumber] = useState(null);
  const [subscriptionCoins, setSubscriptionCoins] = useState(0);
  const walletAddress = useTonAddress();

  useEffect(() => {
    if (!isLoadingOcto) {
      const timeoutId = setTimeout(() => {
        setLoadingOctoVs(false);
      }, 800);

      return () => clearTimeout(timeoutId);
    }
  }, [isLoadingOcto]);
 
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



useEffect(() => {
  const fetchAvailableSpots = async () => {
      try {
          const response = await axios.get(`${REACT_APP_BACKEND_URL}/current-spots`);
          if (response.data.success) {
               setupdatedSpots(response.data.availableSpots);
              document.getElementById("highgreen").textContent = updatedSpots;
          }
      } catch (error) {
          console.error("Ошибка при получении количества мест:", error);
      }
  };

  fetchAvailableSpots();
}, [updatedSpots]);

useEffect(() => {
  console.log('Адрес кошелька из useTonAddress:', walletAddress);
  if (walletAddress) {
    axios.post(`${REACT_APP_BACKEND_URL}/save-wallet-address`, { userId, walletAddress })
      .then(response => {
        if (response.data.success) {
          console.log('Адрес кошелька успешно сохранен.');
        } else {
          console.error('Ошибка сервера:', response.data.message);
        }
      })
      .catch(error => {
        console.error('Ошибка при сохранении адреса кошелька:', error);
      });
  } else {
    console.error('Адрес кошелька не был получен и равен undefined');
  }
}, [userId, walletAddress]);

  const checkSubscription = useCallback(async () => {
    if (!userId) return;
    try {
      const response = await axios.post(`${REACT_APP_BACKEND_URL}/check-subscription-and-update`, { userId });
      if (response.status === 200) {
        const data = response.data;
        setCoins(data.coins);
        setTon5Succes(data.specialTransactionCounter);

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
  }, [userId]);

  useEffect(() => {
    if (userId) {
      const intervalId = setInterval(() => {
        checkSubscription();
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [userId, checkSubscription]);

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
    if (!userId) {
      console.error('userId не передан');
      return;
    }
    try {
      const response = await axios.post(`${REACT_APP_BACKEND_URL}/get-coins`, { userId });
      const data = response.data;
      if (response.status === 200) {
        setCoins(data.coins);
        setTon5Succes(data.specialTransactionCounter);
        setReferralCoins(data.referralCoins);
        setHasTelegramPremium(data.hasTelegramPremium);
        setTransactionNumber(data.transactionNumber);
        setSubscriptionCoins(data.coinsSub);


        const accountCreationDate = new Date(data.accountCreationDate);
        const currentYear = new Date().getFullYear();
        const accountYear = accountCreationDate.getFullYear();
        const yearsOld = currentYear - accountYear;
        setYearr(yearsOld);
        let accountAgeCoins = yearsOld * 500;
        if (yearsOld < 1) {
          setAccountAgeCoins(300); 
        }
        setcoinOnlyYears(accountAgeCoins);

        if(data.hasMintedNFT){
          localStorage.setItem('isMintNFT', 'true'); 
        }else{
          localStorage.setItem('isMintNFT', 'false'); 
        }
        if (data.hasCheckedSubscription) {
          localStorage.setItem('Galka', 'true');
          localStorage.setItem('Knopka', 'false');
        } else {
          localStorage.setItem('Galka', 'false');
          localStorage.setItem('Knopka', 'true');
        }

        if (data.hasCheckedSubscription3) {
          localStorage.setItem('GalkaAnyTap', 'true');
          localStorage.setItem('KnopkaAnyTap', 'false');
        } else {
          localStorage.setItem('GalkaAnyTap', 'false');
          localStorage.setItem('KnopkaAnyTap', 'true');
        }

        if (data.hasNicknameBonus){
          localStorage.setItem('KnopkaNick', 'true');
        }
        else{
          localStorage.setItem('KnopkaNick', 'false');
        }
        
        setLoadingOcto(false);
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
  }, []);
  

  
const handleCheckReferrals = () => {
    axios.post(`${REACT_APP_BACKEND_URL}/get-referral-count`, { userId })
      .then(response => {
        const referralCount = response.data.referralCount;

        if (referralCount >= 15) {
          localStorage.setItem('buttonVisibleNFT', 'true'); 
          window.Telegram.WebApp.HapticFeedback.notificationOccurred('success');
        } else {
          setShowNotCompleted(true);
          window.Telegram.WebApp.HapticFeedback.notificationOccurred('error');
          setTimeout(() => {
            setShowNotCompleted(false);
          }, 1900);
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
        setTon5Succes(data.specialTransactionCounter);
        
        if (data.hasCheckedSubscription) {
          localStorage.setItem('Galka', 'true');
          localStorage.setItem('Knopka', 'false');
        } else {
          localStorage.setItem('Galka', 'false');
          localStorage.setItem('Knopka', 'true');
        }

        if (data.hasCheckedSubscription3) {
          localStorage.setItem('GalkaAnyTap', 'true');
          localStorage.setItem('KnopkaAnyTap', 'false');
        } else {
          localStorage.setItem('GalkaAnyTap', 'false');
          localStorage.setItem('KnopkaAnyTap', 'true');
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

  useEffect(() => {
    if (window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand();
    }
  }, []);

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

  useEffect(() => {
    navigateOcties("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    const userIdFromURL = new URLSearchParams(window.location.search).get('userId');
    const savedUserId = localStorage.getItem('userId');
  
    let userId;
  
    if (userIdFromURL) {
      userId = userIdFromURL;
      localStorage.setItem('userId', userId); // Сохраняем userId для последующего использования
    } else if (savedUserId) {
      userId = savedUserId; // Берем userId из localStorage, если он был сохранен
    } else {
      console.error('userId не найден');
      return; // Останавливаем выполнение, если userId не найден ни в URL, ни в localStorage
    }
 
    fetchUserData(userId); // Вызываем функцию с userId
  }, [fetchUserData]);


  return (
    <TonConnectUIProvider manifestUrl="https://resilient-madeleine-9ff7c2.netlify.app/tonconnect-manifest.json">
    <div className="App">

      {isLoadingOctoVs && <LoadingScreen isLoadingOcto={isLoadingOcto} />}
      {isMint && isLoadingOctoVs && <LoadingScreenOctoNft isLoadingOcto={isLoadingOcto} />}
      {!isMint && isLoadingOctoVs && <LoadingScreenOcto isLoadingOcto={isLoadingOcto} />}

      <Routes>
        <Route path="/" element={ <Home Galo4ka={Galo4ka} Knopka={Knopka} Galo4kaX={Galo4kaX} KnopkaX={KnopkaX}  GalkaAnyTap={GalkaAnyTap} KnopkaAnyTap={KnopkaAnyTap}
                                  KnopkaNick={KnopkaNick} Ton5Succes={Ton5Succes} hasTelegramPremium={hasTelegramPremium} accountAgeCoins={accountAgeCoins} 
                                  transactionNumber={transactionNumber} coins={coins} setYearsOpen={setYearsOpen} isMint={isMint} 
                                  subscriptionCoins={subscriptionCoins} referralCoins={referralCoins} REACT_APP_BACKEND_URL={REACT_APP_BACKEND_URL} checkSubscriptionAndUpdate={checkSubscriptionAndUpdate }
                                  userId={userId}  setCoins={ setCoins} Galo4kaBee={Galo4kaBee} setGalo4kaBee={setGalo4kaBee} KnopkaBee={KnopkaBee} setKnopkaBee={setKnopkaBee}/>}/>

        <Route path="/leaderboard" element={<Leaderboard userId={userId} coins={coins} getRandomColor={getRandomColor}/>} />
        <Route path="/qr" element={<Qr/>}/>

        <Route path="/playtoearn" element={<PlayToEarn soon={soon} PLANET={PLANET} OctiesCosmo={OctiesCosmo} starship={starship}/>} />

        <Route path="/friends" element={<Friends invite={invite} referralCode={referralCode} telegramLink={telegramLink} getRandomColor={getRandomColor}/>} />

        <Route path="/nfts" element={<NFTs showNotCompleted={showNotCompleted} Nft={Nft} handleCheckReferrals={handleCheckReferrals} buttonVisible={buttonVisible}
                              Checknft={Checknft} shapka2={shapka2} dedpool={dedpool} ChecknftDone={ChecknftDone} setTransactionNumber={setTransactionNumber} userId={userId}
                              rosomaha={rosomaha} ton5={ton5} ton55={ton55} durov={durov} isMint={isMint} alert={alert} setalert={setalert} updatedSpots={updatedSpots}
                              missed={missed} complated={complated}/>}>

        </Route>
                              
      </Routes>         

     
      {FPage && (<First onClose={handleFirstPageClose} setCheckOpen={setCheckOpen} />)}
      {CheckOpen && (<Check setCheckOpen={setCheckOpen} setYearsOpen={setYearsOpen} />)}
      {YearsOpen && (<Years onClose={setYearsOpen} setOctOpen={setOctOpen} Yearr={Yearr} />)}
      {OctOpen && (<Oct onClose={setOctOpen} setYearsOpen={setYearsOpen} coinOnlyYears={coinOnlyYears} />)}

      <footer className='BTNLow'>
        <ul className='footerItems'>
            <li className='footerItem'>
              <Link className={`footerItemImgWrapper ${(locationOcties.pathname !== "/") ? 'img-dark' : ''}`}  to="/" onClick={(event) => {window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy')}} >
                <img src={IconHome} alt='IconHome'className='footerItemImg' />
              </ Link>       
              <p className={`footerItemLabel ${(locationOcties.pathname !== "/") ? 'img-dark' : ''}`}>Home</p>
            </li>
            <li className='footerItem' >
              < Link className={`footerItemImgWrapper ${locationOcties.pathname !== "/leaderboard" ? 'img-dark' : ''}`} to="/leaderboard" onClick={(event) => {window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy')}} >
                <img src={IconLeaderboard} alt='IconLeaderboard' className='footerItemImg'/>
              </ Link>
              <p className={`footerItemLabel ${locationOcties.pathname !== "/leaderboard" ? 'img-dark' : ''}`}>Ranking</p>
            </li>
            <li className='footerItem'>
              <Link className={`footerItemImgWrapper ${locationOcties.pathname !== "/playtoearn" ? 'img-dark' : ''}`} to="/playtoearn" onClick={(event) => {window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy')}}>
                <img src={p2e} alt='IconFriends' className='footerItemImg'/>
              </Link>
              <p className={`footerItemLabel ${locationOcties.pathname !== "/playtoearn" ? 'img-dark' : ''}`}>Play2Earn</p>
            </li>
            <li className='footerItem'>
              <Link className={`footerItemImgWrapper ${locationOcties.pathname !== "/friends" ? 'img-dark' : ''}`} to="/friends" onClick={(event) => {window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy')}} >
                <img src={IconFriends} alt='IconFriends' className='footerItemImg' />
              </Link>
              <p className={`footerItemLabel ${locationOcties.pathname !== "/friends" ? 'img-dark' : ''}`}>Friends</p>
            </li>
            <li className='footerItem'>
              <Link className={`footerItemImgWrapper ${locationOcties.pathname !== "/nfts" ? 'img-dark' : ''}`} to="/nfts" onClick={(event) => {window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy')}} >
                <img src={NFTlogo} alt='IconFriends' className='footerItemImg' />
              </Link>
              <p className= {`footerItemLabel ${locationOcties.pathname !== "/nfts" ? 'img-dark' : ''}`}>NFTs</p>
            </li>
          </ul>
      </footer>
    </div>
     </TonConnectUIProvider>
  );
}

export default App;