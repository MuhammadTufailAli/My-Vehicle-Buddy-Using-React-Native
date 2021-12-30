import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  ActivityIndicator,
  FlatList,
} from "react-native";

const firebaseUrl =
  "https://reactnativefirstdatabase-a7b2b-default-rtdb.firebaseio.com/";

const ProductScreen = ({ navigation, route }) => {
  const id = route.params.id;
  const title = route.params.name;
  const condition = route.params.condition;
  const description = route.params.description;
  const location = route.params.location;
  const price = route.params.price;
  const uri = route.params.photoUri;

  const savedata = () => {
    console.log("Adding");

    var requestoptions = {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        location: location,
        condition: condition,
        uri: uri,
      }),
    };

    fetch(`${firebaseUrl}/Client/${id}.json`, requestoptions)
      .then((response) => response.json())
      .then((result) => alert("Successfully Added to cart"))
      .catch((error) => console.log("error", error));
  };

  return (
    <View>
      <Image
        source={{
          uri: uri,
        }}
        style={{
          width: "96%",
          height: "50%",
          borderRadius: 10,
          margin: 10,
        }}
      />
      <Text style={{ margin: 10 }}>
        {title}
        {"\n"}
        Rs. {price}
        {"\n"}
        Condition: {condition}
        {"\n"}Description:{"\n"}
        {description}
        {"\n"}Location : {location}
      </Text>
      <Button title="Add to Cart" onPress={savedata} />
      <Button title="Buy Now" onPress={() => alert("Under development")} />
    </View>
  );
};

export default ProductScreen;
