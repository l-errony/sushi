import React, {useState} from 'react';
import {Link} from "react-router-dom";
import arrowBack from './img/back-arrow.svg'
import s from './ShoppingCart.module.css'
import CartContainer from "../../components/CartContainer/CartContainer";

const ShoppingCart = () => {
    return (
        <div>
            <div className={s.back}>
                <Link to={"/"}>
                    <img src={arrowBack} />
                        Вернуться в каталог
                </Link>
            </div>
            <CartContainer/>
            <div>
                {/*<MyMapForUser />*/}
            </div>
        </div>
    );
};








export default ShoppingCart;