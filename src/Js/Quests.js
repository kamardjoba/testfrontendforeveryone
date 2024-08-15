import React from 'react';
import '../Css/Quests.css';
import TgQuest from '../Quests/questTg';
import TgOctiesQuest from '../Quests/questOctiesTg';
import XQuest from '../Quests/questX';
import MintStartNft from '../Quests/questStartNft';
import FrendsQuest from '../Quests/questFriends';
import WeeklyNft from '../Quests/questWeeklyNft';
import TonTrans from '../Quests/questTon';
import TonW from '../Quests/questTonWallet';

const gavno = false;
function Quests(props) {
    return (
        <div className='questsPage'>

            <div className='basedtask'>
                <div className='txtNf'>
                    <p>Based task</p>
                </div>
                {!gavno && <TgQuest />}
                <TgOctiesQuest />
                <XQuest/>
                <MintStartNft />
                <FrendsQuest />
            </div>
            <div className='basedtask'>
                <div className='txtNf'>
                    <p>Weekly task</p>
                </div>
                <WeeklyNft />
                <TonTrans />
            </div>
            <div className='basedtask' id='complatedtask'>
                <div className='txtNf'>
                    <p>Complated task</p>
                </div>    
                <TonW />
                {gavno && <TgQuest />}
            </div>
        </div>

    );
}

export default Quests;