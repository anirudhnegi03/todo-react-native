import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import Fallback from "../components/Fallback";

const TodoScreen = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#333333",
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 8,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
        }}
      >
        <Text
          style={{ color: "#FFFFE0", fontSize: 20, fontWeight: "800", flex: 1 }}
        >
          {item.title}
        </Text>
        <IconButton
          icon="pencil"
          iconColor="yellow"
          onPress={() => handleEditTodo(item)}
        />
        <IconButton
          icon="trash-can"
          onPress={() => handleDeleteTodo(item.id)}
          iconColor="green"
        />
      </View>
    );
  };
  const handleAddTodo = () => {
    // {
    //     id:
    //     title:
    // }
    if (todo === "") {
      return;
    }
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };
  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };
  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };
  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }
      return item;
    });

    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo("");
  };
  return (
    <View style={{ marginHorizontal: 16 }}>
      <StatusBar hidden />
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          color: "white",
          borderRadius: 6,
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
        placeholder="Add a task"
        placeholderTextColor="white"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      ></TextInput>

      {editedTodo ? (
        <TouchableOpacity
          style={{
            backgroundColor: "#FFD700",
            borderRadius: 6,
            paddingVertical: 12,
            marginTop: 24,
            marginVertical: 34,
            color: "#8B4513",
            alignItems: "center",
          }}
          onPress={() => handleUpdateTodo()}
        >
          <Text
            style={{
              color: "#000000",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "#F5F5DC",
            borderRadius: 6,
            paddingVertical: 12,
            marginTop: 24,
            marginVertical: 34,
            alignItems: "center",
          }}
          onPress={() => handleAddTodo()}
        >
          <Text
            style={{
              color: "#000000",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Add
          </Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={todoList}
        style={{ marginBottom: 200 }}
        renderItem={renderTodos}
      />
      {todoList.length <= 0 && <Fallback />}
    </View>
  );
};
export default TodoScreen;
const styles = StyleSheet.create({});
