import React from "react";
import { Text, Button } from "react-native";

const Home = ({ navigation }) => (
  <>
    <Text>Home</Text>
    <Button
      onPress={() => {
        navigation.navigate("ReviewDetails");
      }}
      title="Go to Review Details"
    />
  </>
);

export default Home;
