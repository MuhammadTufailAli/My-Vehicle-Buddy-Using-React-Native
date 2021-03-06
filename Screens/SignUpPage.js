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
//Take user from Signin and make account of that particular user there is no need of if statement here
//It also have Email Validation
const SignUp = ({ navigation, route }) => {
  const user = route.params.user;

  const [firstname, setfirstname] = React.useState("");
  const [lastname, setlastname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [confirmpassword, setconfirmpassword] = React.useState("");

  const firebaseUrl =
    "https://reactnativefirstdatabase-a7b2b-default-rtdb.firebaseio.com/";

  const savedata = () => {
    var requestoptions = {
      method: "POST",
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      }),
    };

    fetch(`${firebaseUrl}/${user}.json`, requestoptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
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
          {user} SignUp
        </Text>
      </View>

      <TextInput
        style={styles.inputText}
        placeholder="First Name"
        onChangeText={(value) => setfirstname(value)}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Last Name"
        onChangeText={(value) => setlastname(value)}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Email E.g name@account.com"
        onChangeText={(value) => setemail(value)}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Password must be greater than 6 letters"
        onChangeText={(value) => setpassword(value)}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Confirmed Password"
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
                    savedata();
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
          <Text style={{ color: "white", fontWeight: "500" }}>SignUp</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 7 }}
          onPress={() => {
            navigation.navigate("Sign in", { user: user });
          }}
        >
          <Text>
            {" "}
            Already have an account?{" "}
            <Text style={{ color: "#1DA1F2" }}> SignIn</Text>
          </Text>
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

export default SignUp;
