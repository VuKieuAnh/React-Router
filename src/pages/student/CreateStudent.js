import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from 'yup';
const validateUser = Yup.object().shape({
    name: Yup.string()
        .min(1, "To short")
        .max(100, "To Long!")
        .required("Required")
})

export default function CreateStudent(){
    const navigate = useNavigate()
    return(
        <>
            <h1>Tao moi HV</h1>
            <Formik initialValues={{
                id:'',
                name: 'KAX',
                username: '',
                email: ''

            }} validationSchema={validateUser} onSubmit={(values)=>{
                axios.post('https://jsonplaceholder.typicode.com/users', values)
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
            
            
            {/*<button onClick={()=>{navigate(*/}
            {/*    '/list-student',*/}
            {/*    {state:{id: 'ID01',name: 'KA' }}*/}
            {/*)}}>Create</button>*/}
        </>
    )
}
