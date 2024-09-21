import React from 'react';
import '../Css/NFTs.css';


const MissedNFT = ({Nft, Checknft, isMint, missed }) => {

    return (
        <div className='mainNftMissed'> 
            {!isMint && (<div className='nft-promo'>
                <div className='nft-text'>
                    <h2>GET YOUR <span id='highlight'>FREE</span> NFT!</h2>
                    <p>Invite 15 friends, Connect Wallet <br/>and receive unique OCTIES NFT</p>
                    <div className='nft-buttons'>
                        <div className="mint-section">
                            <button id="not-completed-missed" >
                                <p>15 friends </p>
                                <img src={Checknft} alt="Not completed" />
                            </button>
                        </div>
                        <div className="mint-section">
                            <button className='mint-button' id='redlight'> MISSED</button>
                        </div>
                    </div>
                </div>
                <div className='nft-image'>
                    <img src={Nft} alt='OCTIES NFT' /> 
                </div>
            </div>)}
            {isMint && (
                <div className='NftpageDiv'>
                     <p>You are a true reptilian! <br/> You have no missed tasks</p>
                    <img id="NFTPAGEImg" src={missed} alt='' />  
                </div>
            )}
        </div>
    );
};

export default MissedNFT;