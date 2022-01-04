import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SelectUi2 = ({ navigation, route }) => (
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
            navigation.navigate("Buy and Sell");
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#f0f0f0",
            }}
          >
            Soban UI{" "}
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
            navigation.navigate("Customer Dashboard", {
              id: route.params.id,
              user: route.params.user,
              firstname: route.params.firstname,
              lastname: route.params.lastname,
            });
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#f0f0f0",
            }}
          >
            Tufail UI
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

export default SelectUi2;
