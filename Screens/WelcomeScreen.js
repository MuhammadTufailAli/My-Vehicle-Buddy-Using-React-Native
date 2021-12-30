import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground
      source={require("../assets/background2.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            padding: 13,
            backgroundColor: "#1DA1F2",
            alignItems: "center",
            borderRadius: "50%",

            width: "55%",
            margin: 10,
          }}
          onPress={() => {
            navigation.navigate("Sign in", { user: "ShopOwner" });
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#f0f0f0",
            }}
          >
            Login As Shop Owner{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 13,
            backgroundColor: "#1DA1F2",
            alignItems: "center",
            borderRadius: "50%",
            width: "55%",

            margin: 10,
          }}
          onPress={() => {
            navigation.navigate("Sign in", { user: "Client" });
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#f0f0f0",
            }}
          >
            Login AS Customer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 13,
            margin: 10,
            backgroundColor: "#1DA1F2",
            alignItems: "center",
            borderRadius: "50%",

            width: "55%",
          }}
          onPress={() => {
            alert("Under Development");
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#f0f0f0",
            }}
          >
            Login As Admin
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default WelcomeScreen;
