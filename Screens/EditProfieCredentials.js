import * as React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

const EditProfile = ({ navigation, extraData }) => {
  const user = extraData.user;
  const id = extraData.id;
  console.log(user);
  const [firstname, setfirstname] = React.useState();
  const [lastname, setlastname] = React.useState();
  const [email, setemail] = React.useState();
  const [password, setpassword] = React.useState();
  const [confirmpassword, setconfirmpassword] = React.useState();

  const firebaseUrl =
    "https://reactnativefirstdatabase-a7b2b-default-rtdb.firebaseio.com/";

  const update = () => {
    console.log("Adding");
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
        <Text>My Vehicle Buddy</Text>
      </View>
      <Text>First Name</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Enter First Name"
        onChangeText={(value) => setfirstname(value)}
      />
      <Text>Last Name</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Enter Last Name"
        onChangeText={(value) => setlastname(value)}
      />
      <Text>Email</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Enter Email"
        onChangeText={(value) => setemail(value)}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Enter Password"
        onChangeText={(value) => setpassword(value)}
      />
      <Text>Confirm Password</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Enter Confirmed Password"
        onChangeText={(value) => setconfirmpassword(value)}
      />
      <View style={{ alignItems: "center" }}>
        <Button
          title="Submit"
          onPress={() => {
            update();
            navigation.navigate("Sign in", { user: user });
          }}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Sign in");
          }}
        >
          <Text>{"\n"} Already have an account? SignIn</Text>
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
    padding: 10,
    borderWidth: 1,
  },
});

export default EditProfile;
