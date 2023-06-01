import React, { useState, useEffect } from 'react';

import s from './Favorite.module.css'
import cart from './img/shopping-cart.svg'
import {useSelector} from "react-redux";

const Favorite = ({modalActive, setModalActive}) => {

    const count = useSelector(store => store.rolls.countInfCart)
    /*const [count, setCount] = useState(7);*/
    console.log(count)

    //const storeData = useSelector(state => state.favoriteReducer);  это редакс

    /*useEffect(() => {
        const length = Object.keys(storeData).length;
        length.toString().length > 2 ? setCount('...') : setCount(length);
    });
*/
    return (
        <div className={s.buttons} onClick={() => setModalActive(!modalActive)}>
            <a href="#" className={s.button} id="header-cart">
                {count ? <span className={s.counter}>{count}</span> : ''}
                <img src={cart}/>
                <span className={s.cart}>Корзина</span>
            </a>
        </div>
    )
}

export default Favorite;
