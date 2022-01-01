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
  TabBar,
  SafeAreaView,
} from "react-native";
import { color } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";

const firebaseUrl =
  "https://reactnativefirstdatabase-a7b2b-default-rtdb.firebaseio.com/";

function inventory({ navigation, route }) {
  const id = route.params.id;
  const [array, setarray] = useState([]);
  const [getcondition, setcondition] = React.useState(true);

  const getproduct = () => {
    fetch(`${firebaseUrl}/ProductDetails.json`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responsejson) => {
        let samplearray = [];
        for (key in responsejson) {
          if (array.length == 0) {
            console.log("First add");
            samplearray.push(responsejson[key]);
          } else {
            console.log("other addition");
            samplearray.push(responsejson[key]);
          }
        }
        setarray(samplearray);

        console.log(array);

        setcondition(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    getproduct();
  }, []);
  if (getcondition) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />

        <Text>Waiting for response</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#36454F", height: "100%" }}>
      <View
        style={{
          alignItems: "center",
          borderBottomWidth: 0.5,
          borderColor: "white",
          paddingBottom: 5,
        }}
      >
        <Text style={{ fontSize: 24 }}>
          <Text style={{ color: "red" }}>Hot</Text>{" "}
          <Icon
            style={{ justifyContent: "center", color: "red" }}
            name="fire"
            size={24}
          />
          <Text style={{ color: "#1DA1F2" }}> Products Today</Text>
        </Text>
      </View>
      <View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <FlatList
            data={array}
            renderItem={({ item }) => {
              return (
                <View
                  elevation={5}
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#FAF9F6",
                    borderRadius: 15,
                    marginBottom: 15,
                    shadowColor: "black",
                    shadowOpacity: 1,
                    shadowRadius: 5,
                    shadowOffset: {
                      height: 1,
                      width: 1,
                    },
                  }}
                >
                  <View
                    style={{
                      width: "45%",
                      borderRightWidth: 1,
                      borderColor: "#36454F",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Product", {
                          id: id,
                          photoUri: item.uri,
                          name: item.title,
                          description: item.description,
                          condition: item.condition,
                          price: item.price,
                          location: item.location,
                        });
                      }}
                      style={{ flexDirection: "row" }}
                    >
                      <Image
                        source={{
                          uri: item.uri,
                        }}
                        style={{
                          width: 155,
                          height: 150,
                          borderRadius: 10,
                          margin: 10,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ width: "55%" }}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Product", {
                          id: id,
                          photoUri: item.uri,
                          name: item.title,
                          description: item.description,
                          condition: item.condition,
                          price: item.price,
                          location: item.location,
                        });
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "600",
                          marginTop: 25,
                          marginLeft: 10,
                          fontSize: 20,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          marginTop: 5,
                          marginLeft: 10,
                          color: "grey",
                        }}
                      >
                        {item.description}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "600",
                          marginTop: 5,
                          marginLeft: 10,
                          color: "#1DA1F2",
                        }}
                      >
                        Rs. {item.price}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "600",
                          marginTop: 5,
                          marginLeft: 10,
                        }}
                      >
                        Condition:{" "}
                        <Text style={{ color: "#1DA1F2", fontSize: 16 }}>
                          {item.condition}
                        </Text>
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default inventory;
