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
            console.log("First add");
            samplearray.push(responsejson[key]);
            samplearrayOfID.push(key);
          } else {
            console.log("other addition");
            samplearray.push(responsejson[key]);
            samplearrayOfID.push(key);
          }
        }
        setarrayofID(samplearrayOfID);
        setarray(samplearray);

        console.log(array);
        console.log(samplearrayOfID);

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
          renderItem={({ item, index }) => {
            if (typeof item === "object") {
              return (
                <View style={{ flexDirection: "row" }}>
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
                  <Text style={{ margin: 10 }}>
                    {item.title}
                    {"\n"}
                    Rs. {item.price}
                    {"\n"}
                    Condition: {item.condition}
                  </Text>
                  <Button
                    title="Delete"
                    onPress={() => {
                      console.log(arrayOfID[index]);
                      deleteData(index);
                      console.log(array);
                      const newarr = array.filter((item, i) => i != index);
                      setarray(newarr);
                      console.log(newarr);
                      navigation.navigate("Cart", { id: id });
                    }}
                  />
                </View>
              );
            }
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

export default Cart;
