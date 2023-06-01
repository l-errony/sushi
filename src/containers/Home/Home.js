import React, {useState} from 'react';
import Banners from "../../components/Banners/Banners";
import Filters from "../../components/Filters/Filters";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import ProductPopup from "../../components/ProductPopup/ProductPopup";
import {useSelector} from "react-redux";

const Home = () => {

    const [height, setHeight] = useState(0)

    const popupOfState = useSelector(store => store.rolls.popup)
    console.log(popupOfState)

    const handleClick = ()=> {
        window.scrollTo({
            top: height,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <Banners height={height} setHeight={setHeight}/>
            <Filters handleClick={() => handleClick()}/>
            <ProductsContainer/>
            {popupOfState && <ProductPopup/>}
        </>
    );
};

export default Home;