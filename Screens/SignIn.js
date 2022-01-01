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
import Icon from "react-native-vector-icons/FontAwesome";

const SignIn = ({ navigation, route }) => {
  const user = route.params.user;

  const [email, setemail] = React.useState();
  const [password, setpassword] = React.useState();

  const firebaseUrl =
    "https://reactnativefirstdatabase-a7b2b-default-rtdb.firebaseio.com/";

  const loaddata = async () => {
    if (user == "ShopOwner") {
      const response = await fetch(`${firebaseUrl}/${user}.json`);
      const data = await response.json();
      // We use for loop to know which person login and through it we know randomly generated id and other credentials
      var cond = false;
      for (key in data) {
        if (data[key].email == email && data[key].password == password) {
          let id = key;

          cond = false;

          setemail("");
          setpassword("");
          navigation.navigate("SelectUI", {
            id: id,
            user: user,
            firstname: data[key].firstname,
            lastname: data[key].lastname,
          });

          break;
        } else {
          cond = true;
        }
      }
      console.log(cond);

      if (cond) {
        alert("Invalid Email or Password");
      }
    } else if (user == "Client") {
      const response = await fetch(`${firebaseUrl}/${user}.json`);
      const data = await response.json();
      console.log("I am in client");
      var cond = false;
      for (key in data) {
        if (data[key].email == email && data[key].password == password) {
          let id = key;
          cond = false;
          setemail("");
          setpassword("");
          navigation.navigate("SelectUI2", {
            id: id,
            user: user,
            firstname: data[key].firstname,
            lastname: data[key].lastname,
          });
          break;
        } else {
          cond = true;
        }
      }
      if (cond) {
        alert("Invalid Email or Password");
      }
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
        <Text style={{ fontSize: 20, fontWeight: "800", marginTop: 40 }}>
          {user} Login
        </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Email"
          value={email}
          onChangeText={(value) => setemail(value)}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.inputText}
          placeholder="Enter Password"
          value={password}
          onChangeText={(value) => setpassword(value)}
        />
      </View>

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: "#1DA1F2",
            width: "90%",
            alignItems: "center",
            borderRadius: "50%",
            margin: 10,
          }}
          onPress={() => {
            loaddata();
          }}
        >
          <Text style={{ color: "white", fontWeight: "500" }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert("Under Development");
          }}
        >
          <Text style={{ color: "#1DA1F2" }}>Forgetten Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Sign up", { user: user });
          }}
        >
          <Text>
            {"\n"} Don't have an account?
            <Text style={{ color: "#1DA1F2" }}> SignUp</Text>{" "}
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
    marginTop: 10,
  },
});

export default SignIn;
