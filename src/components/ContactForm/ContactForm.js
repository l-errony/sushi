import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import cn from "classnames";
import {IMaskInput} from 'react-imask'
import s from './ContactForm.module.css'
import Modal from "../Modal/Modal";
import {useDispatch} from "react-redux";
import {setMapActive} from "../../redux/rolls/rollsSlice";



const WithCourier = ({formik}) => {

    const dispatch = useDispatch()

    return (
        <>
            <div className={cn(s.orderingLine, s.delivery)}>
                <div className={cn(s.formInput, s.street)}>
                    <label className={s.label}>Улица, номер дома</label>
                    <input readOnly
                           id='d-address-input'
                           type="text"
                           name="street"
                           className={s.field}
                           value={formik.values.street}
                           onChange={formik.handleChange}
                           onClick={() => dispatch(setMapActive(true))}
                    />
                </div>
            </div>
            <div className={cn(s.orderingLine, s.delivery)}>
                <div className={cn(s.formInput, s.flat)}>
                    <label className={s.label}>Кв./офис</label>
                    <input type="text" className={s.field}
                           name="flat" value={formik.values.flat}
                           onChange={formik.handleChange}/>
                </div>
                <div className={cn(s.formInput, s.domofon)}>
                    <label className={s.label}>Домофон</label>
                    <input type="text"
                           className={s.field}
                           name="domofon"
                           value={formik.values.domofon}
                           onChange={formik.handleChange}
                    />
                </div>
                <div className={cn(s.formInput, s.podezd)}>
                    <label className={s.label}>Подъезд</label>
                    <input type="text" className={s.field} name="podezd"
                           value={formik.values.podezd}
                           onChange={formik.handleChange}
                    />
                </div>
                <div className={cn(s.formInput, s.etazh)}>
                    <label className={s.label}>Этаж</label>
                    <input type="text" className={s.field} name="etazh"
                           value={formik.values.etazh}
                           onChange={formik.handleChange}/>
                </div>
            </div>
        </>
    )
}


const ContactForm = ({deliveryType, formik}) => {
    //const [mapActive, setMapActive] = useState(false)
    const ContactNumberMask = '+{7}(000)000-00-00'
    return (
        <>
            <div className={s.contactsForm}>

                    <div className={s.orderingLine}>
                        <div className={cn(s.formInput, s.fio)}>
                            <label className={s.label}>Имя</label>
                            <input type="text"
                                   className={s.field}
                                   name="name"
                                   value={formik.values.name}
                                   onChange={formik.handleChange}
                            />
                        </div>
                        <div className={cn(s.formInput, s.tel)}>
                            <label className={s.label}>Номер телефона</label>
                            <IMaskInput className={s.field}
                                        name="phone"
                                        placeholder="+7 (___) ___-__-__"
                                        mask={ContactNumberMask}
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                    {
                        deliveryType === 'courier'
                            ? <WithCourier formik={formik}/>
                            : <div className={cn(s.orderingLine, s.self)}>
                                <div className={cn(s.formInput, s.selfInput)}>
                                    <label className={s.label}>Пункт самовывоза</label>
                                    <input readOnly type="text"
                                           className={s.field}
                                           name="self"
                                           placeholder="ДНР, г. Енакиево, ул. Металлургов, 7 (Пн-вс: 09:00 - 22:00)"
                                           value={formik.values.self}
                                           onChange={formik.handleChange}
                                    />
                                </div>
                            </div>
                    }
                    <div className={s.orderingLine}>
                        <div className={cn(s.formInput, s.comment)}>
                            <label className={s.label}>Комментарий к заказу</label>
                            <input type="text"
                                   className={s.field}
                                   name="comment"
                                   value={formik.values.comment}
                                   onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                    <div className={s.orderingLine}>
                        <div className={cn(s.formInput, s.deliveryDay)}>
                            <label className={s.label}>Время доставки</label>
                            <select className={s.field} name="deliveryDay" value={formik.values.deliveryDay}
                                    onChange={formik.handleChange}>
                                <option value="0" selected="">Как можно быстрее</option>
                                <option value="1">Сегодня, позже</option>
                                <option value="2">В другой день</option>
                            </select>
                        </div>
                        <div className={cn(s.formInput, s.deliveryDate)}>
                            <label className={s.label}>Дата</label>
                            <DatePicker name="deliveryDate"
                                        className={s.field}
                                        selected={formik.values.deliveryDate}
                                        minDate={new Date()}
                                        onChange={(value) => {
                                            formik.setFieldValue('deliveryDate', value);
                                        }}
                                        showDisabledMonthNavigation
                            >
                            </DatePicker>
                        </div>
                        <div className={cn(s.formInput, s.deliveryTime)}>
                            <label className={s.label}>Время</label>
                            <input type="time"
                                   className={s.field}
                                   name="deliveryTime" value={formik.values.deliveryTime}
                                   onChange={formik.handleChange}
                            />
                        </div>
                    </div>
            </div>
        </>
    );
};

export default ContactForm;
