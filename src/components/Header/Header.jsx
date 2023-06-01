import React, {useCallback, useEffect, useRef, useState} from 'react';
import logo from './img/logo-main.svg'
import icon from './img/address-field-icon.svg'

import s from './Header.module.css'
import Modal from "../Modal/Modal";
import Favorite from "../Favorite";
import {useDispatch, useSelector} from "react-redux";
import {setAddressValue, setMapActive} from "../../redux/rolls/rollsSlice";
import {GetUserGeo} from "../../utils/getUserGeo";

const Header = () => {

    const [modalActive, setModalActive] = useState(false)
    const [userGeo, setUserGeo] = useState('')
    //const [mapActive, setMapActive] = useState(false)
    //const {address, addressValue} = useSelector(store => store.rolls)

    const dispatch = useDispatch()

   /* useEffect(() => {
        const a = GetUserGeo()
        if (a !== null) {
            //setUserGeo(a.adress)
            dispatch(setAddressValue(userGeo))
        }

        //dispatch(setAddressValue(userGeo.adress))
        //ref.current.value = userGeo.adress
        console.log(userGeo)
    }, [])*/


    /*useEffect(() => {
        setModalActive(modalActive)
    }, [modalActive])
    /!*const changeModal = useCallback((bool)=> {
        setModalActive(bool)
    }, [])*!/*/

    return (
        <div className={s.headerContainer}>
            <div id="header" className={s.header}>
                <div className={s.container}>

                    {/*<div id="header-mobile-menu">
                        <span className="mobile-menu-button-line"></span>
                        <!--<img src="/wp-content/uploads/2022/06/mob-menu-icon.svg">-->
                    </div>*/}

                    <a href="https://bfokin.ru" className={s.logo}>
                        <img src={logo}/>
                    </a>

                    <div className={s.info}>
                        <a className={s.infoLink} href="/dostavka-i-oplata/">Доставка и оплата</a>
                    </div>

                    <div className={s.addressInput}>
                        <label className={s.label} htmlFor="h-address-input"><img src={icon}/></label>
                        <input value={userGeo} aria-readonly className={s.input} readOnly="" id="h-address-input" name="h-address-input" placeholder={"Укажите ваш адрес"}
                               onClick={() => dispatch(setMapActive(true))}
                        />
                    </div>

                    <a className={s.phone} href="tel:+74994095057">
                        +7 (499) 409-50-57
                    </a>
                    <Favorite modalActive={modalActive} setModalActive={setModalActive}/>
                </div>
                {/* <div id="mobile-menu" className="mobile-menu">
                    <div className="mobile-menu-inner">
                        <div id="mobile-address-input">
                            <div className="mobile-address-input-icon"><img
                                src="/wp-content/uploads/2022/04/address-field-icon.svg"></div>
                            <div className="mobile-address-input-address">Укажите ваш адрес</div>
                        </div>
                        <a href="#" className="h-button" id="mobile-header-profile">
                            <img src="/wp-content/uploads/2022/04/h-user-icon.svg">Личный кабинет
                        </a>
                        <div className="mobile-menu-links">
                            <a className="mobile-menu-link" href="#" onClick="mobMenuCatsClick()"><b>Меню</b></a> <a
                            className="mobile-menu-link" href="/about-us">О нас</a>
                            <a className="mobile-menu-link" href="/blog">Блог</a>
                            <a className="mobile-menu-link" href="/contacts">Контакты</a>
                            <a className="mobile-menu-link" href="/dostavka-i-oplata/">Доставка и оплата</a>
                        </div>

                        <div className="mobile-menu-contacts">
                            <a className="mobile-menu-contact-link" href="tel:+74994095057">+7 (499) 409-50-57</a>
                            <a className="mobile-menu-contact-link" href="#">г. Москва, Большой Факельный переулок, д.
                                3с2</a>
                        </div>
                    </div>
                </div>*/}
            </div>
            <Modal modalActive={modalActive} setModalActive={setModalActive}/>
        </div>

    );
}

export default Header;