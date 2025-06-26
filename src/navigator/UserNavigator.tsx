import { createStackNavigator } from "@react-navigation/stack";
import HomeUserScreen from "../screens/HomeUserScreen";
import LoginScreen from "../screens/LoginScreen";

export type RootStackUserParams = {
    HomeUserScreen: undefined;
    LoginScreen: undefined;
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
        </Stack.Navigator>
    );

}