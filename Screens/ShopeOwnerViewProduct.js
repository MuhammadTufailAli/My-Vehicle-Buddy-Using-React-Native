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
import { Entypo } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddProduct from "./AddProduct";

import EditProfile from "./EditProfieCredentials";
const firebaseUrl =
  "https://reactnativefirstdatabase-a7b2b-default-rtdb.firebaseio.com/";

const Tab = createBottomTabNavigator();

function ShopeOwnerViewProduct({ route, navigation }) {
  const subid = route.params.id;
  let data = route;
  console.log(data);

  //array is to show only shopOwner product
  const [array, setarray] = useState([]);
  //All product is to get customer all products object
  const [AllProduct, setAllProduct] = useState({});
  //arrayOfID to get id of the product to be deleted
  const [arrayOfID, setarrayofID] = useState([]);
  //TO stop ActivityIndecator
  const [getcondition, setcondition] = useState(true);
  //We have to delete the product from shopowner and customer side so we get the shop owner id to be deleted from flatlist index and for customer we get
  //customer all data them we compare it with with uri of the product to be deleted when uri matches we take that key and delete anything which is present at that key

  const deleteData = (index, photoaddress) => {
    const id = arrayOfID[index];
    const Photoaddress = photoaddress;

    for (key in AllProduct) {
      if (AllProduct[key].uri == Photoaddress) {
        var requestOptions = {
          method: "DELETE",
        };
        fetch(`${firebaseUrl}/ProductDetails/${key}.json`, requestOptions)
          .then((response) => response.json())
          .then((result) => console.log("Delete Response:", result))
          .catch((error) => console.log("error", error));
      }
    }
    var requestOptions = {
      method: "DELETE",
    };

    fetch(`${firebaseUrl}/ShopOwner/${subid}/${id}.json`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log("Delete Response:", result))
      .catch((error) => console.log("error", error));
  };
  //function for showing only shopowner product
  const getproduct = () => {
    fetch(`${firebaseUrl}/ShopOwner/${subid}.json`, {
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
        setarray(samplearray);
        setarrayofID(samplearrayOfID);

        setcondition(false);
      })
      .catch((err) => {
        console.error(err);
      });
    // get all the product from customer so we can find the product we want to delete from customer inventory
    fetch(`${firebaseUrl}/ProductDetails.json`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responsejson) => {
        setAllProduct(responsejson);
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
      <View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 90, height: 90 }}
            source={require("../assets/profile.png")}
          />
          <Text style={{ marginTop: 10, color: "white" }}>
            @{route.params.firstname}
            {route.params.lastname}
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", marginLeft: "24%", marginTop: 20 }}
        >
          <Text style={{ marginRight: 15, fontSize: 18 }}>
            <Text style={{ fontWeight: "bold", color: "white" }}>
              {"\t"}219
            </Text>
            {"\n"}

            <Text style={{ color: "white" }}> Followers</Text>
          </Text>

          <Text style={{ marginTop: 10, marginRight: 25, color: "white" }}>
            |
          </Text>
          <Text style={{ marginRight: 15, fontSize: 18 }}>
            <Text style={{ fontWeight: "bold", color: "white" }}>999</Text>
            {"\n"}
            <Text style={{ color: "white" }}>Likes</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Setting", {
              id: route.params.id,
              user: route.params.user,
            });
          }}
          style={{
            width: "90%",
            borderWidth: 0.5,
            padding: 5,
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: 10,
            alignItems: "center",
            borderColor: "white",
          }}
        >
          <Text style={{ fontWeight: "600", color: "white" }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderColor: "white",
          borderTopWidth: 0.5,
          borderBottomWidth: 0.5,
          marginTop: 8,
          alignItems: "center",
        }}
      >
        <Text style={{ margin: 10, fontWeight: "600", color: "white" }}>
          My Products
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
                    elevation={6}
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
                        borderColor: "black",
                      }}
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
                    </View>
                    <View style={{ width: "55%" }}>
                      <TouchableOpacity
                        style={{
                          alignSelf: "flex-end",
                          marginTop: 3,
                          marginRight: 10,
                        }}
                        onPress={() => {
                          deleteData(index, item.uri);

                          const newarr = array.filter((item, i) => i != index);
                          setarray(newarr);
                        }}
                      >
                        <Entypo
                          style={{ marginTOp: 5 }}
                          name="circle-with-cross"
                          size={26}
                          color="red"
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontWeight: "bold",
                          marginTop: 4,
                          marginLeft: 10,
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
                          marginTop: 5,
                          marginLeft: 10,
                          color: "#1DA1F2",
                        }}
                      >
                        Rs. {item.price}
                      </Text>
                      <View
                        style={{
                          borderTopWidth: 1,
                          marginTop: 10,
                          borderColor: "black",
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            alignItems: "center",
                            padding: 10,
                            borderWidth: 0.5,
                            borderColor: "black",
                            margin: 10,
                          }}
                          onPress={() => {
                            //We have to update both client and shopowner product so we need client product id to update it we get it from under method
                            for (key in AllProduct) {
                              if (AllProduct[key].uri == item.uri) {
                                let tempId = arrayOfID[index];

                                navigation.navigate("Edit Product", {
                                  productId: tempId,
                                  AccountID: subid,
                                  customerProductID: key,
                                  user: route.params.user,
                                  firstname: route.params.firstname,
                                  lastname: route.params.lastname,
                                });
                              }
                            }
                          }}
                        >
                          <Text style={{ fontWeight: "600" }}>Edit</Text>
                        </TouchableOpacity>
                      </View>
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

export default ShopeOwnerViewProduct;
