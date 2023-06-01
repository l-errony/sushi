import React from 'react';
import s from './Map.module.css';
import close from "./img/close-popup-icon-white.svg";

const MyMapForUser = ({notification, closeModal, closeNotification}) => {
    return (
        <div className={s.adressPopup}>
            <div className={s.adressTitle}>Укажите ваш адрес</div>
            <div className={s.adressInputLine}>
                <div className={s.adressInput}>
                    <input id='suggest' className={s.adressText}/>
                </div>
                <div className={s.adressSubmit} onClick={closeModal}>ОК</div>
            </div>

            <div className={s.adressMap}>
                <div id='map' className={s.idMap}></div>
            </div>
            {notification && <Notification closeNotification={() => closeNotification}/>}
            <div className={s.popupDescription}>
                Нажмите на ваш адрес на карте или найдите его в поиске
            </div>
        </div>
    );
};

const Notification = ({closeNotification}) => {
    return(
        <div className={s.notificationPopup}>
            <div className={s.notificationMessage}>На данный момент в этот район доставка не осуществляется.</div>
            <div className={s.notificationClose} onClick={closeNotification()}>
                <img src={close}/>
            </div>
        </div>
    )
}

export default MyMapForUser;