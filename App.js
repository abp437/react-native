import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Deck from "./src/Deck";
/*
  import FlatListComp from "./FlatList";
  import TodoList from "./todo-list/TodoList";
  import Navigation from "./routes/HomeStack";
  import Ball from "./src/Ball";
*/

// Hitler Images Link:
// https://media.gettyimages.com/photos/german-fuhrer-and-nazi-leader-adolf-hitler-addresses-soldiers-with-picture-id2696364?s=2048x2048
// https://media.gettyimages.com/photos/november-9-1938-march-through-munich-in-remembrance-of-the-putsch-l-picture-id92937366?s=2048x2048
// https://media.gettyimages.com/photos/adolf-hitler-chancellor-of-germany-is-welcomed-by-supporters-at-picture-id3324060?s=2048x2048
// https://media.gettyimages.com/photos/adolf-hitler-in-munich-in-the-spring-of-1932-picture-id119505258?s=2048x2048
// https://www.gettyimages.in/photos/adolf-hitler?sort=mostpopular&mediatype=photography&phrase=adolf%20hitler
// https://media.gettyimages.com/photos/adolf-hitler-and-nazis-about-193233-colourized-photo-picture-id53401757?s=2048x2048

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

Image.getSize(
  "https://archive-media-0.nyafuu.org/wg/image/1468/32/1468323886685.jpg",
  (width, height) => {
    console.log(width);
    console.log(height);
    // this.setState({ width, height });
  }
);

const screenWidth = Math.round(Dimensions.get('window').width);

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
    <ScrollView>
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
      {/* <Deck data={deckData} /> */}
      <Text style={{ margin: 10, textAlign:'center', fontWeight: 'bold' }}>Samples</Text>
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 5,
          marginBottom: 20,
        }}
      >
        <Image
          style={{
            width: 70,
            aspectRatio: 1.613,
            borderRadius: 4
          }}
          source={{
            uri:
              "https://archive-media-0.nyafuu.org/wg/image/1468/32/1468323886685.jpg"
          }}
        />
        <View style={{ flexBasis: screenWidth - 90 }}>
          <View
            style={{
              marginLeft: 12,
              marginBottom: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ fontSize: 14 }}>Do you Heil Der Fuhrer?</Text>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 20,
                backgroundColor: "#4CAF50"
              }}
            ></View>
          </View>
          <Text
            style={{
              fontStyle: "italic",
              fontSize: 12,
              marginLeft: 12
            }}
          >
            Expires in 2h
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 12 }}>
            <View
              style={{ width: "33.33%", height: 3, backgroundColor: "orange" }}
            ></View>
            <View
              style={{ width: "33.33%", height: 3, backgroundColor: "blue" }}
            ></View>
            <View
              style={{ width: "33.33%", height: 3, backgroundColor: "green" }}
            ></View>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 5,
          marginBottom: 20
        }}
      >
        <Image
          style={{
            width: 70,
            aspectRatio: 1.613,
            borderRadius: 4
          }}
          source={{
            uri:
              "https://media.gettyimages.com/photos/adolf-hitler-chancellor-of-germany-is-welcomed-by-supporters-at-picture-id3324060?s=2048x2048"
          }}
        />
        <View style={{ flexBasis: screenWidth - 90 }}>
          <View
            style={{
              marginLeft: 12,
              marginBottom: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ fontSize: 14 }}>Bist du eine Europa Nazione?</Text>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 20,
                backgroundColor: "#4CAF50"
              }}
            ></View>
          </View>
          <Text
            style={{
              fontStyle: "italic",
              fontSize: 12,
              marginLeft: 12
            }}
          >
            Expires in 59:30
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 12 }}>
            <View
              style={{ width: "65%", height: 3, backgroundColor: "red" }}
            ></View>
            <View
              style={{ width: "20%", height: 3, backgroundColor: "orange" }}
            ></View>
            <View
              style={{ width: "15%", height: 3, backgroundColor: "purple" }}
            ></View>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 5
        }}
      >
        <Image
          style={{
            width: 70,
            aspectRatio: 1.613,
            borderRadius: 4
          }}
          source={{
            uri:
              "https://media.gettyimages.com/photos/adolf-hitler-and-nazis-about-193233-colourized-photo-picture-id53401757?s=2048x2048"
          }}
        />
        <View style={{ flexBasis: screenWidth - 90 }}>
          <View
            style={{
              marginLeft: 12,
              marginBottom: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ fontSize: 14 }}>
              Bist du eine Nazional Socialiste?
            </Text>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 20,
                backgroundColor: "grey"
              }}
            ></View>
          </View>
          <Text
            style={{
              fontStyle: "italic",
              fontSize: 12,
              marginLeft: 12,
              color: "grey"
            }}
          >
            Expired
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 12 }}>
            <View
              style={{ width: "30%", height: 3, backgroundColor: "#9CCC65" }}
            ></View>
            <View
              style={{ width: "10%", height: 3, backgroundColor: "salmon" }}
            ></View>
            <View
              style={{ width: "60%", height: 3, backgroundColor: "grey" }}
            ></View>
          </View>
        </View>
      </View>
    </ScrollView>
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
