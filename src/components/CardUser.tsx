import { useNavigation } from "@react-navigation/native";
import { Usersdata } from "../interfaces/requestApi";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";

interface Props {
    user:Usersdata
}

export const CardUser = ({ user }: Props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            key={`${user._id}${user.__v}`}
            activeOpacity={0.9}
            onPress={ () => navigation.navigate("FormScreen", {user:user}) }
        >
            <Text>
                {`User Name: ${user.username}`}
                {`Tipo: ${user.tipo}`}
            </Text>

        </TouchableOpacity>
    )
}