import React from "react";
import remove from './img/remove-from-cart.svg'
import {PositionInCart} from "../PositionInCart/PositionInCart";
import s from './CartOrdering.module.css'




const FullOrdering = ({products}) => {
    return (
        <div className={s.positions}>
            <div className={s.positionsInner}>
                <div className={s.cartTitle}>Оформление заказа</div>
                <div className={s.items}>
                    <div className={s.clear}>
                        <div className={s.clearButton}>Очистить корзину<i>
                            <img src={remove}/></i>
                        </div>
                    </div>
                    <div className={s.itemsInner}>
                        {products.map(item => <PositionInCart item={item}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullOrdering;

