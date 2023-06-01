import React, {forwardRef, useRef} from 'react';
import s from './CartBlock.module.css';
import {useSelector} from "react-redux";
import Cart from "../Cart/Cart";

const CartBlock = ({name, ref, filterProduct}) => {


    const products = useSelector(store => store.rolls.products)
    const search = useSelector(store => store.rolls.searchValue)



    const _products = filterProduct.length >= 1 ? filterProduct : products

        const oneCategoryProducts = _products.map((item, i) => {
        if (name === item.cat) return <Cart key={item.num} item={item}/>
        }
      )

    return (
        <>
            <div id={name+1} className={s.category} ref={ref} >
                <div className={s.tittle}>{name}</div>
                <div className={s.items}>
                    {oneCategoryProducts}
                </div>
            </div>
        </>

    );
};

export default forwardRef(CartBlock);