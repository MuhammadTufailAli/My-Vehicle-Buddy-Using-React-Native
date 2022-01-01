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

export default function AddProduct({ extraData }) {
  const id = extraData.id;
  console.log(id);
  const [pickerResult, setpickerResult] = useState({});
  const [price, setprice] = useState();
  const [title, settitle] = useState();
  const [condition, setcondition] = useState();
  const [description, setdescription] = useState();
  const [location, setlocation] = useState();

  const firebaseUrl =
    "https://reactnativefirstdatabase-a7b2b-default-rtdb.firebaseio.com/";

  const savedata = () => {
    console.log("Adding");

    var requestoptions = {
      method: "POST",
      body: JSON.stringify({
        uri: pickerResult.uri,
        price: price,
        condition: condition,
        title: title,
        description: description,
        location: location,
      }),
    };

    fetch(`${firebaseUrl}/ProductDetails.json`, requestoptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    fetch(`${firebaseUrl}/ShopOwner/${id}.json`, requestoptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
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
                  savedata();
                  alert("Successfully Posted Ad");
                } else {
                  alert("Fill All Fields");
                }

                console.log(pickerResult);
              }}
            >
              <Text style={{ color: "white", fontWeight: "500" }}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  },
});
