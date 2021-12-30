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
    <View>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <FlatList
          data={array}
          renderItem={({ item }) => {
            return (
              <View>
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
                      width: 200,
                      height: 150,
                      borderRadius: 10,
                      margin: 10,
                    }}
                  />
                  <Text style={{ margin: 10 }}>
                    {item.title}
                    {"\n"}
                    Rs. {item.price}
                    {"\n"}
                    Condition: {item.condition}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

export default inventory;
