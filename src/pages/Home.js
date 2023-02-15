import Navbar from "../components/Navbar";
import {Link, Outlet} from "react-router-dom";

export default function Home(){
    return (
        <>
            <Navbar></Navbar>
            <Link to={'/list-student'}>List Student</Link>|
            <Link to={'/create-student'}>Create Student</Link>|
            <Link to={'/edit-student'}>Edit Student</Link>
            <Outlet></Outlet>
        </>
    )
}
