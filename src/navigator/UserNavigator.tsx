import { createStackNavigator } from "@react-navigation/stack";
import HomeUserScreen from "../screens/HomeUserScreen";
import LoginScreen from "../screens/LoginScreen";
import { FormScreen } from "../screens/FormUserScreen";
import { Usersdata } from "../interfaces/requestApi";

export type RootStackUserParams = {
    HomeUserScreen: undefined;
    LoginScreen: undefined;
    FormScreen: { user: Usersdata };
}

export const UserNavigator = () => {

    const Stack = createStackNavigator<RootStackUserParams>();

    return (
        <Stack.Navigator
            initialRouteName="HomeUserScreen"
        >
            <Stack.Screen
                name="HomeUserScreen"
                component={HomeUserScreen}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="FormScreen"
                component={FormScreen}
            />
        </Stack.Navigator>
    );

}