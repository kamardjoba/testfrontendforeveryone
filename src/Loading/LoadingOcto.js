import React, { useEffect, useState } from 'react';
import '../Loading/Loading.css';
import Octo from '../IMG/All_Logo/Octo.png';

function LoadingScreenOcto({ isLoadingOcto }) {
    const [animationClasss, setAnimationClasss] = useState('');

    useEffect(() => {
        if (!isLoadingOcto) {
            setAnimationClasss('loading-finished');
        }
    }, [isLoadingOcto]);

    return (
        <div className={`loading-screenOc ${animationClasss}`}>
            <div className={`OctiesLH ${animationClasss}`}>
            </div>
            <div className={`OctiesLP ${animationClasss}`}>
                <img src={Octo} alt='Octo'/>
            </div>
        </div>
    );
}

export default LoadingScreenOcto;