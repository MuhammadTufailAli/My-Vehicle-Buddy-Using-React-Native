// import * as React from "react";
// import {
//   Button,
//   StyleSheet,
//   Text,
//   View,
//   ActivityIndicator,
//   FlatList,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const SelectUi = ({ navigation, route }) => {
//   console.log(route.params.user);
//   console.log(route.params.id);
//   return (
//     <SafeAreaView>
//       <Button
//         title="Soban Ui"
//         onPress={() => {
//           navigation.navigate("Buy and Sell");
//         }}
//       />
//       <Button
//         title="Tufail Ui"
// onPress={() => {
//   navigation.navigate("Dashboard", {
//     id: route.params.id,
//     user: route.params.user,
//     firstname: route.params.firstname,
//     lastname: route.params.lastname,
//   });
// }}
//       />
//     </SafeAreaView>
//   );
// };

// export default SelectUi;

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

const SelectUi = ({ navigation, route }) => (
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
            navigation.navigate("Dashboard", {
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

export default SelectUi;
