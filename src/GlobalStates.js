import React, { useState, createContext } from "react"

export const AuthContext = createContext({});

export const AuthProvider = props => {
    const [authState, setauthState] = useState ({});

    return(
        <AuthContext.Provider value= {[authState, setauthState]}>
            {props.children}        
        </AuthContext.Provider>
    );

}