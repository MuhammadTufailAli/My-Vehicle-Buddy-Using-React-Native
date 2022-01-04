import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

export default ({ navigation }) => {
  const [array, setarray] = useState([]);
  const [getcondition, setcondition] = React.useState(true);
  const [arrayOfID, setarrayofID] = useState([]);

  const deleteData = (index) => {
    const subid = arrayOfID[index];

    var requestOptions = {
      method: "DELETE",
    };
    fetch(
      `https://reactnativefirstdatabase-a7b2b-default-rtdb.firebaseio.com//CarDetails/${subid}.json`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log("Delete Response:", result))
      .catch((error) => console.log("error", error));
  };
  const getproduct = () => {
    fetch(
      `https://reactnativefirstdatabase-a7b2b-default-rtdb.firebaseio.com/ShopOwner.json`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((responsejson) => {
        let samplearray = [];
        let samplearrayID = [];
        for (key in responsejson) {
          if (array.length == 0) {
            samplearray.push(responsejson[key]);
            samplearrayID.push(key);
          } else {
            samplearray.push(responsejson[key]);
            samplearrayID.push(key);
          }
        }
        setarray(samplearray);
        setarrayofID(samplearrayID);

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
          borderBottomWidth: 0.5,
          borderColor: "grey",
          paddingBottom: 5,
        }}
      >
        <Icon
          style={{ justifyContent: "center", color: "#808080" }}
          name="home"
          size={25}
        />
      </View>
      <View>
        <View style={{ margin: 10 }}>
          <FlatList
            data={array}
            renderItem={({ item, index }) => {
              return (
                <View style={{ alignItems: "center", marginBottom: 10 }}>
                  <View
                    style={{
                      backgroundColor: "#cdcdcd",
                      height: 150,
                      width: 300,
                      borderWidth: 1,
                      marginLeft: 8,
                      borderRadius: 10,
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>First Name:</Text>
                    <Text>{item.firstname}</Text>
                    <Text style={{ fontWeight: "bold" }}>Last Name:</Text>
                    <Text>{item.lastname}</Text>
                    <Text style={{ fontWeight: "bold" }}>Email:</Text>
                    <Text>{item.email}</Text>
                    <View style={{ borderTopWidth: 1, marginLeft: 200 }}>
                      <TouchableOpacity
                        onPress={() => {
                          deleteData(index);
                          const newarr = array.filter((item, i) => i != index);
                          setarray(newarr);
                        }}
                      >
                        <Text style={{ color: "red" }}>Remove-X</Text>
                      </TouchableOpacity>
                    </View>
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
};
