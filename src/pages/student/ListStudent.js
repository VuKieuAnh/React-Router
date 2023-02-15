import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ListStudent(){
    // const {state} = useLocation();
    // console.log(state);
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
            <ul>
                {list.map((item, key)=>{
                    return (
                        <li key={key}>
                            {item.name},
                            {item.username},
                            {item.email}
                        </li>
                    )
                })}
            </ul>

        </>
    )
}
