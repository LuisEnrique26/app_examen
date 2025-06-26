import { StackScreenProps } from "@react-navigation/stack";
import { RootStackUserParams } from "../navigator/UserNavigator";
import { useFormHook } from "../hooks/useFormData";
import { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";

interface Props extends StackScreenProps<RootStackUserParams, 'FormScreen'>{};

export const FormScreen = ({ navigation, route }: Props) => {

    const { formData, handleInputChange, handleDelete, handleSubmit } = useFormHook();

    const user = route.params.user;

    useEffect( () => {
        handleInputChange('_id',user._id);
        handleInputChange('username',user.username);
        handleInputChange('image',user.impagen);
        handleInputChange('tipo',user.tipo);
    },[]);

    return (
        <ScrollView

        >

        </ScrollView>
    )
}