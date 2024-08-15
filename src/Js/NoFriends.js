import React from 'react';
import diamond from '../IMG/diamond.png';
import '../Css/NoFriends.css';
import inv_fr1 from '../IMG/inv_fr1.svg';
import inv_fr2 from '../IMG/inv_fr2.svg';

function NoFriends(props) {
    return (
        <div className='startpageContainer'>
            <div className='startpageWrapper' id='noFriendsWrapper'>
                <div className='diamondImgWrapper'>
                    <img src={diamond} alt="" className='diamondImg'/>
                </div>
                <div className='inviteFriendsWrapper'>
                    <div className='inviteFriendsItem'>
                        <img src={inv_fr1} alt=""/>
                        <p className='inviteFriendsText'>Get 10% of your friends’ points!</p>
                    </div>

                    <div className='inviteFriendsItem'>
                        <img src={inv_fr2} alt=""/>
                        <p className='inviteFriendsText'>Invite 10 friends and receive a unique NFT!</p>
                    </div>
                </div>
                <button className='connectBtn'>Link</button>
            </div>
        </div>
    );
}

export default NoFriends;