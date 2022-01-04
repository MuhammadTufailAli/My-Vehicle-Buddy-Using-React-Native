import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SignIn = ({ navigation, route }) => {
  const [email, setemail] = React.useState();
  const [password, setpassword] = React.useState();

  return (
    <View>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Icon
          style={{ margin: 10, justifyContent: "center", color: "#1DA1F2" }}
          name="car"
          size={25}
        />
        <Text style={{ fontSize: 20, fontWeight: "800", marginTop: 40 }}>
          Admin Login
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
            if (email == "Sobanazhar@gmail.com") {
              if (password == "Sobanazhar") {
                navigation.navigate("AdminScreen");
              } else {
                alert("Incorrect Password");
              }
            } else {
              alert("Incorrect Email");
            }
          }}
        >
          <Text style={{ color: "white", fontWeight: "500" }}>Login</Text>
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
