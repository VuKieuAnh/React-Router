import {useNavigate} from "react-router-dom";

export default function CreateStudent(){
    const navigate = useNavigate()
    return(
        <>
            <h1>Tao moi HV</h1>
            <button onClick={()=>{navigate(
                '/list-student',
                {state:{id: 'ID01',name: 'KA' }}
            )}}>Create</button>
        </>
    )
}
