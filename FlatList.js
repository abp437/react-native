import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";

const FlatListComp = () => {
  const [people, setPeople] = useState([
    { name: "Shaun", id: "1" },
    { name: "Yoshi", id: "2" },
    { name: "Mario", id: "3" },
    { name: "Luigi", id: "4" },
    { name: "Peach", id: "5" },
    { name: "Toad", id: "6" },
    { name: "Bowser", id: "7" }
  ]);

  const pressHandler = id => () => {
    setPeople(people.filter(person => person.id !== id));
  };

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={people}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={pressHandler(item.id)}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default FlatListComp;
