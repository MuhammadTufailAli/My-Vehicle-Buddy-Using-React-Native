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

function Cart({ navigation, route }) {
  const id = route.params.id;
  const [array, setarray] = useState([]);
  const [arrayOfID, setarrayofID] = useState([]);
  const [getcondition, setcondition] = React.useState(true);

  const deleteData = (index) => {
    const subid = arrayOfID[index];

    var requestOptions = {
      method: "DELETE",
    };

    fetch(`${firebaseUrl}/Client/${id}/${subid}.json`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log("Delete Response:", result))
      .catch((error) => console.log("error", error));
  };

  const getproduct = () => {
    fetch(`${firebaseUrl}/Client/${id}.json`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responsejson) => {
        let samplearray = [];
        let samplearrayOfID = [];
        for (key in responsejson) {
          if (array.length == 0) {
            samplearray.push(responsejson[key]);
            samplearrayOfID.push(key);
          } else {
            samplearray.push(responsejson[key]);
            samplearrayOfID.push(key);
          }
        }
        setarrayofID(samplearrayOfID);
        setarray(samplearray);

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
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          alignItems: "center",
          marginBottom: 5,
          paddingBottom: 5,
          borderBottomWidth: 0.5,
          borderColor: "grey",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "600" }}>
          My Cart{" "}
          <Icon
            style={{
              justifyContent: "center",
              color: "#1DA1F2",
              marginRight: 5,
            }}
            name="shopping-cart"
            size={25}
          />
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", margin: 10, flex: 1 }}>
          <FlatList
            data={array}
            renderItem={({ item, index }) => {
              if (typeof item === "object") {
                return (
                  <View
                    elevation={5}
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#DCDCDC",
                      borderRadius: 15,
                      marginBottom: 10,
                      shadowColor: "#000000",
                      shadowOpacity: 0.4,
                      shadowRadius: 1,
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
                        borderColor: "white",
                      }}
                    >
                      <Image
                        source={{
                          uri: item.uri,
                        }}
                        style={{
                          width: 150,
                          height: 150,
                          borderRadius: 10,
                          margin: 10,
                        }}
                      />
                    </View>
                    <View style={{ width: "55%" }}>
                      <TouchableOpacity
                        onPress={() => {
                          deleteData(index);
                          console.log(array);
                          //We have to remove the item we pressed so we get index of it through flatlist index and we will get newarray when index and i of array are not same
                          const newarr = array.filter((item, i) => i != index);
                          setarray(newarr);

                          navigation.navigate("Cart", { id: id });
                        }}
                        style={{
                          alignSelf: "flex-end",
                          marginTop: 5,
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: "red",
                            fontSize: 18,
                            fontWeight: "bold",
                          }}
                        >
                          X
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontWeight: "600",
                          marginTop: 8,
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
                          fontWeight: "bold",
                          fontSize: 18,
                          marginTop: 5,
                          marginLeft: 10,
                          color: "#1DA1F2",
                        }}
                      >
                        Rs. {item.price}
                      </Text>
                    </View>
                  </View>
                );
              }
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Cart;
