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
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";

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
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <View
        style={{
          height: "85%",
          backgroundColor: "white",
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}
      >
        <View style={{ alignItems: "center", marginTop: "12%" }}>
          <Text style={{ fontSize: 24, fontWeight: "600", color: "#1DA1F2" }}>
            Product
          </Text>
        </View>
        <Image
          source={{
            uri: uri,
          }}
          style={{
            width: "96%",
            height: "60%",
            borderRadius: 10,
            marginTop: 10,
            marginLeft: "2%",
            marginRight: "3%",
          }}
        />
        <Text
          style={{
            marginTop: 20,
            marginLeft: 15,
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 15,
            fontSize: 24,
            fontWeight: "500",
          }}
        >
          {description}
        </Text>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 15,
            fontSize: 18,
            fontWeight: "500",
          }}
        >
          Condition: <Text style={{ color: "#1DA1F2" }}>{condition}</Text>
        </Text>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 15,
            fontSize: 18,
            fontWeight: "500",
            color: "red",
          }}
        >
          <Icon
            style={{ justifyContent: "center", color: "red", marginRight: 5 }}
            name="map-marker"
            size={24}
          />{" "}
          {location}
        </Text>

        {/* <Button title="Add to Cart" onPress={savedata} />
        <Button title="Buy Now" onPress={() => alert("Under development")} /> */}
      </View>

      <View style={{ margin: 20, flexDirection: "row" }}>
        <Text style={{ color: "#1DA1F2", fontSize: 14, fontWeight: "400" }}>
          PRICE:{"\n"}
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "400",
              marginTop: 4,
            }}
          >
            Rs. {price}
          </Text>
        </Text>

        <TouchableOpacity
          onPress={savedata}
          style={{
            marginTop: 7,
            marginLeft: "40%",
            padding: 10,
            backgroundColor: "#1DA1F2",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 14,
            }}
          >
            <Icon
              style={{
                justifyContent: "center",
                color: "black",
                marginRight: 5,
              }}
              name="shopping-cart"
              size={14}
            />{" "}
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductScreen;
