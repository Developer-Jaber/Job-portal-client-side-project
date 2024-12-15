import { useContext } from "react";
import AuthContext from "../Provider/ContextProvaider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({children}) => {
    const {user,loder} = useContext(AuthContext);
    const location = useLocation()
    console.log(location);
    if(loder){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login_page'></Navigate>
    );
};

export default Private;