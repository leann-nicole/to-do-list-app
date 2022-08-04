import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Your Tasks</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        justifyContent: "flex-end",
        paddingHorizontal: 20
    },
    title: {
        fontSize: 30,
        color: "#F48603",
        fontFamily: "Teko-SemiBold"
    }
});