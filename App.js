import React, {useState} from "react";
import {Text, View, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Modal, TextInput, TouchableOpacity} from "react-native";
import { Dimensions } from "react-native";
import Header from "./components/header";
import TaskItem from "./components/taskitem";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DropShadow from "react-native-drop-shadow";
import CheckBox from '@react-native-community/checkbox';

export default function App() {
  const [tasks, setTasks] = useState([
    {text: "Make coffee", type: "todo", key: "1"},
    {text: "Wash dishes", type: "todo", key: "2"},
    {text: "Attend class", type: "todo", key: "3"}
  ]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [taskText, setTaskText] = useState("");

  const pressHandler = (key) => {
    setTasks((prevTasks) => {
      return prevTasks.filter(task => task.key != key)
    })
  }

  const saveNewTask = (text) => {
    if (text.length > 0) {
      setTasks((prevTasks) => {
        return [
          ...prevTasks,
          {text: text, key: Math.random().toString()}
        ];
      });
      setModalVisibility(false);
      setTaskText("");
    }
    else {
      Alert.alert("Task is empty", "Please write something.", [
        {text: "OK"}
      ])
    }
  }


  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
      <View style={styles.screenContainer}>
        <Header/>
        <View style={styles.listsAddButtonContainer}>
          <View style={styles.listsContainer}>
            <FlatList
              data={tasks}
              renderItem={({item}) => ( // {item} because object?
                <TaskItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
          <TouchableOpacity 
            style={styles.addTaskButton}
            onPress={() => setModalVisibility(true)}
          >
            <View style={styles.addButton}>
                <MaterialIcons name="add" size={20} color="#fff"/>
            </View>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          visible={modalVisibility}
          transparent={true}
          onRequestClose={() => setModalVisibility(false)}
        > 
          <TouchableWithoutFeedback onPress={() => setModalVisibility(false)}>
            <View style={styles.modalContentContainer}>
              <TouchableWithoutFeedback>
                <DropShadow style={styles.dropShadow}>
                  <View style={styles.modalContent}>
                    <Text style={styles.addTaskModalTitle}>New task</Text>
                    <TextInput 
                      multiline
                      style={styles.taskTextInput}
                      placeholder="Write something"
                      value={taskText}
                      onChangeText={(inputText) => setTaskText(inputText)} // or onChangeText={(val) => changeHandler(val)} !!! onChangeText={setText(val)} is not valid
                    />
                    <View style={styles.modalButtonsContainer}>
                      <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={() => {setTaskText(""), setModalVisibility(false)}}>
                          <Text style={{fontFamily: "Poppins-Regular"}}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.modalButton, styles.saveButton]} onPress={() => saveNewTask(taskText)}>
                          <Text style={{color: "white", fontFamily: "Poppins-Regular"}}>Save</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </DropShadow>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>        
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff"
  }, 
  listsAddButtonContainer: {
    flex: 1
  },
  listsContainer: {
    flex: 1,
    margin: 20,
  },
  modalContentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    width: Dimensions.get("screen").width - 80,
    padding: 20,
    backgroundColor: "white"
  },
  addTaskModalTitle: {
    fontFamily: "Poppins-Bold"
  },
  taskTextInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    fontFamily: "Poppins-Regular",
    marginVertical: 10,   
    paddingHorizontal: 10 
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  modalButton: {
    marginLeft: 10,
    padding: 10,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: "#eee"
  },
  saveButton: {
    backgroundColor: "#F48603"
  },
  addTaskButton: {
    backgroundColor: "#F48603",
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 20,
    elevation: 4
  },
  dropShadow: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  }
})