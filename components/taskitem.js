import React, {useState} from "react";
import {Text, View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CheckBox from "@react-native-community/checkbox";

export default function TaskItem({item, pressHandler}) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
        <View style={styles.item}>
            <View style={styles.checkBoxTextPair}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={styles.itemText}>{item.text}</Text>    
            </View>
            <TouchableWithoutFeedback onPress={() => pressHandler(item.key)} style={styles.deleteIconContainer}>
                <MaterialIcons name="clear" size={15} />
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        minHeight: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#eee"
    },
    checkBoxTextPair: {
        flexDirection: "row",
        alignItems: "center",
        flex: .90,
    },
    itemText: {
        flex: 1,
        fontFamily: "Poppins-Regular",
        marginLeft: 10,
        marginVertical: 15,
        flexWrap: "wrap"
    },
    deleteIconContainer: {
        justifyContent: "center",
        alignItems: "flex-end",
        height: 50,
        width: 25
    }
});