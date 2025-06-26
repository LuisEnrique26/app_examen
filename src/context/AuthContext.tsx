import React, { createContext, ReactNode, useReducer } from "react";
import { authReducer } from "./authReducer";

export interface AuthState {
    isLoggenIn: boolean;
    username: string;
    avatar: string;
}

export const AuthInitialState: AuthState = {
    isLoggenIn: false,
    username: "",
    avatar: ""
}

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    changeAvatar: ( avatar: string ) => void;
    changeUserName: ( username: string ) => void;
}

export const AuthContext = createContext( {} as AuthContextProps );

export const AuthProvider = ( { children } : { children: ReactNode } ) => {

    const [ authState, dispatch ] = useReducer( authReducer, AuthInitialState );

    const signIn = () => dispatch({ type: "signIn" });
    const logOut = () => dispatch({ type: "logOut" });
    const changeAvatar = ( avatar: string ) => {
        dispatch({ type: "changeAvatar", payload: avatar });
    };
    const changeUserName = ( username: string ) => {
        dispatch({ type: "changeUserName", payload: username });
    };

    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                logOut,
                changeAvatar,
                changeUserName
            }}
        >

            { children }
        </AuthContext.Provider>
    );

}