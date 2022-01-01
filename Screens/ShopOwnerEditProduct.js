import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  SafeAreaView,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

export default function ShopOwnerEditProduct({ navigation, route }) {
  const Productid = route.params.productId;
  const Accountid = route.params.AccountID;
  const CustomerProductID = route.params.customerProductID;
  const user = route.params.user;
  const firstname = route.params.firstname;
  const lastname = route.params.lastname;

  const [pickerResult, setpickerResult] = useState({});
  const [price, setprice] = useState();
  const [title, settitle] = useState();
  const [condition, setcondition] = useState();
  const [description, setdescription] = useState();
  const [location, setlocation] = useState();

  const firebaseUrl =
    "https://reactnativefirstdatabase-a7b2b-default-rtdb.firebaseio.com/";

  const updatedata = () => {
    console.log("Updating");

    var requestoptions = {
      method: "PATCH",
      body: JSON.stringify({
        uri: pickerResult.uri,
        price: price,
        condition: condition,
        title: title,
        description: description,
        location: location,
      }),
    };

    fetch(
      `${firebaseUrl}/ProductDetails/${CustomerProductID}.json`,
      requestoptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    fetch(
      `${firebaseUrl}/ShopOwner/${Accountid}/${Productid}.json`,
      requestoptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    navigation.navigate("Dashboard", {
      id: Accountid,
      user: user,
      firstname: firstname,
      lastname: lastname,
    });
  };

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync();
    // console.log(result);

    setpickerResult(result);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View>
            <TouchableOpacity
              onPress={openImagePickerAsync}
              style={styles.button}
            >
              <Text style={styles.buttonText}>+ Add image</Text>
            </TouchableOpacity>

            <View style={{ alignItems: "center" }}>
              <Image
                source={{
                  uri: pickerResult.uri,
                }}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
            </View>

            <TextInput
              style={styles.inputText}
              placeholder="Price"
              keyboardType={"phone-pad"}
              onChangeText={(val) => setprice(val)}
            />

            <TextInput
              style={styles.inputText}
              placeholder="Product Condition"
              onChangeText={(val) => setcondition(val)}
            />

            <TextInput
              style={styles.inputText}
              placeholder="Title"
              onChangeText={(val) => settitle(val)}
            />

            <TextInput
              style={styles.inputText}
              placeholder="Description"
              onChangeText={(val) => setdescription(val)}
            />

            <TextInput
              style={styles.inputText}
              placeholder="Location"
              onChangeText={(val) => setlocation(val)}
            />

            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "#1DA1F2",
                width: "90%",
                alignItems: "center",
                borderRadius: "50%",
                marginLeft: "5%",
                marginRight: "5%",
                marginTop: 15,
              }}
              onPress={() => {
                if (
                  price !== "" &&
                  title !== "" &&
                  condition !== "" &&
                  description !== "" &&
                  location !== "" &&
                  Object.keys(pickerResult).length !== 0
                ) {
                  updatedata();
                  alert("Ad Updated Successfully");
                } else {
                  alert("Fill All Fields");
                }

                console.log(pickerResult);
              }}
            >
              <Text style={{ color: "white", fontWeight: "500" }}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    // <View>
    //   <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
    //     <Text style={styles.buttonText}>+ Pick a photo</Text>
    //   </TouchableOpacity>

    //   <View style={{ alignItems: "center" }}>
    //     <Image
    //       source={{
    //         uri: pickerResult.uri,
    //       }}
    //       style={{ width: 100, height: 100, borderRadius: 10 }}
    //     />
    //   </View>
    //   <Text>Price *</Text>

    //   <TextInput
    //     style={styles.inputText}
    //     placeholder="Enter Price"
    //     keyboardType={"phone-pad"}
    //     onChangeText={(val) => setprice(val)}
    //   />
    //   <Text>Condition</Text>
    //   <TextInput
    //     style={styles.inputText}
    //     placeholder="Enter Product Condition"
    //     onChangeText={(val) => setcondition(val)}
    //   />
    //   <Text>Ad Title</Text>
    //   <TextInput
    //     style={styles.inputText}
    //     placeholder="Enter Ad Title"
    //     onChangeText={(val) => settitle(val)}
    //   />
    //   <Text>Describe what you are selling</Text>
    //   <TextInput
    //     style={styles.inputText}
    //     placeholder="Enter Product description"
    //     onChangeText={(val) => setdescription(val)}
    //   />
    //   <Text>Location</Text>
    //   <TextInput
    //     style={styles.inputText}
    //     placeholder="Enter Location"
    //     onChangeText={(val) => setlocation(val)}
    //   />

    //   <Button title="Post Add" onPress={updatedata} />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    marginTop: -100,
    flex: 1,
    justifyContent: "space-around",
  },

  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
  button: {
    backgroundColor: "#1DA1F2",
    padding: 40,
    borderRadius: 20,
    alignItems: "center",
    margin: 10,
  },
  inputText: {
    padding: 20,
    borderBottomWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 7,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    // button: {
    //   backgroundColor: "#7bd3f7",
    //   padding: 40,
    //   borderRadius: 20,
    //   alignItems: "center",
    //   margin: 20,
    // },
    // inputText: {
    //   padding: 10,
    //   borderWidth: 1,
    // },
    // buttonText: {
    //   fontSize: 20,
    //   color: "black",
  },
});
