import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard'
import useStorage from '../../hooks/useStorage'

export function ModalPassword({ password, handleClose }) {
    const {saveItem} = useStorage()

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)
        await saveItem("@pass", password)
        
        alert("Senha salva com sucesso!")

        handleClose();
    }


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>{password}</Text>

                </Pressable>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                        <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24,24, 0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        backgroundColor: "#FFF",
        width: "80%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24,
    },
    innerPassword: {
        backgroundColor: "#0e0e0e",
        width: "90%",
        paddingTop: 14,
        paddingBottom: 14,
        borderRadius: 8
    },
    text: {
        color: "#fff",
        textAlign: "center",
        fontWeight: 'bold'
    },
    buttonArea: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 8,
        alignContent: "center",

    },
    button: {
        flex: 1,
        alignItems: "center",
        marginBottom: 14,
        marginTop: 14,
        padding: 10
    },
    buttonSave: {
        backgroundColor: "#DE328C",
        borderRadius: 8,
    },
    buttonSaveText: {
        color: "#fff",
        fontWeight: "bold"
    }
})