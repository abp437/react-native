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

const screenWidth = Math.round(Dimensions.get("window").width);

// Hitler Images Link:
// https://media.gettyimages.com/photos/german-fuhrer-and-nazi-leader-adolf-hitler-addresses-soldiers-with-picture-id2696364?s=2048x2048
// https://media.gettyimages.com/photos/november-9-1938-march-through-munich-in-remembrance-of-the-putsch-l-picture-id92937366?s=2048x2048
// https://media.gettyimages.com/photos/adolf-hitler-chancellor-of-germany-is-welcomed-by-supporters-at-picture-id3324060?s=2048x2048
// https://media.gettyimages.com/photos/adolf-hitler-in-munich-in-the-spring-of-1932-picture-id119505258?s=2048x2048
// https://www.gettyimages.in/photos/adolf-hitler?sort=mostpopular&mediatype=photography&phrase=adolf%20hitler
// https://media.gettyimages.com/photos/adolf-hitler-and-nazis-about-193233-colourized-photo-picture-id53401757?s=2048x2048

const PollSamples = () => {
  return (
    <>
      <Text style={{ margin: 10, textAlign: "center", fontWeight: "bold" }}>
        Samples
      </Text>
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
    </>
  );
};

export default PollSamples;
