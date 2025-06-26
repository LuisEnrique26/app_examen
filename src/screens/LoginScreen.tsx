import React, { View, StyleSheet, Text, useWindowDimensions, TextInput, TouchableOpacity } from "react-native";
import { useLoginUser } from "../hooks/useLoginUser";

const LoginScreen = () => {

    const { loading, handleLogin, handleInputChange, request, state } = useLoginUser();
    const { height, width } = useWindowDimensions();

    return (
        <View
            style={styles.container}
        >
            <View
                style={{
                    ...styles.formContainer,
                    height: height * .6,
                    width: width * .8,
                }}
            >
                <Text
                    style={styles.title}
                >
                    Iniciar Sesión
                </Text>
                { (request === false) &&
                    <Text
                        style={{
                            ...styles.title,
                            color: "red",
                            fontSize: 25
                        }}
                    >
                        Datos erroreos
                    </Text>
                }
                <TextInput
                    style={styles.inputs}
                    placeholder="Nombre de Usuario"
                    value={ state.username }
                    onChangeText={ (text) => handleInputChange("username", text) }
                />
                <TextInput
                    style={styles.inputs}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    value={ state.password }
                    onChangeText={ (text) => handleInputChange("password", text) }
                />
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    { (!loading) && 
                        <TouchableOpacity
                            style={styles.button}
                            onPress={ () => handleLogin() }
                        >
                            <Text
                                style={{
                                    textAlign: "center"
                                }}
                            >
                                Enviar
                            </Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cce0ff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    formContainer: {
        backgroundColor: "#ffffff",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingVertical: 30
    },
    title: {
        fontSize: 35,
        fontFamily: "bold"
    },
    inputs: {
        borderColor: "#99c2ff",
        borderWidth: 4,
        borderRadius: 10,
        width: "80%"
    },
    button: {
        height: "auto",
        width: "40%",
        backgroundColor: "#99c2ff",
        borderColor: "#66a3ff",
        borderWidth: 4,
        borderRadius: 10,
        padding: 4
    }
});

export default LoginScreen;