import { useEffect, useState } from "react";
import { Usersdata } from "../interfaces/requestApi";
import { myApi } from "../api/myApi";
import { FormData } from "./useFormData";

interface UseUserApi {
    isLoading: boolean;
    listUsers: Usersdata;
    loadUsers: () => void;
    createUser: ( data: FormData ) => void;
    updateUser: ( data: FormData ) => void;
    deleteUser: ( data: FormData ) => void;
}

export const useUserApi = (): UseUserApi => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [listUsers, setListUsers] = useState<Usersdata>( {} as Usersdata );

    const apiUrl: string = "http://192.168.100.59:3000/users";

    const loadUsers = async() => {
        setIsLoading(true);
        const response = await myApi.get( apiUrl );
        setListUsers( response.data );
        setIsLoading(false);
    }

    const createUser = async ( data: FormData ) => {
        const dataBody = {
            username: data.username,
            password: data.password,
            image: data.image,
            tipo: data.tipo
        }

        await myApi.post( apiUrl,dataBody );
    }

    const updateUser = async ( data:FormData ) => {
        if (data.password !== '') {
            const dataBody = {
                username: data.username,
                password: data.password,
                image: data.image,
                tipo: data.tipo
            }   
            await myApi.patch( apiUrl + `/${data._id}`,dataBody );
        } else {
            const dataBody = {
                username: data.username,
                image: data.image,
                tipo: data.tipo
            }
            await myApi.patch( apiUrl + `/${data._id}`,dataBody );
        }
    }

    const deleteUser = async ( data: FormData ) => {
        await myApi.delete( apiUrl + `/${data._id}` );
    }

    useEffect(() => {
        loadUsers()
    }, []);

    return { isLoading,  listUsers, loadUsers, createUser, updateUser, deleteUser };
}