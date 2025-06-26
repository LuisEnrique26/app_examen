import { useState } from "react";
import { useUserApi } from "./useUserApi";

export interface FormData {
    _id:      string;
    username: string;
    password: string;
    image:    string;
    tipo:     "user" | "admin" | "client";
}

interface UseFormHook {
    formData: FormData;
    formList: FormData[];
    handleInputChange: ( fieldName: keyof FormData, value: string | number ) => void;
    handleSubmit: () => void;
    handleDelete: () => void;
}

export const useFormHook = (): UseFormHook => {

    const { createUser, updateUser, deleteUser } = useUserApi();

    const initialState : FormData = {
        _id: "",
        username: "",
        password: "",
        image: "",
        tipo: "user"
    }

    const [formData, setFormaData] = useState<FormData>(initialState);
    const [formList, setFormList] = useState<FormData[]>([]);

    const handleInputChange = ( fieldName: keyof FormData, value: string | number ) => {
        setFormaData((prevData) => ({
            ...prevData,
            [fieldName]: value
        }));
    }

    const handleSubmit = () => {
        setFormList((prevList) => [...prevList, formData]);

        (formData._id != '')
        ? updateUser(formData)
        : createUser(formData);

        setFormaData(initialState);
    }

    const handleDelete = () => {
        deleteUser(formData);
        setFormaData(initialState);
    }

    return {
        formData,
        formList,
        handleInputChange,
        handleSubmit,
        handleDelete
    }

}