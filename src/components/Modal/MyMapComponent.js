import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getLocalStorage, setLocalStorage} from "../../utils/localStorage";
import s from './Modal.module.css'
import {addAddress, addAdress} from "../../redux/rolls/rollsSlice";
import close from '../Map/img/close-popup-icon-white.svg'


const MyMapComponent = ({closeModal}) => {

    const [notification, setNotification] = useState(false)
    const dispatch = useDispatch()
    const ymaps = window.ymaps

        useEffect(() => {
            ymaps.ready(init)
        }, []);

    const closeNotification = () => {
        setNotification(false)
        document.getElementById('suggest').value = '';

    }
        const getUserGeo = () => {
            const user_geo = getLocalStorage('user_geo');

            let now = Math.floor(Date.now() / 1000);
            let diff = 60 * 60 * 24 * 30;
            if(now - user_geo.timestamp > diff){
                setLocalStorage('user_geo', {});
                return null;
            } else {
                console.log(user_geo.coords)
                return user_geo;
            }
        }



        const init = useCallback(() => {

            document.getElementById('map').innerHTML = '';

            const myMap = new ymaps.Map("map", {
                center: [48.218726, 38.208190],
                zoom: 17,
                controls: [
                    'zoomControl', // Ползунок масштаба
                    'rulerControl', // Линейка
                    'fullscreenControl', // Полноэкранный режим
                    // Поисковая строка
                ],
            },
            );

            const suggestView = new ymaps.SuggestView('suggest');

            let myPlacemark = null;

            function checkUserGeo(){
                let geo = getUserGeo();
                    if(geo !== null){
                        createPlacemark(geo.coords);
                        setUserAddress(geo);
                    }
                }

            function setUserAddress(geo){
                    document.getElementById('suggest').value = geo.adress;
                    document.getElementById('h-address-input').value = geo.adress;
                }


            checkUserGeo();
            myMap.geoObjects.add(myPlacemark);

                // Слушаем клик на карте.
            myMap.events.add('click', function (e) {
                const coords = e.get('coords');
                // Если метка уже создана – просто передвигаем ее.
                if (myPlacemark !== null) {
                    myPlacemark.geometry.setCoordinates(coords);
                }
                // Если нет – создаем.
                else {
                    createPlacemark(coords);
                }
                getAddress(coords);
            })

            // Создание метки.
            function createPlacemark(coords) {
                console.log(coords)
                myPlacemark = new ymaps.Placemark(coords, {
                    //iconCaption: 'поиск...'
                }, {
                    preset: 'islands#violetDotIconWithCaption',
                    draggable: true
                });

                myMap.geoObjects.add(myPlacemark);

                // Слушаем событие окончания перетаскивания на метке.
                myPlacemark.events.add('dragend', function () {
                    getAddress(myPlacemark.geometry.getCoordinates());
                })

                myMap.setCenter(coords);
            }


            // Определяем адрес по координатам (обратное геокодирование).
            function getAddress(coords) {
                myPlacemark.properties.set('iconCaption', 'поиск...');
                ymaps.geocode(coords).then(function (res) {
                    const names = [];
                    // Переберём все найденные результаты и
                    // запишем имена найденный объектов в массив names.
                    res.geoObjects.each(function (obj) {
                        names.push(obj.properties.get('name'));
                    });
                    const inCity = names.includes('Енакиево')
                    if (inCity) {
                        const geo = {adress: 'г. Енакиево, '+names[0], coords: coords};
                        setLocalStorage('user_geo', geo)
                        myMap.setCenter(coords)

                        if (myPlacemark !== null) {
                            myPlacemark.geometry.setCoordinates(coords);
                        } else {
                            createPlacemark(coords);
                        }
                        setUserAddress(geo);
                        dispatch(addAddress(names[0]))
                    }
                    else {
                        setNotification(true)
                    }
                });

            }


                suggestView.events.add("select", function (evt) {
                    const q = evt.get('item').value;
                    ymaps.geocode(q).then(
                        function (res) {
                            const coords = res.geoObjects.get(0).geometry._coordinates
                            console.log(coords)
                            getAddress(coords)

                        }
                    );
                });
        },
            [])


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
    }

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



export default MyMapComponent;
