import React from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';

export function PasswordItem({ data, removePassword }) {
    return (
        <View>
            <Pressable onLongPress={removePassword} style={styles.container}>
                <Text style={styles.text}>{data}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#DE508C",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: '#FFF'
    }
})
