import React, {useState} from "react";
import {Text, TextInput, View, Button, StyleSheet, TouchableOpacity} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function AddTask({submitHandler}) {
    const [text, setText] = useState("");

    return (
        <View style={styles.addTaskContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder="New task"
                value={text}
                onChangeText={setText} // or onChangeText={(val) => changeHandler(val)} !!! onChangeText={setText(val)} is not valid
            />
            <TouchableOpacity onPress={() => {setText(""), submitHandler(text)}}>
                <View style={styles.addButton}>
                    <MaterialIcons name="add" size={25} color="#fff"/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        height: 50,
        paddingHorizontal: 18,
        paddingVertical: 5,
        marginRight: 5,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        backgroundColor: "#fff",
        fontFamily: "Poppins-Regular"
    },
    addTaskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "#ccc",
        borderTopWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    addButton: {
        backgroundColor: "#F48603",
        height: 50,
        width: 50,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    }
});