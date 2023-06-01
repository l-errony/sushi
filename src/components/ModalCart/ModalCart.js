import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React from "react";
import empty from "./img/empty-cart.svg";

import s from './ModalCart.module.css'
import {PositionInCart} from "../PositionInCart/PositionInCart";

export const ModalCart = () => {

    const products = useSelector(store => store.rolls.cart)

    return (
        <div className={s.complete}>
            <div className={s.title}>Корзина</div>
            <div className={s.fullCart}>
                {products.map(item => <PositionInCart item={item}/>)}
            </div>
            <Link to={"/ordering"} className={s.link}>
                <div className={s.button}>
                    Оформить заказ
                </div>
            </Link>
        </div>
    )
}
export default ModalCart


export const EmptyCart = () => {
    return (
        <div className={s.empty} style="display: block;">
            <div className={s.title}>Корзина пуста</div>
            <div className={s.icon}><img src={empty}/></div>
        </div>
    )
}