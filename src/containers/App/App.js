import {Route, Routes} from 'react-router-dom'
import MainLayout from "../../layout/MainLayout";
import Home from "../Home/Home";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import {Map, YMaps} from "@pbe/react-yandex-maps";
import React, {useEffect} from "react";
import {GetUserGeo} from "../../utils/getUserGeo";



function App() {



    return (
        <Routes >
            <Route path={'/'} element={<MainLayout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='ordering' element={<ShoppingCart/>}/>
            </Route>
        </Routes>
        /*<YMaps>
            <div>
                My awesome application with maps!
                <MyMapForUser defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
            </div>
        </YMaps>*/

    );
}

export default App;
