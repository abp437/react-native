import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './Header';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {text: 'Code', id: '1'},
    {text: 'Roadmap Project', id: '2'},
    {text: 'Review PRs', id: '3'},
    {text: 'Team Syncup', id: '4'},
  ]);

  const pressHandler = (id) => {
    setTodos(prevState => (
      prevState.filter(todo => todo.id !== id)
    ));
  };

  const submitHandler = (text) => {
    if (text.length > 0) {
      setTodos(prevState => (
        [
          ...todos,
          { text, id: Math.random().toString() }
        ]
      ));
    } else {
      Alert.alert('Enter something Jackass');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        {/* Header */}
        <Header />
        <View style={styles.content}>
          {/* To Form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={item => item.id}
              data={todos}
              renderItem={({item}) => (
                <TodoItem pressHandler={pressHandler} item={item}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default TodoList;
