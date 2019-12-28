import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const TodoItem = ({item, pressHandler}) => {
  const {text, id} = item;
  return (
    <TouchableOpacity onPress={() => {pressHandler(id)}}>
      <Text style={styles.item}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  }
});

export default TodoItem;
