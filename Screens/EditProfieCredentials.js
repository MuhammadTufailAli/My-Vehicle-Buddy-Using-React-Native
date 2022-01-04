import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
const validator = require("validator");
import Icon from "react-native-vector-icons/FontAwesome";

const EditProfile = ({ navigation, route }) => {
  const id = route.params.id;
  const user = route.params.user;

  const [firstname, setfirstname] = React.useState("");
  const [lastname, setlastname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [confirmpassword, setconfirmpassword] = React.useState("");

  const firebaseUrl =
    "https://reactnativefirstdatabase-a7b2b-default-rtdb.firebaseio.com/";
  //We Take username and if the name is shopowner we update shopowner profile credintail and if it is user then we update user profile credintail
  const update = () => {
    if (user == "ShopOwner") {
      var requestoptions = {
        method: "PATCH",
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        }),
      };

      fetch(`${firebaseUrl}/${user}/${id}.json`, requestoptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } else if (user == "Client") {
      var requestoptions = {
        method: "PATCH",
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        }),
      };

      fetch(`${firebaseUrl}/${user}/${id}.json`, requestoptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  };

  return (
    <View>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Icon
          style={{ margin: 10, justifyContent: "center", color: "#1DA1F2" }}
          name="car"
          size={25}
        />
        <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 40 }}>
          {user} Edit Profile
        </Text>
      </View>

      <TextInput
        style={styles.inputText}
        placeholder="Enter First Name"
        onChangeText={(value) => setfirstname(value)}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Enter Last Name"
        onChangeText={(value) => setlastname(value)}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Enter Email"
        onChangeText={(value) => setemail(value)}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Enter Password"
        onChangeText={(value) => setpassword(value)}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Enter Confirmed Password"
        onChangeText={(value) => setconfirmpassword(value)}
      />
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: "#1DA1F2",
            width: "90%",
            alignItems: "center",
            borderRadius: "50%",
            marginTop: 10,
          }}
          onPress={() => {
            if (
              firstname != "" &&
              lastname != "" &&
              email != "" &&
              password != "" &&
              confirmpassword != ""
            ) {
              if (validator.isEmail(email)) {
                if (password.length > 6) {
                  if (password == confirmpassword) {
                    update();
                    navigation.navigate("Sign in", { user: user });
                  } else {
                    alert("Confirm password does not match");
                  }
                } else {
                  alert("Password must be greater than 6");
                }
              } else {
                alert("Invalid Email");
              }
            } else {
              alert("Enter all Fields");
            }
          }}
        >
          <Text style={{ color: "white", fontWeight: "500" }}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputText: {
    padding: 15,
    borderBottomWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 7,
  },
});

export default EditProfile;
