import React, { useState } from "react";
import { Animated, PanResponder, ScrollView, Text, View } from "react-native";
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

const cardPosition = new Animated.ValueXY();

const panResponder = PanResponder.create({
  onStartShouldSetPanResponder: () => {
    return true;
  },
  onPanResponderMove: (event, gesture) => {
    const { dx, dy } = gesture;
    cardPosition.setValue({ x: dx, y: dy });
  },
  onPanResponderRelease: event => {
    console.log(event);
  }
});

const Deck = ({ data }) => {
  return (
    <Animated.View
      style={cardPosition.getLayout()}
      {...panResponder.panHandlers}
    >
      {renderCards(data)}
    </Animated.View>
  );
};

export default Deck;
