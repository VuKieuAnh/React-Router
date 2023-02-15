import {useLocation} from "react-router-dom";

export default function ListStudent(){
    const {state} = useLocation();
    console.log(state);
    return(
        <>
            <h1>Danh sach HV</h1>
        </>
    )
}
