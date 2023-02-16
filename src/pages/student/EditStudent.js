import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
const validateUser = Yup.object().shape({
    name: Yup.string()
        .min(1, "To short")
        .max(100, "To Long!")
        .required("Required")
})

export default function EditStudent(){
    const navigate = useNavigate()
    const param = useParams();


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/'+param.id).then(
            res=> {
                setUser(
                    // res.data
                    {
                    id:res.data.id,
                    name: res.data.name,
                    username: res.data.username,
                    email: res.data.email
                }
                )
                // return user;
            }
        )
    })
    const [user, setUser] = useState({});

    return(
        <>
            <h1>Edit Student</h1>
            <Formik initialValues={user} enableReinitialize={true}
                    validationSchema={validateUser} onSubmit={(values)=>{
                axios.put('https://jsonplaceholder.typicode.com/users'+ param.id, values)
                    .then(
                        navigate("/list-student")
                    )
            }

            }>
                <Form>
                    <Field name={'id'} placeholder={'id'}></Field>
                    <Field name={'name'} placeholder={'name'}></Field>
                    <ErrorMessage name={'name'}></ErrorMessage>
                    <Field name={'username'} placeholder={'username'}></Field>
                    <Field name={'email'} placeholder={'email'}></Field>
                    <button >Save</button>
                </Form>
            </Formik>
        </>
    )
}
