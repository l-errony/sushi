import React, {useState} from "react";
import {useSelector} from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import Position from "../CartOrdering/FullOrdering";
import OrderSummary from "../OrderSummary/OrderSummary";
import s from './CartContainer.module.css'
import {useFormik} from "formik";
import * as Yup from "yup";

const CartContainer = () => {

    const products = useSelector(store => store.rolls.cart)
    const totalPrice = useSelector(store => store.rolls.totalPrice)

    const [cartView, setCartView] = useState('positions')
    const [delivery, setDelivery] = useState("courier")


    const formik = useFormik({
        initialValues: {
            deliveryType: 'delivery',
            name: '',
            phone: '',
            self: "ДНР, г. Енакиево, ул. Металлургов, 7 (Пн-вс: 09:00 - 22:00)",
            comment: '',
            deliveryDay: 'Как можно быстрее',
            deliveryDate: new Date(),
            deliveryTime: '',
            street: '',
            flat: '',
            domofon: '',
            podezd: '',
            etazh: ''

        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Required'),
            phone: Yup.string().required('Required'),
            //deliveryTime: Yup.number().required('Required'),
        }),
        onSubmit: values => {
            console.log('submit', values)
        }
    })


    return (
        <div className={s.ordering}>
            <div className={s.orderingInner}>
                <form onSubmit={formik.handleSubmit} autoComplete={'off'} className={s.orderingInner}>
                    {cartView === 'positions'
                    ? <Position products={products}/>
                    : <ContactForm deliveryType={delivery} formik={formik}/>
                    }
                    <OrderSummary totalPrice={totalPrice}
                                  deliveryType={delivery}
                                  setDelivery={setDelivery}
                                  cartView={cartView} setCartView={setCartView}/>
                </form>
            </div>
        </div>
    )
}
export default CartContainer;
