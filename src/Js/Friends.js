import React from 'react';
import '../Css/Friends.css';
import inv_fr1 from '../IMG/inv_fr1.svg';
import inv_fr2 from '../IMG//inv_fr2.svg';
import copy from '../IMG//copy.svg';
import avatar from "../IMG/avatar.png";
import small_diam from "../IMG/small_diam.png";

function Friends(props) {
    return (
        <div className='friendsPage'>
            <div className='whiteContainerQuest friendsItems'>
                <div className='friendsItem'>
                    <img src={inv_fr1} alt=""/>
                    <p className='friendsItemText'>Get 10% of your friends’ points!</p>
                </div>
                <div className='friendsItem'>
                    <img src={inv_fr2} alt=""/>
                    <p className='friendsItemText'>Invite 10 friends and receive a unique NFT!</p>
                </div>
                <div className='linkCopyWrapper'>
                    <button className='linkBtn'>Link</button>
                    <button className='copyBtn'><img src={copy} alt=""/></button>
                </div>
            </div>

            <div className='friendsUsers'>
                <ul className='whiteContainerContent leaderboardScroll'>
                           
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>

                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>

                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>

                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>

                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>
                    
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>
                    <li className='leaderboardItem'>
                        <div className='leaderboardItemLeft'>
                            <div className='leaderboardAvatar'>
                                <img src={avatar} alt=""  className='leaderboardAvatarImg'/>
                            </div>
                            <div>
                                <p className='leaderboardTitle'>no_name</p>
                                <p className='leaderboardSubtitle'>12,345,678 <img src={small_diam} alt=""/></p>
                            </div>
                        </div>
                        <div className='leaderboardItemRight'>
                            500
                        </div>
                    </li>

                   

         
                </ul>
            </div>
        </div>
    );
}

export default Friends;
