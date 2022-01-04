import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";

export default function AddProduct() {
  const [pickerResult, setpickerResult] = useState({});
  const [getname, setname] = React.useState("");
  const [gettype, settype] = React.useState("");
  const [getmodel, setmodel] = React.useState("");
  const [getengine, setengine] = React.useState("");
  const [getmake, setmake] = React.useState("");
  const [getphotos, setphotos] = React.useState();
  const [getprice, setprice] = React.useState();

  const firebaseUrl =
    "https://reactnativefirstdatabase-a7b2b-default-rtdb.firebaseio.com/";

  const savedata = () => {
    var requestoptions = {
      method: "POST",
      body: JSON.stringify({
        uri: pickerResult.uri,
        name: getname,
        type: gettype,
        model: getmodel,
        engine: getengine,
        make: getmake,
        price: getprice,
      }),
    };

    fetch(`${firebaseUrl}/CarDetails.json`, requestoptions)
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
    setpickerResult(result);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Icon name="plus" size={24} style={{}} color="#fff" />
          <Text style={styles.buttonText}>Upload photo</Text>
        </TouchableOpacity>

        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: pickerResult.uri,
            }}
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
        </View>

        <View style={{ margin: 5, padding: 18, marginTop: 18 }}>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 15,
              width: "90%",
              alignSelf: "center",
              marginBottom: 20,
            }}
            placeholder=" Car Name (e.g. Altis) "
            onChangeText={setname}
          />
          <TextInput
            style={{
              borderWidth: 1,
              padding: 15,
              width: "90%",
              alignSelf: "center",
              marginBottom: 10,
            }}
            placeholder=" Car Type (e.g. Sedan) "
            onChangeText={settype}
          />

          <TextInput
            style={{
              borderWidth: 1,
              padding: 15,
              width: "90%",
              alignSelf: "center",
              marginBottom: 20,
            }}
            placeholder=" Car Model (e.g. 2010) "
            onChangeText={setmodel}
          />
          <TextInput
            style={{
              borderWidth: 1,
              padding: 15,
              width: "90%",
              alignSelf: "center",
              marginBottom: 20,
            }}
            placeholder=" Engine Type (e.g. Petrol) "
            onChangeText={setengine}
          />
          <TextInput
            style={{
              borderWidth: 1,
              padding: 15,
              width: "90%",
              alignSelf: "center",
              marginBottom: 20,
            }}
            placeholder=" Make (e.g. Toyotta) "
            onChangeText={setmake}
          />
          <TextInput
            style={{
              borderWidth: 1,
              padding: 15,
              width: "90%",
              alignSelf: "center",
              marginBottom: 20,
            }}
            placeholder="Price "
            onChangeText={setprice}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: `#4682b4`,
            height: 60,
            width: 60,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            borderRadius: 50,
            marginLeft: 220,
            marginTop: 10,
            marginBottom: 20,
          }}
          onPress={savedata}
        >
          <Icon name="plus" size={24} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#778899",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    margin: 20,
  },

  buttonText: {
    fontSize: 20,
    color: "black",
  },
});
