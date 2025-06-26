import { AuthState } from './AuthContext';

type AuthActions = 
    | { type: "signIn" }
    | { type: "logOut" }
    | { type: "changeUserName", payload: string }
    | { type: "changeAvatar", payload: string };

    export const authReducer = ( state: AuthState, action: AuthActions ) => {
        switch (action.type) {
            case "signIn":
                return {
                    ...state,
                    isLoggenIn: true,
                    username: "ironmango",
                    avatar: "iamge.jpg"
                };
            case "logOut":
                return {
                    ...state,
                    isLoggenIn: false,
                    username: "",
                    avatar: ""
                };
            case "changeUserName":
                return {
                    ...state,
                    username: action.payload
                };
            case "changeAvatar":
                return {
                    ...state,
                    avatar: action.payload
                };
        }
    }