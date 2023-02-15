import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

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

            }} onSubmit={(values)=>{
                axios.post('https://jsonplaceholder.typicode.com/users', values)
                    .then(
                        axios.get('https://jsonplaceholder.typicode.com/users').then(
                            res =>{
                                console.log(res.data)
                            }
                        ),
                        alert("thanh cong")
                    )
            }

            }>
                <Form>
                    <Field name={'id'} placeholder={'id'}></Field>
                    <Field name={'name'} placeholder={'name'}></Field>
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
