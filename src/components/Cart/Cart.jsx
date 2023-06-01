import React, {useCallback, useEffect, useState} from 'react';
import s from './Cart.module.css'
import Modal from "../Modal/Modal";
import cn from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {
    addItem,
    minusItem,
    removeItem,
    setProductData,
    setProductPopup
} from "../../redux/rolls/rollsSlice";
import Price from "../Price/Price";


const AmountButtons = ({num, prod}) => {

    const dispatch = useDispatch()

    const onClickPlus = (num) => {
        dispatch(addItem({num}))
    }
    const onClickMinus = (num) => {
            if (prod.count === 1) dispatch(removeItem(num))
            dispatch(minusItem(num))

    }

    return(
        <div className={cn(s.amountButtons, s.button)}>
            <div className={cn(s.counting, s.minus)} onClick={() => onClickMinus(num)}></div>
            <div className={s.amount}>{prod.count}</div>
            <div className={cn(s.counting, s.plus)} onClick={() => onClickPlus(num)}></div>
        </div>
    )
}
const NotInStock = () => {
    return (
        <div className={s.notInStock}>Нет в наличии</div>
    )
}

const Cart = ({item}) => {
    const {photo, disc_price, price, name, vol, num} = item
    const [amountButtons, setAmountButtons] = useState(false)
    const products = useSelector(store => store.rolls.cart)
    const prod = products.find(obj => obj.num === num)
    //const amount = useSelector(store => store.rolls.amountButtons)
    //console.log(amount)
    const dispatch = useDispatch()

    const openPopup = () => {
        dispatch(setProductPopup(true))
        dispatch(setProductData(item))
    }
    const onCart = () => {
        setAmountButtons(true)
        dispatch(addItem(item))
    }
   /* const setAmount = useCallback((bool) => {
        dispatch(setAmountButtons(bool))
    }, [],)*/

    return (
        <>
            <div className={s.element}>
                <a>
                    <div className={s.cart}>
                        <div onClick={() => openPopup()}>
                            <div className={s.cover}>
                                <div className={s.image}><img src={photo}/></div>
                            </div>
                            <div className={s.info}>
                                <Price discountPrice={disc_price} price={price}/>
                                <div className={s.name}>{name}</div>
                                <div className={s.volume}>{vol}Г.</div>
                            </div>
                        </div>
                        <div className={s.productButtons}>
                            {amountButtons && prod ? <AmountButtons num={num} prod={prod}/> :
                                <div className={s.button} onClick={() => onCart()}>
                                    <div className={s.toCart}>В корзину</div>
                                </div>
                            }
                        </div>
                    </div>
                </a>
            </div>
        </>

    )
}
export default Cart