import {useParams} from "react-router-dom";

export default function EditStudent(){
    const param = useParams();
    return(
        <>
            <h1>Edit Student</h1>
            <h1>{param.id}</h1>
        </>
    )
}
