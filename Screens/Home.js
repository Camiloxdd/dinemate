import React, { Component, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native"

export default function Home() {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        "Poppins": require("../assets/fonts/Poppins-Bold.ttf")
    })

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, [])

    if (!fontsLoaded) {
        return undefined;
    } else {
        SplashScreen.hideAsync();
    }

    return (
        <LinearGradient
            style={styles.container}
            colors={["#ffffff", "#a5d6d1"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <Image
                source={require('../assets/LogoApp.png')}
                style={{ width: 250, height: 250, alignContent: "center", marginTop: 150 }}
            />
            <Text style={styles.txt1}>Descubre tus proximos</Text>
            <Text style={styles.txt2}>lugares favoritos aqui.</Text>
            <Text style={styles.txt3}>Explora todos los productos que existan</Text>
            <Text style={styles.txt4}>basados en tu interes y que necesites ahora.</Text>
            <TouchableOpacity
                style={styles.button1}
                onPress={() => navigation.navigate("Register")}>
                <Text style={styles.txt5}>Vamos</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.txt7}>¿Todavia no tienes cuenta? Entra aca</Text>
            </TouchableOpacity>

        </LinearGradient>
    )

}

const styles = StyleSheet.create({
    txt1: {
        fontFamily: "Poppins",
        fontWeight: '',
        fontSize: 24,
        marginTop: 130,
    },
    txt2: {
        fontFamily: "Poppins",
        fontSize: 22,
        marginTop: -10,
    },
    txt3: {
        fontFamily: "Poppins",
        fontSize: 10,
        color: 'gray',
    },
    txt4: {
        fontFamily: "Poppins",
        fontSize: 10,
        color: 'gray',
    },
    txt5: {
        fontFamily: "Poppins",
        color: "#a5d6d1",
        fontSize: 18,
    },
    txt6: {
        fontFamily: "Poppins",
    },
    txt7: {
        fontFamily: "Poppins",
        color: "white",
        marginTop: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button1: {
        backgroundColor: "#fff",
        width: 300,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginTop: 40,
    },
    button2: {
        fontFamily: "Poppins",
        color: "#a5d6d1",
    },
    textbtn: {
        fontWeight: "bold",
        color: "#a5d6d1",
        marginTop: 1000,
    },
    textbtn1: {
        fontWeight: "bold",
        color: "white",
        marginTop: 20,
    },
    tittle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#a5d6d1",

    },
    tittle2: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#a5d6d1",

    },
    line: {
        backgroundColor: "#a5d6d1",

        height: 1,
        width: "90%",
        marginLeft: 18,
    },
    line1: {
        backgroundColor: "#a5d6d1",
        marginTop: 70,
        height: 1,
        width: "90%",
        marginLeft: 18,
    },
});

