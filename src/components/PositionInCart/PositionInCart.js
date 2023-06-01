import {useDispatch} from "react-redux";
import {addItem, minusItem, removeItem} from "../../redux/rolls/rollsSlice";
import Price from "../Price/Price";
import cn from "classnames";
import remove from "./img/remove-from-cart.svg";
import s from './PositionInCart.module.css'

export const PositionInCart = ({item}) => {

    const dispatch = useDispatch()

    const onClickPlus = (num) => {
        dispatch(addItem({num}))
    }
    const onClickMinus = (num) => {
        dispatch(minusItem(num))
    }
    const onclickRemove = (num) => {
        /*if (window.confirm('Действительно хочешь удалить выбранный товар?')) */
        dispatch(removeItem(num))
    }

    return(
        <div className={s.singlePosition} data-num={item.num}>
            <div className={s.photo}>
                <img src={item.photo}/>
            </div>
            <div className={s.info}>
                <div className={s.name}>{item.name}</div>
                <div className={s.data}>
                    <div className={s.price}>
                        <Price price={item.price} discountPrice={item.disc_price}/>
                    </div>
                    <div className={s.volume}>
                        {item.vol}г.
                    </div>
                </div>
            </div>
            <div className={s.amountSelect}>
                <div className={item.count === 1 ? cn(s.changeValue, s.minus, s.disabled) : cn(s.changeValue, s.minus)} onClick={() => onClickMinus(item.num)}></div>
                <div className={s.value}>{item.count}</div>
                <div className={cn(s.changeValue, s.plus)} onClick={() => onClickPlus(item.num)}></div>
                <span className={s.remove}><img src={remove} onClick={() => onclickRemove(item.num)}/></span>
            </div>
        </div>
    )
}