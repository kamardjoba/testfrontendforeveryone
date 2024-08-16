import React, { useState, useEffect } from 'react';
import '../Css/Quests.css';
import TgQuest from '../Quests/questTg';
import TgOctiesQuest from '../Quests/questOctiesTg';
import XQuest from '../Quests/questX';
import MintStartNft from '../Quests/questStartNft';
import FrendsQuest from '../Quests/questFriends';
import WeeklyNft from '../Quests/questWeeklyNft';
import TonTrans from '../Quests/questTon';
import TonW from '../Quests/questTonWallet';

function Quests() {
    const [VisiblaBasedTask, setVisiblaBasedTask] = useState(true);
    const [VisiblaWeekTask, setVisiblaWeekTask] = useState(true);

    const [TgChanel_val, setTgChanel_val] = useState(false);
    const [TgOcties_val, setTgOcties_val] = useState(false);
    const [X_val, setX_val] = useState(false);
    const [StartNft_val, setStartNft_val] = useState(false);
    const [Frends_val, setFrends_val] = useState(false);
    const [WeeklyNft_val, setWeeklyNft_val] = useState(false);
    const [TonTran_val, setTonTran_val] = useState(false);

    function GoTg() {
        setTgChanel_val(true);
    }

    function GoOct() {
        setTgOcties_val(true);
    }

    function GoX() {
        setX_val(true);
    }

    function GoStartNft() {
        setStartNft_val(true);
    }

    function GoFrands() {
        setFrends_val(true);
    }

    function GoWeekNft() {
        setWeeklyNft_val(true);
    }
    
    function GoTon() {
        setTonTran_val(true);
    }

    useEffect(() => {
        if (TgChanel_val && TgOcties_val && X_val && StartNft_val && Frends_val) {
            setVisiblaBasedTask(false);
        }
    }, [TgChanel_val, TgOcties_val, X_val, StartNft_val, Frends_val]);
    
    useEffect(() => {
        if (WeeklyNft_val && TonTran_val) {
            setVisiblaWeekTask(false);
        }
    }, [WeeklyNft_val, TonTran_val]);

    return (
        <div className='questsPage'>
            {VisiblaBasedTask && <div className='basedtask'>
                <div className='txtNf'>
                    <p>Based task</p>
                </div>
                {!TgChanel_val && <TgQuest GoTg={GoTg} />}
                {!TgOcties_val && <TgOctiesQuest GoOct={GoOct} />}
                {!X_val && <XQuest GoX={GoX} />}
                {!StartNft_val && <MintStartNft GoStartNft={GoStartNft} />}
                {!Frends_val && <FrendsQuest GoFrands={GoFrands} />}
            </div>}

            {VisiblaWeekTask &&<div className='basedtask'>
                <div className='txtNf'>
                    <p>Weekly task</p>
                </div>
                {!WeeklyNft_val && <WeeklyNft GoWeekNft={GoWeekNft}/>}
                {!TonTran_val && <TonTrans GoTon={GoTon}/>}
            </div>}

            <div id='complatedtask'>
                <div className='txtNf'>
                    <p>Complated task</p>
                </div>
                <TonW />
                {TgChanel_val && <TgQuest />}
                {TgOcties_val && <TgOctiesQuest />}
                {X_val && <XQuest />}
                {StartNft_val && <MintStartNft />}
                {Frends_val && <FrendsQuest />}
                {WeeklyNft_val && <WeeklyNft />}
                {TonTran_val && <TonTrans />}
            </div>
        </div>
    );
}

export default Quests;
