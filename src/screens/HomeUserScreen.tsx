import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native"

const HomeUserScreen = () => {

    const navigation = useNavigation();

    return (
        <Button
            title="Login"
            onPress={() => navigation.navigate("LoginScreen")}
        />
    )
}

export default HomeUserScreen;