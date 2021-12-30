import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  ActivityIndicator,
  FlatList,
} from "react-native";

const customerDashboard = ({ navigation, route }) => {
  const id = route.params.id;
  const user = route.params.user;
  console.log(id);
  return (
    <View>
      <Text>Welcome to customer Dashboard</Text>
      <Button
        title="View Inventory"
        onPress={() => {
          navigation.navigate("Inventory", { id: id });
        }}
      />

      <Button
        title="View Cart"
        onPress={() => {
          navigation.navigate("Cart", { id: id });
        }}
      />

      <Button
        title="Setting"
        onPress={() => {
          navigation.navigate("Setting", { id: id, user: user });
        }}
      />
    </View>
  );
};

export default customerDashboard;
