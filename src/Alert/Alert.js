import React from 'react';
import '../Alert/AlertNft.css';

function AlertNft({rosomaha, setalert}) {

    return (
        <div className="mainAlert" onClick={(event) => {  setalert(false) }}>
           <div className='AlertBorder'>
                <div className='Nft50'>
                    <h1>ERROR</h1>
                    <p>Please connect your TON<br/> wallet before submitting<br/> the transaction.</p>
                </div>
                <div className='Nft50' id='NFt50Photo'>
                <img src={rosomaha} alt=''/>
                </div>

           </div>
        </div>
    );
}

export default AlertNft;