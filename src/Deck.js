import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  ScrollView,
  Text,
  View
} from "react-native";
import { Button, Card } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;

const renderCards = data =>
  data.map((item, index) => {
    if (index === 0) {
      return (
        <Animated.View
          key={item.id}
          style={getCardStyle()}
          {...panResponder.panHandlers}
        >
          {getCardItem(item)}
        </Animated.View>
      );
    }
    return getCardItem(item);
  });

const getCardStyle = () => {
  // Here we are establishing a linear relation between
  // the amount of pixels a user drags the card and
  // how much should the card rotate according to it
  // This is interpolation.
  // We are using SCREEN_WIDTH here because we want it to work on different devices
  // We could have used any integer otherwise
  const rotate = cardPosition.x.interpolate({
    inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
    outputRange: ["-120deg", "0deg", "120deg"]
  });
  return {
    ...cardPosition.getLayout(),
    transform: [{ rotate }]
  };
};

const getCardItem = item => (
  <Card key={item.id} title={item.text} image={{ uri: item.uri }}>
    <Text style={{ marginBottom: 10 }}>I can customize the card further</Text>
    <Button
      icon={{ name: "code", color: "#fff" }}
      backgroundColor="#03a9f4"
      title="View Now!"
    />
  </Card>
);

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
  return <View>{renderCards(data)}</View>;
};

export default Deck;
