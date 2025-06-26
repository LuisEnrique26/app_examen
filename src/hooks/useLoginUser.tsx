import React, { useContext, useReducer, useState } from "react";
import { RequestLogin } from "../interfaces/requestApi";
import { AuthContext } from "../context/AuthContext";
import { myApi } from "../api/myApi";
import { useNavigation } from "@react-navigation/native";
import { RootStackUserParams } from "../navigator/UserNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface LoginData {
    username: string;
    password: string;
}

const initialState: LoginData = {
    username: "",
    password: ""
}

type Action = { type: "handleInputChange", payload: { fieldName: keyof LoginData, value: string } };

const dataReducer = ( state: LoginData, action: Action ) => {
    switch (action.type) {
        case 'handleInputChange': {
            return {
                ...state,
                [ action.payload.fieldName ] : action.payload.value
            }
        }
    }
}

export const useLoginUser = () => {

    const [ loading, setLoading ] = useState<boolean>( false );
    const [ state, dispatch ] = useReducer( dataReducer, initialState );
    const [ request, setRequest ] = useState<RequestLogin>();
    const { signIn, changeAvatar, changeUserName } = useContext(AuthContext);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackUserParams>>();

    const handleInputChange = ( fieldName: keyof LoginData, value: string ) => {
        dispatch({ type: "handleInputChange", payload: {fieldName, value} });
    }

    const handleLogin = async() => {
        setLoading(true);
        const apiUrl = "http://192.168.100.59:3000/users/login";
        const dataBody = {
            username: state.username.trim(),
            password: state.password
        }
        //console.log(dataBody);

        try {
            const response = await myApi.post(apiUrl,dataBody);
            //console.log(response.data);
            
            if ( response.data !== false )  {
                signIn();
                changeUserName( response.data.username );
                changeAvatar( response.data.image );
                setRequest( response.data );
                navigation.navigate("HomeUserScreen");
            };
        } catch (error) {
            console.log(error);
            setRequest(false);
        }
        setLoading(false);
    }

    return { loading, state, handleLogin, handleInputChange, request };

}