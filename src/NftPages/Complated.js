import React from 'react';
import '../Css/NFTs.css';


const ComplatedNFT = ({Nft, ChecknftDone, isMint, complated}) => {

    return (
        <div className='mainNftComplated'> 
            {isMint && (<div className='nft-promo'>
                <div className='nft-text'>
                    <h2>GET YOUR <span id='highlight'>FREE</span> NFT!</h2>
                    <p>Invite 15 friends, Connect Wallet <br/>and receive unique OCTIES NFT</p>
                    <div className='nft-buttons'>
                        <div className="mint-section">   
                            <button id="friends-count">
                                <p>15 friends </p>
                                <img src={ChecknftDone} alt="Checkmark" />
                            </button> 
                        </div>
                        <div className="mint-section">
                            <button className='mint-button  greenlight'> MINTED </button>
                        </div>
                    </div>
                </div>
                <div className='nft-image'>
                    <img src={Nft} alt='OCTIES NFT' /> 
                </div>
            </div>)}
            {!isMint && (
                <div className='NftpageDiv'>
                    <p>There are no completed <br/> tasks at the moment</p>
                    <img id="NFTPAGEImg" src={complated} alt='' /> 
                </div>
               
            )}

        </div>
    );
};

export default ComplatedNFT;