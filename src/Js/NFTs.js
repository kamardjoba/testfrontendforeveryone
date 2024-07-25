import React, { useState } from 'react';
import '../Css/NFTs.css';
import NFTBack from '../IMG/NFTs/BackBTN.png';
import NFTStr from '../IMG/NFTs/BackBTNN.png';
import NFt from '../IMG/NFTs/NFT.png';
import tg1 from '../IMG/NFTs/Tg1.png';
import tg2 from '../IMG/NFTs/Tg2.png';
import tg3 from '../IMG/NFTs/Tg3.png';
import nextBtn from '../IMG/NFTs/txtNft.png';


const NFTs = ({CloseNFT}) => {

    const [isClosingForAnim, setClosingForAnim] = useState(false);
    const handleCloseAnim = () => {setClosingForAnim(true);};

    const[NFtBlock1, setNFtBlock1] = useState(true);
    const[NFtBlock2, setNFtBlock2] = useState(false);
    const[NFtBlock3, setNFtBlock3] = useState(false);

    function Goblock2() {
        setNFtBlock1(false);
        setNFtBlock2(true);
        window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    }

    function Goblock2From3() {
        setNFtBlock3(false)
        setNFtBlock2(true);
        window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    }

    function Goblock1() {
        setNFtBlock1(true);
        setNFtBlock2(false);
        window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    }

    function Goblock3() {
        setNFtBlock3(true)
        setNFtBlock2(false);
        window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    }

    return (
        <div className={`Task_Border ${isClosingForAnim ? 'closing' : ''}`} id="ClimeDiv">
            <div id='BAckNFT'>
                <img src={NFTBack} alt='NFTBack' onClick={(event) => {CloseNFT(); handleCloseAnim(event); }}/>
            </div>
            {NFtBlock1 && <div className='NFtBlock1'>
                <div className='NFTzg'>
                    <p>BUY OCTIES NFT</p>
                </div>
                <div className='NFTdescr'>
                    <p>Choose an NFT and the duration of <br/>Telegram Premium that suits you and <br/> receive 5000 $OCTIES as a gift!</p>
                </div>
                <div className='NFTcards'>
                    <div className='NFTcard'>
                        <img src={NFt} alt='NFT' width={"90%"}/>
                    </div>
                    <div className='NFTcard' id='Nftinfo'>
                        <img src={tg1} alt='tg1' width={"80%"}/>
                    </div>
                </div>
                <div className='NFTBTN'>
                    <button id='NFTNEXT' onClick={Goblock2}><img src={nextBtn} alt='nxt'/></button>
                </div>
            </div>}

            {NFtBlock2 && <div className='NFtBlock1'>
                <div className='NFTzg'>
                    <p>BUY OCTIES NFT</p>
                </div>
                <div className='NFTdescr'>
                    <p>Choose an NFT and the duration of <br/>Telegram Premium that suits you and <br/> receive 10000 $OCTIES as a gift!</p>
                </div>
                <div className='NFTcards'>
                    <div className='NFTcard'>
                        <img src={NFt} alt='NFT' width={"90%"}/>
                    </div>
                    <div className='NFTcard' id='Nftinfo'>
                        <img src={tg2} alt='tg2' width={"80%"}/>
                    </div>
                </div>
                <div className='NFTBTN'>
                    <button id='NFTNEXT' onClick={Goblock3}><img src={nextBtn} alt='nxt'/></button>
                </div>
                <div id='StrNFT' onClick={Goblock1}>
                    <img src={NFTStr} alt='NFTStr'/>
                </div>
            </div>}

            {NFtBlock3 && <div className='NFtBlock1'>
                <div className='NFTzg'>
                    <p>BUY OCTIES NFT</p>
                </div>
                <div className='NFTdescr'>
                    <p>Choose an NFT and the duration of <br/>Telegram Premium that suits you and <br/> receive 15000 $OCTIES as a gift!</p>
                </div>
                <div className='NFTcards'>
                    <div className='NFTcard'>
                        <img src={NFt} alt='NFT' width={"90%"}/>
                    </div>
                    <div className='NFTcard' id='Nftinfo'>
                        <img src={tg3} alt='tg3' width={"80%"}/>
                    </div>
                </div>
                <div className='NFTBTN'>
                    <button id='NFTtg'>Connect Wallet</button>
                </div>
                <div id='StrNFT' onClick={Goblock2From3}>
                    <img src={NFTStr} alt='NFTStr'/>
                </div>
            </div>}


           
        </div>
    );
};

export default NFTs;