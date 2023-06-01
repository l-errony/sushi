import React, {useState} from 'react';
import {Formik, Form, Field} from "formik";
import * as Yup from 'yup';
import s from './components/ContactForm/ContactForm.module.css'
import cn from "classnames";
import PhoneInput from 'react-phone-input-2';
import { IMaskInput } from 'react-imask'
import 'react-phone-input-2/lib/style.css'
import {useFormik} from "formik";


/*const SignupSchema = Yup.object().shape({
    /!*firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),*!/
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
});*/



const ContactForm = () => {

    const ContactNumberMask = '+{7}(000)000-00-00'
    const date = new Date();

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: ''
        },
        onSubmit: values => {
            console.log('submit', values)
        }
    })

    return (
        <>
        <div className={s.contactsForm}>
            <form onSubmit={formik.handleSubmit}>
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
                        <button type="submit" >
                            Submit
                        </button>
                    </form>
        </div>
    </>
    );
};

export default ContactForm;
