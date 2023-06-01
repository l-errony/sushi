import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getLocalStorage, setLocalStorage} from "../../utils/localStorage";
import MyMapForUser from "./MyMapForUser.js";
import {setAddressValue} from "../../redux/rolls/rollsSlice";


const MyMapContainer = ({closeModal}) => {
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
        let user_geo = getLocalStorage('user_geo');



        let now = Math.floor(Date.now() / 1000);
        let diff = 60 * 60 * 24 * 30;

        if (now - user_geo.timestamp > diff) {
            console.log('1')
            setLocalStorage('user_geo', {});
            return null;
        } else if (Object.keys(user_geo).length === 1){
                console.log('len 0')
                setLocalStorage('user_geo', {});
                return null;
        }else {
                console.log('3')
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
                console.log('fff')
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
            //myMap.geoObjects.add(myPlacemark);

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
                console.log('ddd')
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
                        dispatch(setAddressValue(names[0]))
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
        <MyMapForUser notification={notification} closeModal={closeModal} closeNotification={closeNotification}/>
    );
};

export default MyMapContainer;