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
  TabBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddProduct from "./AddProduct";
import EditProfile from "./EditProfieCredentials";
import ShopeOwnerViewProduct from "./ShopeOwnerViewProduct";
import HomeShopOwner from "./homeShopOwner";

const firebaseUrl =
  "https://reactnativefirstdatabase-a7b2b-default-rtdb.firebaseio.com/";

const Tab = createBottomTabNavigator();

const dashboard = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{ unmountOnBlur: true }}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
      >
        {(props) => <HomeShopOwner {...props} extraData={route.params} />}
      </Tab.Screen>

      <Tab.Screen
        name="My Products"
        options={{ unmountOnBlur: true }}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
      >
        {(props) => (
          <ShopeOwnerViewProduct {...props} extraData={route.params} />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Add Product"
        options={{ unmountOnBlur: true }}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
      >
        {(props) => <AddProduct {...props} extraData={route.params} />}
      </Tab.Screen>
      <Tab.Screen
        name="Setting"
        options={{ unmountOnBlur: true }}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
      >
        {(props) => <EditProfile {...props} extraData={route.params} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default dashboard;
