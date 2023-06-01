import React from 'react';
import {Formik, Form, Field, useFormikContext, useField} from "formik";
import * as Yup from 'yup';
import DatePicker from "react-datepicker";

const validateEmail = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
}

const validatePassword = (values) => {
    let error;
    if (!values){
        error =  'Required'
    }
    return error
}

export const DatePickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <DatePicker
            {...field}
            {...props}
            selected={(field.value && new Date(field.value)) || null}
            onChange={val => {
                setFieldValue(field.name, val);
            }}
        />
    );
};


const SignupSchema = Yup.object().shape({
    /*firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),*/
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
});

const ContactForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={SignupSchema}
                /*validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}*/
                onSubmit={(values, { setSubmitting }) => {
                    /* setTimeout(() => {
                         alert(JSON.stringify(values, null, 2));
                         setSubmitting(false);
                     }, 400);*/
                    console.log('submit', values)
                    setSubmitting(false);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      isValidating
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <label>
                            Email
                        </label>
                        <Field
                            name="email"
                            /* onChange={handleChange}
                             onBlur={handleBlur}*/
                            /*value={values.email}*/
                            /*validate={validateEmail(values)}*/
                        />
                        {errors.email && touched.email && (
                            <div>{errors.email}</div>
                        )}
                        <label>
                            password
                        </label>
                        <Field
                            name="password"
                            /*validate={validatePassword(values)}*/
                            type="password"
                        />
                        {errors.password && touched.password &&(
                            <div>{errors.password}</div>
                        )}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default ContactForm;

/*onChange={handleChange}
onBlur={handleBlur}
value={values.password}*/