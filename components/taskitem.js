import React from "react";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function TaskItem({item, pressHandler}) {
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.text}</Text>
            <TouchableOpacity onPress={() => pressHandler(item.key)} style={styles.deleteIconContainer}>
                <MaterialIcons name="clear" size={12} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#eee"
    },
    itemText: {
        fontFamily: "Poppins-Regular"
    },
    deleteIconContainer: {
        justifyContent: "center",
        alignItems: "flex-end",
        height: 50,
        width: 25
    }
});