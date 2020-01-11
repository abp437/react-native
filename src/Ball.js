import React, { useEffect, useState } from "react";
import { Animated, View } from "react-native";

const Ball = () => {
  const [ballPosition, setBallPosition] = useState(
    new Animated.ValueXY({ x: 100, y: 200 })
  );

  useEffect(() => {
    Animated.spring(ballPosition, {
      toValue: { x: 200, y: 500 }
    }).start();
  }, []);

  return (
    <Animated.View style={ballPosition.getLayout()}>
      <View style={styles.ball}></View>
    </Animated.View>
  );
};

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
