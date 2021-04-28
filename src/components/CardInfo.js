import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { accountCardsModalStatus, showModalStatus, toggleAccountCardsModal } from '../features/modals/modalsSlice'; 


const CardInfo = ({
    card,
    user
}) => {
    return <div className='card-visual'>
        <div className='card-header'>
            <p>Furrency Banking</p>
            <img src="https://www.logolynx.com/images/logolynx/c4/c4e297cf6b1f22c8df0e7d5ef5bf846e.png"/>
        </div>
        <div className='card-contents'>
            <div className='card-info'>
                <span>Valid Through: 12/21</span>
            </div>
            <p style={{fontSize: '2rem'}}>1234 5678 9123 4567</p>
        </div>
        <div className='card-footer'>
            <p>{user ? user.name : 'Name of Owner' }</p>
            <p>{card.name}</p>
        </div>
    </div>
};

export default CardInfo;