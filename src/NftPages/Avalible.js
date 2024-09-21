import React from 'react';
import '../Css/NFTs.css';


const AvalibleNFT = ( {buttonVisible, showNotCompleted, isMint, ChecknftDone, sendTransactionFunc, Checknft, sendTransaction1,
    handleCheckReferrals, timerforsent, updatedSpots, Tg_Form_Window, Nft, durov, ton55
 }) => {



  return (
    <div className='mainNft'> 
       

    {/* <div className='nft-promo'>
      <div className='nft-text'>
        <h2>GET YOUR <span id='highlight'>FREE</span> NFT!</h2>
        <p>Invite 15 friends, Connect Wallet <br/>and receive unique OCTIES NFT</p>
        <div className='nft-buttons'>
          <div className="mint-section">

            {!buttonVisible && !showNotCompleted && 
              <button className="referral-button" onClick={handleCheckReferrals}> 
                Check referrals
              </button>}

            {!buttonVisible && showNotCompleted && (
              <button id="not-completed" >
                <img src={Checknft} alt="Not completed" /><p>Not completed</p>
              </button>)}

            {buttonVisible && (
              <button id="friends-count">
                <p>15 friends </p>
                <img src={ChecknftDone} alt="Checkmark" />
              </button> )}

          </div>
          <div className="mint-section">
          <button
            className={`mint-button ${isMint ? 'greenlight' : (!buttonVisible ? 'canMint' : '')}`}
            onClick={sendTransactionFunc}
          >
            {isMint ? 'MINTED' : 'MINT'}
          </button>

          </div>
        </div>
      </div>
      <div className='nft-image'>
        <img src={Nft} alt='OCTIES NFT' /> 
      </div>
    </div> */}

    <div className='nft-promo2'>
      <div className='LeftNft2'>
        <div alt='' id='redElipse'/>
        <h1><span id='highlight'>CREATE AN NFT</span> OF YOUR<br/>CHARACTER OCTIES!</h1>    
        <p>Currently <span id="highgreen">{updatedSpots}</span>/250 spots available</p>
        <p>Once you submit the transaction,<br /><span id='highlight'>you will receive:</span></p>
        <ul class="custom-list">
          <li>1 NFT of a unique OCTIES <br/> character, which you <br/> can design yourself</li>
        </ul>
        <ul class="custom-list">
          <li>Secret pass granting access<br/> to unique features & utilities</li>
        </ul>
        {!timerforsent && <button className='sendButtonm' onClick={sendTransaction1}>Send transaction <img src={ton55} alt=''/></button>}
        {timerforsent && <button className='FillButtonm' onClick={Tg_Form_Window}>Fill out the form</button>}
      </div>
      <div className='rightNft2'>
        <img src={durov} alt=''/>
      </div>
    </div>
  </div>
  );
};

export default AvalibleNFT;
