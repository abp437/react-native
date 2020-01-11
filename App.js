import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView
} from "react-native";
import Deck from "./src/Deck";
/*
  import FlatListComp from "./FlatList";
  import TodoList from "./todo-list/TodoList";
  import Navigation from "./routes/HomeStack";
  import Ball from "./src/Ball";
*/

const deckData = [
  {
    id: 1,
    text: "Card #1",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 2,
    text: "Card #2",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 3,
    text: "Card #3",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 4,
    text: "Card #4",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  },
  {
    id: 5,
    text: "Card #5",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 6,
    text: "Card #6",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 7,
    text: "Card #7",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 8,
    text: "Card #8",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  }
];

const renderNoMoreCards = () => <Text>No more cards!!!</Text>;

const App = () => {
  /*
    const [name, setName] = useState("Akshay");
    const [age, setAge] = useState(25);
    const [person, setPerson] = useState({
      personName: "Mario",
      personAge: 25
    });
    const [people, setPeople] = useState([
      { name: "Shaun", key: "1" },
      { name: "Yoshi", key: "2" },
      { name: "Mario", key: "3" },
      { name: "Luigi", key: "4" },
      { name: "Peach", key: "5" },
      { name: "Toad", key: "6" },
      { name: "Bowser", key: "7" }
    ]);
    const clickHandler = () => {
      setName("Pawar");
      setPerson({
        personName: "Luigi",
        personAge: 21
      });
    };
    const { personName, personAge } = person;
  */

  return (
    <>
      {/*
        <View style={styles.container}>
          <Text>
            His name is {personName} and his age is {personAge}
          </Text>
          <View style={styles.buttonContainer}>
            <Button title="Update Name" onPress={clickHandler} />
          </View>
          <Text>Enter Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Stone Cold"
            onChangeText={value => {
              setName(value);
            }}
          />
          <Text style={styles.marginBottom20}>Mein name is {name}</Text>
          <Text>Enter Age:</Text>
          <TextInput
            style={styles.input}
            placeholder="25"
            onChangeText={value => {
              setAge(value);
            }}
          />
          <Text>Mein age is {age}</Text>
        </View>
        <ScrollView style={styles.listContainer}>
          {people.map(item => {
            const {key, name} = item;
            let viewStyle = styles.item;
            if (key === people.length.toString()) {
              viewStyle = [
                styles.item,
                {marginBottom: styles.item.padding + styles.item.marginTop},
              ];
            }
            return (
              <View style={viewStyle} key={key}>
                <Text style={styles.textItem}>{name}</Text>
              </View>
            );
          })}
        </ScrollView>
        <FlatListComp />
        <TodoList />
        <Navigation />
        <Ball />
      */}
      <Deck data={deckData} />
    </>
  );
};

const styles = StyleSheet.create({
  /*
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    buttonContainer: {
      marginVertical: 20
    },
    input: {
      borderWidth: 1,
      borderColor: "#777",
      padding: 8,
      margin: 10,
      width: 200
    },
    marginBottom20: {
      marginBottom: 20
    },
    listContainer: {
      flex: 1,
      paddingTop: 40,
      paddingHorizontal: 20
    },
    item: {
      marginTop: 24,
      padding: 30,
      backgroundColor: "pink"
    },
    textItem: {
      fontSize: 24
    }
  */
});

export default App;
