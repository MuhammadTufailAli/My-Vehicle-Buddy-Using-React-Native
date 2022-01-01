import * as React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";

const IntroScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#1DA1F2", height: "100%" }}>
      <View style={{ alignItems: "center" }}>
        <Icon
          style={{ margin: 10, justifyContent: "center", color: "black" }}
          name="car"
          size={30}
        />
        <Text
          style={{
            marginTop: "25%",
            fontSize: 26,
            fontWeight: "600",
            color: "#f0f0f0",
          }}
        >
          My Vehicle Buddy
        </Text>

        <Image
          style={{ width: 300, height: 300, margin: 20, color: "white" }}
          source={require("../assets/car.png")}
        />
        <Text
          style={{
            marginTop: 0,
            fontSize: 26,
            fontWeight: "600",
            color: "#f0f0f0",
          }}
        >
          Place to Buy & Sell
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Welcome Screen");
          }}
          style={{
            marginTop: "40%",
            padding: 14,
            backgroundColor: "black",
            width: "80%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#f0f0f0",
            }}
          >
            Get Started
            <Icon style={{ marginLeft: 10 }} name="arrow-right" size={15} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default IntroScreen;
