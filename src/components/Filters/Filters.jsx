import React, {useCallback, useEffect, useRef, useState} from 'react';
import cn from 'classnames'
import search from './img/search-icon.svg'
import icon from './img/category-icon.png'
import s from './Filters.module.css'
import {getApiResource} from "../../utils/network";
import {setCategories, setFavoriteCategory, setProducts, setSearchValue} from "../../redux/rolls/rollsSlice";
import {useDispatch, useSelector} from "react-redux";
import { Link, animateScroll as scroll } from "react-scroll";
import debounce from 'lodash.debounce'

const Filters = ({handleClick, categoryClick, setName}) => {


    const [popup, setPopup] = useState(false)
    const [sort, setSort] = useState([])
    const [value, setValue] = useState('')
    const isSearch = useRef(null)

    const inputRef = useRef(null)


    const categories = useSelector(store => store.rolls.categories)
    const dispatch = useDispatch()


    const onSelected = (name) => {
        setSort(name)
        setPopup(false)
        //categoryClick()
        console.log(name)
        dispatch(setFavoriteCategory(name))
        handleClick()
    }

    const onClickClear = (event) => {
        //setSearchValue('')
        dispatch(setSearchValue(''))
        setValue('')
        /*if (inputRef.current) {
            inputRef.current.focus()
        }*/
        //операторопциональной последовательности
        inputRef.current?.focus()
    }


    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str))
        }, 250),
        [],)

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value)
    }



    const rolls = categories.map((item, i) =>
        <Link to={item} spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={s.option}
        >
            <div className={s.icon} data-num="274905" key={i} onClick={()=> onSelected(item)}>
                <img src={icon} alt={"konditerskie-izdeliya"}/>
               <span>{item}</span>
            </div>
        </Link>)

    return (
        <section className={s.filters} ref={isSearch}>
            <div className={s.search}>
                <label htmlFor="mp-products-search-input"><img src={search}/></label>
                <input type="search"
                       ref={inputRef}
                       value={value}
                       onChange={onChangeInput}
                       placeholder="Поиск по меню"
                       onFocus={handleClick} autoComplete="off"
                />
            </div>
           <div className={s.select}>
                <div className={s.button}>
                    <div className={s.open}>
                        <div className={s.popup} onClick={() => setPopup(!popup)}><span className={s.text}>Выбрать категорию</span></div>

                        {
                            popup && <div className={s.options}>
                            <ul>
                                <div className={cn(s.all, s.option)} data-num="0" onClick={() => onSelected('')}>Показать все</div>
                                {rolls}
                            </ul>
                            </div>
                        }
                    </div>
                </div>
               {/*<div className="mp-sorting">
                    <div className="bf-select">
                        <div className="bf-selected"><span className="bf-selected-text">Сортировка</span><span
                            className="bf-selected-icon"><img src="/wp-content/uploads/2022/04/sort-icon.svg"></span>
                        </div>
                        <div className="bf-options">
                            <div className="bf-option konditerskie-izdeliya">По цене</div>
                            <div className="bf-option konditerskie-izdeliya">По популярности</div>
                            <div className="bf-option konditerskie-izdeliya">Новинки</div>
                        </div>
                    </div>
                </div>*/}
            </div>
        </section>
    );
};

export default Filters;


export const Icon = ({name}) => {
    return (
            <li className={s.option} data-num="274905">
                <img src={icon} alt={"konditerskie-izdeliya"}/>
                {name}
            </li>
    );
};
