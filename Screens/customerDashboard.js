import React, { useState, useEffect } from "react";

import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeClient from "./homeClient";
import Inventory from "./inventory";
import Cart from "./cart";
import EditProfile from "./EditProfieCredentials";

const Tab = createBottomTabNavigator();
//route have id,user,firstname,lastname
const dashboard = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Edit Profile") {
            iconName = focused ? "settings-sharp" : "settings-sharp";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Cart") {
            return (
              <FontAwesome5 name="cart-arrow-down" size={size} color={color} />
            );
          } else if (route.name === "Inventory") {
            iconName = focused ? "profile" : "ios-list";
            return <MaterialIcons name="inventory" size={size} color={color} />;
          }

          // You can return any component that you like here!
        },
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "black",
      })}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        options={{ unmountOnBlur: true }}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
      >
        {(props) => <HomeClient {...props} extraData={route.params} />}
      </Tab.Screen>
      <Tab.Screen
        name="Inventory"
        options={{ unmountOnBlur: true }}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
      >
        {(props) => <Inventory {...props} route={route} />}
      </Tab.Screen>

      <Tab.Screen
        name="Cart"
        options={{ unmountOnBlur: true }}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
      >
        {(props) => <Cart {...props} route={route} />}
      </Tab.Screen>
      <Tab.Screen
        name="Edit Profile"
        options={{ unmountOnBlur: true }}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
      >
        {(props) => <EditProfile {...props} route={route} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default dashboard;
