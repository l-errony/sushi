import React from 'react';
import s from './ProductPopup.module.css'
import close from './img/close-popup-icon.svg'
import arrow from './img/arrow-right-short.svg'
import brArrow from './img/breadcumbs-arrow.svg'
import {useDispatch, useSelector} from "react-redux";
import {setProductPopup} from "../../redux/rolls/rollsSlice";
import {popupData} from "../../redux/selectors";
import cn from "classnames";
import Price from "../Price/Price";


const ProductPopup = () => {
    const dispatch = useDispatch()
    const item = useSelector(store => store.rolls.productData)


    const closePopup = () => {
        dispatch(setProductPopup(false))
    }

    return (
        <div className={s.popup} id="product-popup">
                <div className={s.container}>
                   {/* <span className={s.back}>
                        <img src="/wp-content/uploads/2023/02/back-arrow.svg"/>
                        Назад
                    </span>*/}
                    <span className={s.close} onClick={() =>closePopup()}>
                        <img src={close}/>
                    </span>
                    <div className={s.inner}>
                        <nav className={s.breadcrumbs}>
                            Главная
                            <span className={s.brArrow}>
                                <img src={brArrow}/>
                            </span>
                            <span className={s.brCategory}>{item.cat}</span>
                            <span className={s.brArrow}>
                                <img src={brArrow}/>
                            </span>
                            <span className={s.brName}>{item.name}</span>
                        </nav>
                        {/*<div className={s.brName}></div>*/}
                        <div className={s.main}>
                            <div className={cn(s.arrow, s.left)} data-direction="left">
                                <img src={arrow}/>
                            </div>
                            <div className={cn(s.arrow, s.right )} data-direction="right">
                                <img src={arrow}/>
                            </div>
                           <div className={s.cover}>
                               {/* <div className={s.label} style="display: none"></div>*/}
                                <div className={s.image}>
                                    {/*<div id="product-popup-swipe-zone">
                                        <div id="product-swipe-help"
                                             style="display: none; background-image: url('/wp-content/uploads/2023/02/swipe-help.png')"></div>
                                    </div>*/}
                                    <img src={item.photo}/>
                                </div>
                            </div>

                           <div className={s.info}>
                                <div className={s.name}><h1>{item.name}</h1></div>
                                <div className={s.volume}>{item.vol}{item.metrics}</div>
                                <div className={s.description}>{item.description}</div>
                               <Price price={item.price}
                                      discountPrice={item.disc_price}
                                      size="32px" mb="24px"
                                      d_mb='0px' d_size='22px' ml='12px' col='#8C8C8C' top='43%'/>

                               {/* <div className={s.price} >
                                    <span className={s.amount}>{item.price}</span>
                                    <span className={s.rouble}>₽</span>
                                    <span className={s.oldPrice} style="display: none">
                                        <span>370</span>
                                       <span className={s.rouble}>₽</span>
                                </span>
                                </div>*/}

                              {/*  <div className={s.actions}>
                                    <div className={s.selector} style="display:none;">
                                        <div className={s.selectorTitle}>Целый пирог</div>
                                        <div className={s.switch}></div>
                                    </div>
                                    <div className={s.button}>
                                        <div className={s.toCart} style="display: none;">В корзину</div>
                                        <div className={s.buttons} style="display: flex;">
                                            <div className={s.minus}></div>
                                            <div className={s.count}>3</div>
                                            <div className={s.plus}></div>
                                        </div>
                                        <div className={s.inStock} style="display: none;">Нет в наличии</div>
                                    </div>
                                </div>*/}

                               {/* <div className="product-popup-bzhu-title" style="display: none">
                                    На 100г. БЖУ
                                </div>

                                <div className={s.bzhu} style="display: none">
                                    <div className={s.cal}>
                                        <span className={s.value}></span>
                                        <span className={s.title}>ккал</span>
                                    </div>
                                    <div className={s.belki}>
                                        <span className={s.value}></span>
                                        <span className={s.title}>белки</span>
                                    </div>
                                    <div className={s.zhir}>
                                        <span className={s.value}></span>
                                        <span className={s.title}>жиры</span>
                                    </div>
                                    <div className={s.ugle}>
                                        <span className={s.value}></span>
                                        <span className={s.title}>углеводы</span>
                                    </div>
                                </div>*/}

                                {/*<div className="product-popup-consist-block" style="display: none;">
                                    <div className="consist-title">Состав:</div>
                                    <div className="consist-text"></div>
                                </div>*/}

                            </div>


                        </div>

                  </div>
                </div>
            </div>
    );
};

export default ProductPopup;