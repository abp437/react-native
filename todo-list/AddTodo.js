import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");
  const changeHandler = value => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        onChangeText={changeHandler}
        placeholder="New Todo"
        style={styles.input}
      />
      <Button
        onPress={() => {
          submitHandler(text);
        }}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});

export default AddTodo;
