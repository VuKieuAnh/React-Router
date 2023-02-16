import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ListStudent(){
    // const {state} = useLocation();
    // console.log(state);
    const navigate = useNavigate()
    const [list, setList] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            res =>{
                setList(res.data)
            }
        )
    })
    return(
        <>
            <h1>Danh sach HV</h1>
            <table border="1px">
                <tr>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {list.map((item, key)=>{
                    return (
                        <tr>
                            <td key={key}>
                                {item.username}
                            </td>
                            <td>
                                {item.email}
                            </td>
                            <td>
                                <Link to={'/edit-student/'+item.id}>Edit</Link>
                            </td>
                            <td>
                                <a onClick={
                                    ()=>{
                                        axios.delete('https://jsonplaceholder.typicode.com/users'+item.id).then(()=>
                                            axios.get('https://jsonplaceholder.typicode.com/users').then(
                                                res =>{
                                                    setList(res.data)
                                                }
                                            )
                                        )
                                }}>Delete</a>
                            </td>
                        </tr>
                    )
                })}
            </table>

        </>
    )
}
