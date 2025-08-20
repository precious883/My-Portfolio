import { Outlet, Navigate } from "react-router-dom";
import HomePage from "./HomePage";


const ProtectedRoutes = () => {
    const user = JSON.parse(localStorage.getItem('user') );

    return user ? <Outlet/> : <Navigate to="/HomePage"/>
}
export default ProtectedRoutes