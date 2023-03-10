import React, { useState, createContext } from "react"

export const AuthContext = createContext({});

export const AuthProvider = props => {
    const [authState, setauthState] = useState ({
        _id: '',
        prefix: '',
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        phone: '',
        userid: ''
    });

    return(
        <AuthContext.Provider value= {[authState, setauthState]}>
            {props.children}        
        </AuthContext.Provider>
    );

}