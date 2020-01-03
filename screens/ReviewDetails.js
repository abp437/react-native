import React from "react";
import { Text, Button } from "react-native";

const ReviewDetails = ({ navigation }) => (
  <>
    <Text>Review Details</Text>
    <Button
      onPress={() => {
        navigation.goBack();
      }}
      title="Back to Home"
    />
  </>
);

export default ReviewDetails;
