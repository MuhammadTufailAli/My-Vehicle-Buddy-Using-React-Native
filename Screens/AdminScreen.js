import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  ScrollView,
  Pressable,
  SafeAreaView,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Products from "./products";
import Owner from "./ShopOwner";
import Clients from "./Clients";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Icon
        name="info-circle"
        size={28}
        style={{ marginRight: 10 }}
        color="black"
      />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Welcome Admin!!</Text>
      <Text style={{ fontSize: 20, borderBottomWidth: 0.5 }}>
        Admin Can View /Delete:
      </Text>
      <Text style={{ fontSize: 18 }}>- Shop Owners</Text>
      <Text style={{ fontSize: 18 }}>- Cars</Text>
      <Text style={{ fontSize: 18 }}>- Users</Text>
      <Pressable
        onPress={() => navigation.navigate("Shop Owners")}
        style={{
          backgroundColor: "#4682b4",
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
          height: 90,
          width: 180,
          borderRadius: 40,
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 23,
            textAlign: "center",
            alignSelf: "center",
            margin: "auto",
          }}
        >
          Show Shop Owners
        </Text>
      </Pressable>
      <Pressable
        style={{
          backgroundColor: "#4682b4",
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
          height: 90,
          width: 180,
          borderRadius: 40,
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Show Cars")}
      >
        <Text
          style={{
            fontSize: 23,
            textAlign: "center",
            alignSelf: "center",
            margin: "auto",
          }}
        >
          Show Cars
        </Text>
      </Pressable>
      <Pressable
        style={{
          backgroundColor: "#4682b4",
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
          height: 90,
          width: 180,
          borderRadius: 40,
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Clients")}
      >
        <Text
          style={{
            fontSize: 23,
            textAlign: "center",
            alignSelf: "center",
            margin: "auto",
          }}
        >
          Show Clients
        </Text>
      </Pressable>
    </View>
  );
}

const Stack = createStackNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Shop Owners" component={Owner} />
        <Stack.Screen name="Show Cars" component={Products} />
        <Stack.Screen name="Clients" component={Clients} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
