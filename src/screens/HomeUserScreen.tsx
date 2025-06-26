import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { Button, RefreshControl, Text, View } from "react-native"
import { AuthContext } from "../context/AuthContext";
import { useUserApi } from "../hooks/useUserApi";
import { FlatList } from "react-native";
import { Usersdata } from "../interfaces/requestApi";
import { CardUser } from "../components/CardUser";

const HomeUserScreen = () => {

    const { signIn, logOut, authState } = useContext(AuthContext);
    const { listUsers, loadUsers, isLoading } = useUserApi();
    const navigation = useNavigation();
    const isFocussed = useIsFocused();

    useEffect(() => {
        loadUsers();
    }, [isFocussed])

    const create_user: Usersdata = {
        _id:        '',
        username:   '',
        password:   '',
        tipo:       'user',
        impagen:     '',
        __v:        0,
    }

    return (
        <View>
            <FlatList
                data={ Object.values(listUsers) }
                keyExtractor={(item) => '#'+item._id}
                ListHeaderComponent={(
                    <View>
                        <Text>
                            Lista de Usuarios
                        </Text>
                        <Button
                            title="Crear Usuario"
                            onPress={ () => navigation.navigate("FormScreen", {user: create_user}) }
                        />
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={isLoading}
                        onRefresh={loadUsers}
                        progressBackgroundColor={"black"}
                    />
                }
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={({item}) => (
                    <CardUser
                        user={item}
                    />
                )}
            />
        </View>
    )
}

export default HomeUserScreen;