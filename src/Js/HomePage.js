import React from 'react';
import '../Css/HomePage.css';
import diamond from '../IMG/diamond.png';

function HomePage(props) {
    return (
        <div className='homepageContainer'>
            <div className='homepageWrapper'>
                <p className='welcomeText'>Welcome to <br/>Anytap!</p>
                <div className='amountWrapper'>
                    <p className='amount'>500</p>
                    <img src={diamond} alt="" className='diamondImgHomepage'/>
                </div>
                <p className='homepageDescr'>
                    Earn points, mint NFTs, <br/>and receive valuable <br/>  rewards for your activity!
                </p>
            </div>
        </div>
    );
}

export default HomePage;