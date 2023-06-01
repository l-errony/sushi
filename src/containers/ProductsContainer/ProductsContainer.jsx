import React, {useEffect, useState} from 'react';
import Cart from "../../components/Cart/Cart";
import s from '../../components/Products/Products.module.css'
import {getApiResource} from "../../utils/network";
import {useDispatch} from "react-redux";
import {setCategories, setProducts} from "../../redux/rolls/rollsSlice";
import Products from "../../components/Products/Products";
//import cart from "../../components/Cart/Cart";



const ProductsContainer = ({ref}) => {

    const dispatch = useDispatch()
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])

    //const cart = [...new Array(20)].map((_, i) => <Cart key={i}/>)

    const getResponse = async () => {
        const res = await getApiResource('https://tokyo-sushi.online/wp-json/delivery-api/v1/get-all-products/');

        if (res) {
            dispatch(setProducts(res))
            dispatch(setCategories(res))

        }
        setProduct(res.products)
        setCategory(res.category)

    }

    useEffect(() => {
        getResponse()
        //console.log(product)
    }, []);

    return (
        <Products products={product} categories={category} ref={ref}/>
    )

};


export default ProductsContainer;