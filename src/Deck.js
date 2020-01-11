import React from "react";
import { Animated, ScrollView, Text, View } from "react-native";
import { Button, Card } from "react-native-elements";

const renderCards = data =>
  data.map(item => (
    <Card key={item.id} title={item.text} image={{ uri: item.uri }}>
      <Text style={{ marginBottom: 10 }}>I can customize the card further</Text>
      <Button
        icon={{ name: "code", color: "#fff" }}
        backgroundColor="#03a9f4"
        title="View Now!"
      />
    </Card>
  ));

const Deck = ({ data }) => <ScrollView>{renderCards(data)}</ScrollView>;

export default Deck;
