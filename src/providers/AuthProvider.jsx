import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.confige';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {



    const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo = {
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
