import React from "react";
import { View } from "react-native";

const Ball = () => <View style={styles.ball}></View>;

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderWidth: 30,
    borderRadius: 30,
    borderColor: "#000"
  }
};

export default Ball;
