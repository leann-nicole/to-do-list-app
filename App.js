import React, {useState} from "react";
import {Text, View, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from "react-native";
import Header from "./components/header";
import TaskItem from "./components/taskitem";
import AddTask from "./components/addtask";

export default function App() {
  const [tasks, setTasks] = useState([
    {text: "Make coffee", key: "1"},
    {text: "Wash dishes", key: "2"},
    {text: "Attend class", key: "3"}
  ]);

  const pressHandler = (key) => {
    setTasks((prevTasks) => {
      return prevTasks.filter(task => task.key != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 0) {
      setTasks((prevTasks) => {
        return [
          ...prevTasks,
          {text: text, key: Math.random().toString()}
        ];
      });
    }
    else {
      Alert.alert("Task is empty", "You haven't written anything.", [
        {text: "OK"}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
      <View style={styles.screenContainer}>
        <Header/>
        <View style={styles.listsInputContainer}>
          <View style={styles.listsContainer}>
            <FlatList
              data={tasks}
              renderItem={({item}) => ( // {item} because object?
                <TaskItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
          <AddTask submitHandler={submitHandler}/>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff"
  }, 
  listsInputContainer: {
    flex: 1,
    justifyContent: "space-between"
  },
  listsContainer: {
    flex: 1,
    margin: 20
  }
})