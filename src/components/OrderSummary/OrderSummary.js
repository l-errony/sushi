import React from 'react';
import cn from "classnames";
import s from './OrderSummary.module.css'

const OrderSummary = ({deliveryType, setDelivery, totalPrice, cartView, setCartView}) => {
    return (
        <div className={s.orderSummary}>
            <div className={s.summaryInner}>
                <div className={s.summaryTitle}>Способ доставки</div>
                <div className={s.deliverySelect}>
                    <div className={deliveryType === 'courier' ? cn(s.deliveryType, s.selected) : s.deliveryType} onClick={()=> setDelivery("courier")}>Курьером</div>
                    <div className={deliveryType === 'self' ? cn(s.deliveryType, s.self, s.selected) : cn(s.deliveryType, s.self)} onClick={()=> setDelivery("self")}>Самовывоз</div>
                </div>
                <div className={s.orderTitle}>Ваш заказ</div>
                <div className={cn(s.orderLine, s.orderSum)}>
                    <span className={s.title}>сумма заказа</span>
                    <span className={s.sumValue}>
                                    <span className={s.amount}>{totalPrice}</span>
                                    <span className={s.rouble}>₽</span>
                            </span>
                </div>
                <div className={cn(s.orderLine, s.discount)}>
                    <span className={s.title}>скидка</span>
                    <span className={s.sumValue}>
                                    <span className={s.amount}>0</span>
                                    <span className={s.rouble}>₽</span>
                                </span>
                </div>
                <div className={cn(s.orderLine, s.delivery)}>
                    <span className={s.title}>доставка</span>
                    <span className={s.sumValue}>
                                    <span className={s.amount}>{deliveryType === 'courier' ? 200 : 0}</span>
                                    <span className={s.rouble}>₽</span>
                                </span>
                </div>
                <div className={cn(s.orderLine, s.totalSum)}>
                    <span className={s.totalTitle}>Итого:</span>
                    <span className={s.sumValue}>
                                    <span className={s.amount}>{deliveryType === 'courier' ? totalPrice + 200 : totalPrice}</span>
                                    <span className={s.rouble}>₽</span>
                                </span>
                </div>

                {/*<div className="order-sum-line order-sum-notification" style="display:none;">
                            При заказе от 1000₽ - доставка бесплатно
                        </div>*/}

                {
                    cartView === 'positions'
                    ? <div className={s.payment} onClick={()=>setCartView('contact')}>К оформлению</div>
                    : <button className={s.payment} type="submit">Заказать</button>
                }
            </div>
        </div>
    );
};

export default OrderSummary;