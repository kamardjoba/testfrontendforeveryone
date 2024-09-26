import React, {useState} from 'react';
import {TonConnectButton, useTonConnectUI} from '@tonconnect/ui-react';
import axios from 'axios';
import '../Css/NFTs.css';

import AlertNft from '../Alert/Alert.js';
import AvalibleNFT from '../NftPages/Avalible.js';

import ComplatedNFT from '../NftPages/Complated.js';
import MissedNFT from '../NftPages/Missed.js';


const NFTs = ({showNotCompleted, Nft, handleCheckReferrals, buttonVisible, Checknft,  ChecknftDone ,
  shapka2, dedpool, rosomaha, ton5, ton55, durov, isMint, alert, setalert, updatedSpots, setTransactionNumber, userId, missed, complated
}) => {

  const REACT_APP_BACKEND_URL = 'https://octiesback-production.up.railway.app';
  const [tonConnectUI] = useTonConnectUI();

  const [VisibleAvalibleNFT, setVisibleAvalibleNFT] = useState(true);
  const [VisibleMissedNFT, setVisibleMissedNFT] = useState(false);
  const [VisibleComplatedNFT, setVisibleComplatedNFT] = useState(false);

  if (!localStorage.getItem('forsent')) {localStorage.setItem('forsent', 'false');}
  const timerforsent= localStorage.getItem('forsent') === 'true';

  const Form = "https://forms.gle/6Aj8HmxT7wFkmwFh8";

  const sendTransactionFunc = () => {
    if(buttonVisible  &&  !isMint){
      sendTransaction();
    }
  };

  const Tg_Form_Window = () => {
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    window.open(Form, '_blank');
    localStorage.setItem('forsent', 'false');
  };

  const sendTransaction = async () => {
    try {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
      
      const walletInfo = tonConnectUI.walletInfo;
      if (!walletInfo) { 
        setalert(true);
        return; 
      }
      
      const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 600,
        messages: [
          {
            address: "EQAI8SXHLi_y3ao5kqTFwT6rNDDzh_1UhicVR4jbwQhg-L4m",
            amount: "10000000",
          },
        ],
      };
      
      await tonConnectUI.sendTransaction(transaction);
      
      // Log userId to ensure it's correct
      console.log("User ID:", userId);
      
      const response = await axios.post(`${REACT_APP_BACKEND_URL}/record-transaction`, { userId });
      
      if (response.data.success) {
        setTransactionNumber(response.data.transactionNumber);
        localStorage.setItem('isMintNFT', 'true');
        await axios.post(`${REACT_APP_BACKEND_URL}/update-mint-status`, { userId, hasMintedNFT: true });
      } else {
        console.log("Transaction failed:", response.data.message);
      }
      
    } catch (error) {
      if (error.response) {
        console.error("Response error data:", error.response.data);
        console.error("Response error status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request error:", error.request);
      } else {
        console.error("General error:", error.message);
      }
    }
  };


  const sendTransaction1 = async () => {
    try {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
        const walletInfo = tonConnectUI.walletInfo; 
        if (!walletInfo) {
            setalert(true); 
            return;
        }

        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 600, 
            messages: [
                {
                    address: "UQCHG7wcCNpSRBlBiyJ97F9hdrZ-VVQFCNzRZyLuyYhT39GT",
                    amount: "5000000000", 
                },
            ],
        };

        await tonConnectUI.sendTransaction(transaction);
        
        const response = await axios.post(`${REACT_APP_BACKEND_URL}/transaction-success`);
        if (response.data.success) {
            const updatedSpots = response.data.availableSpots;

            document.getElementById("highgreen").textContent = updatedSpots;
            localStorage.setItem('forsent', 'true');

            const specialResponse = await axios.post(`${REACT_APP_BACKEND_URL}/special-transaction-success`, { userId });
            if (specialResponse.data.success) {
                console.log('Special transaction recorded successfully.');
            } else {
                console.error('Failed to record special transaction.');
            }
        } else {
            console.error("Failed to update available spots.");
        }
    } catch (error) {
        console.error("Error sending transaction:", error);
        localStorage.setItem('forsent', 'false');
    }
};

const handleAvalibleNFT = () => {
  setVisibleAvalibleNFT(true);
  setVisibleMissedNFT(false);
  setVisibleComplatedNFT(false);
};
const handleMissedNFT = () => {
  setVisibleAvalibleNFT(false);
  setVisibleMissedNFT(true);
  setVisibleComplatedNFT(false);
};
const handleComplatedNFT = () => {
  setVisibleAvalibleNFT(false);
  setVisibleMissedNFT(false);
  setVisibleComplatedNFT(true);
};

  return (
    <div className='NFTs_Window'  >
      {alert && <AlertNft rosomaha={rosomaha} setalert={setalert}/>}
      <div className='Shapka'>
        <div className='shapkaborder'>
          <p> CREATE AN <span id='highlight'>NFT</span> OF YOUR<br/> CHARACTER OCTIES!</p>
          <img src={ton5} onClick={sendTransaction1} alt=''/>
        </div>
        <img className="marvel" src={dedpool} alt=''/>
        <img className="marvel" id="ros" src={rosomaha} alt=''/>
        <img src={shapka2} id="shapka2" alt=''/>
      </div>
      <div className='feikton'>
          <TonConnectButton />
      </div>
  
      
      {VisibleAvalibleNFT && (<AvalibleNFT 
          buttonVisible={buttonVisible} 
          showNotCompleted={showNotCompleted} 
          isMint={isMint} 
          sendTransactionFunc={sendTransactionFunc} 
          Checknft={Checknft}
          sendTransaction1={sendTransaction1} 
          ChecknftDone={ChecknftDone} 
          handleCheckReferrals={handleCheckReferrals}
          timerforsent={timerforsent} 
          updatedSpots={updatedSpots} 
          Tg_Form_Window={Tg_Form_Window} 
          Nft={Nft} 
          durov={durov} 
          ton55={ton55} 
          />)}


        {VisibleComplatedNFT && (<ComplatedNFT ChecknftDone={ChecknftDone} Nft={Nft} isMint={isMint} complated={complated}/>)}

        {VisibleMissedNFT && (<MissedNFT Checknft={Checknft} Nft={Nft} isMint={isMint} missed={missed}/>)}

       
      <div className="switch3">
        <input type="radio" id="switch3-radio1" name="radio" />
          <label htmlFor="switch3-radio1" onClick={handleAvalibleNFT}> AVALIBLE</label>


          <input type="radio" id="switch3-radio2" name="radio" />
          <label htmlFor="switch3-radio2" onClick={handleComplatedNFT}> COMPLETED</label>

          <input type="radio" id="switch3-radio3" name="radio" />
          <label htmlFor="switch3-radio3" onClick={handleMissedNFT}> MISSED</label>
</div>
    </div>

);
};

export default NFTs;
