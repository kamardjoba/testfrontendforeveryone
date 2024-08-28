import React, { useEffect, useState } from 'react';
import '../Loading/Loading.css';

function LoadingScreen({isLoadingOcto}) {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (!isLoadingOcto) {
            setAnimationClass('fade-out');
        } 
    }, [isLoadingOcto]);

    return (
        <div className={`loading-screen ${animationClass}`}>
            <span className="loader"></span>
        </div>
    );
}

export default LoadingScreen;