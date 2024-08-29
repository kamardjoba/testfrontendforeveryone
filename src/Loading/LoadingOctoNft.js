import React, { useEffect, useState } from 'react';
import '../Loading/Loading.css';
import NFTm from '../IMG/All_Logo/NFTmint.png';

function LoadingScreenOctoNft({ isLoadingOcto}) {
    const [animationClasss, setAnimationClasss] = useState('');

    useEffect(() => {
        if (!isLoadingOcto) {
            setAnimationClasss('loading-finishedNft');
        }
    }, [isLoadingOcto]);

    return (
        <div className={`loading-screenOc ${animationClasss}`}>
            <div className={`OctiesLH ${animationClasss}`}>
            </div>
           
            <div className='MintCoinL'>
                <img src={NFTm} alt='NFTm'/>
                <p className={`endtxtNFT  ${animationClasss}`}> <p>Loading...</p> <span>8</span> $OCTIES</p>
            </div>
           
        </div>
    );
}

export default LoadingScreenOctoNft;