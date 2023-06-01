import React from 'react';
import logo from './img/logo-main.svg'

import s from './Footer.module.css'

const Footer = () => {
    return (
        <div>
            <div className={s.footerContainer}>
                <footer id="footer" className={s.container}>
                    <div className={s.footerInner}>

                        <div className={s.logo}>
                            <img src={logo}/>
                        </div>

                        <div className={s.linksRow}>
                            <div className={s.column}>
                                <a className={s.link} href="/o-nas">О нас</a>
                                <a className={s.link} href="/contacts">Контакты</a>
                                <a className={s.link} href="/dostavka-i-oplata/">Доставка и оплата</a>
                            </div>
                            <div className={s.column}>
                            </div>
                        </div>

                        <div className={s.contacts}>
                            <a className={s.contactLink} href="tel:+79490000000">+7 (949) 000-00-00</a>
                            <a className={s.contactLink} href="#">ДНР, г. Енакиево, ул. Уличная, д.00</a>
                        </div>

                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;