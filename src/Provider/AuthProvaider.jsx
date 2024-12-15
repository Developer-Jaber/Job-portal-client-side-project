import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import AuthContext from "./ContextProvaider";
import auth from "../Firebase/auth.init";
import { useEffect, useState } from "react";

const AuthProvaider = ({children}) => {
    const [user,setUser] = useState([])
    const [loder,setLoder] = useState(false)


    // create user with email and password
    const createUser = (user,password) => {
        return createUserWithEmailAndPassword(auth,user,password)
    }

    // login user with user and password
    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    // login with popup
    const loginWithPopup = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth,provider)
    }

    // //signout
    const signout = () => {
        return signOut(auth)
        .then(data=>{
            console.log('signOut Succesfull');
          })
          .catch(error=>{
           console.log(error);
          })
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        loginWithPopup,
        signout,
        loder,
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currenUser => {
            setUser(currenUser);
            setLoder(false)
        })

        return () => {
            unsubscribe();
        }
    },[])

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvaider;