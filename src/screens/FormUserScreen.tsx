import { StackScreenProps } from "@react-navigation/stack";
import { RootStackUserParams } from "../navigator/UserNavigator";
import { useFormHook } from "../hooks/useFormData";
import { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Text, TextInput, View } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";

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
        <ScrollView>
            <Text>
                Formulario
            </Text>
            <View>
                {(formData._id != '') && 
                <Button
                    title="Eliminar"
                    onPress={() => {
                        handleDelete();
                        navigation.goBack();
                    }}
                />
                }
                <Text>
                    User Name
                </Text>
                <TextInput
                    value={formData.username}
                    onChangeText={(text) => handleInputChange('username', text)}
                    placeholder="Nombre de Usuario"
                />
                <Text>
                    Password
                </Text>
                <TextInput
                    value={formData.password}
                    onChangeText={(text) => handleInputChange('password', text)}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    onPress={() => {
                        handleSubmit();
                        navigation.navigate("HomeUserScreen");
                    }}
                >
                    <View>
                        <Text>
                            Enviar
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}