import React, { Component } from "react";
import {YMaps, Map, ZoomControl, SearchControl, Placemark} from "@pbe/react-yandex-maps";


/*class YMapsComponent extends Component {
    map = React.createRef();
    ymaps = React.createRef();


    render() {
        return (
            <YMaps query={{apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21"}} options={{
                searchControlProvider: 'yandex#search',
            }}>
                <MyMapForUser
                    state={{center: [55.76, 37.64], zoom: 10}}
                    instanceRef={this.map}
                    onLoad={(ymapsInstance) => {
                        //this.ymaps.current = ymapsInstance;
                        addSearchControlEvents();
                    }}
                    width="100%"
                    height="400px"
                    modules={["control.SearchControl"]}
                >
                    <ZoomControl
                        options={{float: "none", position: {top: 100, right: 10}}}
                    />
                    <SearchControl options={{
                        float: "left",
                        floatIndex: 300,
                        provider: "yandex#search",
                        placeholderContent: "Поиск мест и адресов",
                        maxWidth: 320,
                        size: "large"}}/>
                </MyMapForUser>
            </YMaps>
        );
    }
}
function addSearchControlEvents () {
    const map = this.map.current;
    const ymaps = this.ymaps.current;

    const searchControl = new ymaps.control.SearchControl({
        options: {
            float: "left",
            floatIndex: 300,
            provider: "yandex#search",
            placeholderContent: "Поиск мест и адресов",
            maxWidth: 320,
            size: "large"
        }
    });
    map.controls.add(searchControl);

    searchControl.events.add("resultselect", function (e) {
        const searchCoords = searchControl.getResponseMetaData().SearchResponse.Point.coordinates;
        const display = searchControl.getResponseMetaData().SearchResponse.display;

        console.log(searchControl.getResponseMetaData());

        if (display && display === "multiple") {
            map.setCenter([searchCoords[1], searchCoords[0]], 11);
        }
    });
};


export default YMapsComponent*/

export default class YMapsComponent extends Component {
    map = React.createRef();
    ymaps = React.createRef();


    render() {
        return (
            <YMaps query={{ apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21" }}>
                <Map
                    state={{ center: [55.76, 37.64], zoom: 10 }}
                    instanceRef={this.map}
                    onLoad={(ymapsInstance) => {
                        ymapsInstance.ready(() => {
                            this.ymaps.current = ymapsInstance;
                            this.addSearchControlEvents();
                        })
                    } }
                    width="100%"
                    height="400px"
                    modules={["control.SearchControl"]}
                >
                    <ZoomControl
                        options={{ float: "none", position: { top: 100, right: 10 } }}
                    />

                </Map>
            </YMaps>
        );
    }

    addSearchControlEvents = () => {
        const map = this.map.current;
        const ymaps = this.ymaps.current;



        const searchControl = new ymaps.control.SearchControl({
            options: {
                float: "left",
                floatIndex: 300,
                provider: "yandex#search",
                geoObjectStandardPreset: "islands#blueDotIcon",
                placeholderContent: "Поиск мест и адресов",
                maxWidth: 320,
                size: "large"
            }
        });
        map.controls.add(searchControl);
      /*  const placemark = new ymaps.Placemark([55.75, 37.61], {
                balloonContent: '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />',
                iconContent: "Азербайджан"}
            , {
                preset: "islands#yellowStretchyIcon",
                // Отключаем кнопку закрытия балуна.
                balloonCloseButton: false,
                // Балун будем открывать и закрывать кликом по иконке метки.
                hideIconOnBalloonOpen: false
            });
        map.controls.add(placemark);*/


     searchControl.events.add("resultselect", function (e) {
         console.log('fffff')
            const searchCoords = searchControl.getResponseMetaData().SearchResponse
                .Point.coordinates;
            const display = searchControl.getResponseMetaData().SearchResponse
                .display;

            console.log(searchControl.getResponseMetaData());

            if (display && display === "multiple") {
                map.setCenter([searchCoords[1], searchCoords[0]], 11);
            }
        });
        /*searchControl.events.add('load', function (event) {
            // Проверяет, что это событие не "дозагрузка" результатов и
            // по запросу найден хотя бы один результат.
            if (!event.get('skip') && searchControl.getResultsCount()) {
                searchControl.showResult(0);
            }
        });*/
    };
}
