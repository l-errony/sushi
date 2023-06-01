import React from 'react';
import s from './Modal.module.css'
import cn from "classnames";
import close from './img/close-popup-icon.svg'
import MyMap from '../Map/MyMapContainer'
import ModalCart from "../ModalCart/ModalCart";
import {useDispatch, useSelector} from "react-redux";
import {setMapActive} from "../../redux/rolls/rollsSlice";
import MyMapContainer from "../Map/MyMapContainer";

const Modal = ({modalActive, setModalActive}) => {

    const mapActive = useSelector(store => store.rolls.mapActive)
    const dispatch = useDispatch()

    const closeModal = () => {
        setModalActive(false)
        dispatch(setMapActive(false))
    }

    return (
        <div className={modalActive || mapActive ? cn(s.modal, s.active) : s.modal} onClick={() => closeModal()}>
            <div className={modalActive ? cn(s.content, s.active) : cn(s.content, s.active, s.modalMap)} onClick={e => e.stopPropagation()}>
                <div className={s.close} onClick={() => closeModal()}>
                    <img src={close}/>
                </div>
                {modalActive &&  <ModalCart />}
                {mapActive && <MyMapContainer closeModal={() => closeModal()}/>}
            </div>
        </div>
    );
};

export default Modal;




