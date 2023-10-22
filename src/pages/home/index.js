import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import Slider from "@react-native-community/slider"
import { ModalPassword } from '../../components/modal/index'
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function Home() {
    const [size, setSize] = useState(6);
    const [passwordValue, setPasswordValue] = useState("");
    const [ModalVisible, setModalVisible] = useState(false);

    function generatePassword() {

        let password = "";
        for (let i = 0, n = charset.length; i < size; i++) {
            password += charset.charAt(Math.floor(Math.random() * n))
        }
        setPasswordValue(password);
        setModalVisible(true);
    }


    return (
        <View style={styles.container}>
            <Image source={require("../../assets/logoB.png")}
                style={styles.logo}
                resizeMode="contain"
            ></Image>

            <Text style={styles.title}>{size} caracteres</Text>
            <View style={styles.area}>
                <Slider style={{ height: 50 }}
                    minimumValue={6} maximumValue={20}
                    minimumTrackTintColor="#DE328C"
                    maximumTrackTintColor="#000"
                    thumbTintColor="#31313"
                    value={size}
                    onValueChange={(value) => { setSize(value.toFixed(0)) }}
                >

                </Slider>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={generatePassword}
            >
                <Text style={styles.buttonText}>Gerar Senha</Text>

            </TouchableOpacity>

            <Modal visible={ModalVisible} animationType="fade" transparent={true}>
                <ModalPassword password={passwordValue} handleClose={() => { setModalVisible(false) }} />
            </Modal>

        </View>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F3F",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: "60%",
        height: 200,
        marginBottom: 20
    },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 8,
    },
    button: {
        backgroundColor: "#DE328C",
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    buttonText: {
        color: "#ffff",
        fontSize: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})