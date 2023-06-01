import React, {useState} from 'react';

import s from "./Products.module.css";
import CartBlock from "../CartBlock/CartBlock";
import {useSelector} from "react-redux";
import {array} from "yup";

const Products = ({ref}) => {

    const AllCategories = useSelector(store => store.rolls.categories)
    const products = useSelector(store => store.rolls.products)
    const favoriteCategory = useSelector(store => store.rolls.favoriteCategory)
    const filterProduct = useSelector(store => store.rolls.filterProduct)


    let filterCategories  = []
    if (filterProduct !== []) {
        const filterCat = AllCategories.forEach(cat => {
            filterProduct.forEach(prod => {
                if (prod.cat === cat){
                    if (filterCategories.indexOf(cat) === -1)
                        filterCategories.push(cat)
                }
            })
        })
    }


    const blocks = (categories) => {
        return categories.filter(item => favoriteCategory ? item === favoriteCategory : item )
            .map(item => <CartBlock products={products} name={item} ref={ref} filterProduct={filterProduct}/>)
    }


    const categories = filterCategories.length >= 1 ? filterCategories : AllCategories

return (
    <>
        <div className={s.container}>
            {blocks(categories)}
        </div>
    </>

    );
};

export default Products;