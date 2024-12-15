import { useContext, useEffect, useState } from "react";
import AuthContext from "../Provider/ContextProvaider";

const Myapplication = () => {
    const [application,setApplication] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        fetch(`http://localhost:5000/job-application?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=> {
            setApplication(data);
        })
    },[])
    return (
        <div>
            <h1>my application length {application.length}</h1>
        </div>
    );
};

export default Myapplication;