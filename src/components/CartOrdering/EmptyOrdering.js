import emptyCart from "./img/empty-cart.svg";
import React from "react";
import s from './CartOrdering.module.css'

export const EmptyOrdering = () => {
    return (
        <div className={s.empty}>
            <div className={s.emptyTitle}>Корзина пуста</div>
            <div className={s.emptyIcon}>
                <img src={emptyCart}/>
            </div>
        </div>
    );
};