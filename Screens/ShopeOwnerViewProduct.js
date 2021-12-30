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
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddProduct from "./AddProduct";
import EditProfile from "./EditProfieCredentials";
const firebaseUrl =
  "https://reactnativefirstdatabase-a7b2b-default-rtdb.firebaseio.com/";

const Tab = createBottomTabNavigator();

function ShopeOwnerViewProduct({ extraData, navigation }) {
  const subid = extraData.id;
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
      console.log(AllProduct[key].uri);
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
                  <TouchableOpacity>
                    <Button
                      title="Delete"
                      onPress={() => {
                        deleteData(index, item.uri);

                        const newarr = array.filter((item, i) => i != index);
                        setarray(newarr);
                      }}
                    />
                    <Button
                      title="Edit"
                      onPress={() => {
                        //We have to update both client and shopowner product so we need client product id to update it we get it from under method
                        for (key in AllProduct) {
                          if (AllProduct[key].uri == item.uri) {
                            let tempId = arrayOfID[index];

                            navigation.navigate("Edit Product", {
                              productId: tempId,
                              AccountID: subid,
                              customerProductID: key,
                              user: extraData.user,
                            });
                          }
                        }
                      }}
                    />
                  </TouchableOpacity>
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

export default ShopeOwnerViewProduct;
