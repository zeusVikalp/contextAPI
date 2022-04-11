import React from "react";

export const AuthContext = React.createContext();

export function AuthContextProvider({children}){
    const isAuth = true;
    return <AuthContext.Provider value={isAuth}>{children}</AuthContext.Provider>
}