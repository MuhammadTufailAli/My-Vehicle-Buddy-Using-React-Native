import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeShopOwner from "./homeShopOwner";
import AddProduct from "./AddProduct";
import ShopeOwnerViewProduct from "./ShopeOwnerViewProduct";
import EditProfile from "./EditProfieCredentials";

const Tab = createBottomTabNavigator();

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
          } else if (route.name === "SELL") {
            return <AntDesign name="pluscircle" size={size} color={color} />;
          } else if (route.name === "Profile") {
            iconName = focused ? "profile" : "ios-list";
            return (
              <MaterialCommunityIcons
                name="face-profile"
                size={size}
                color={color}
              />
            );
          }

          // You can return any component that you like here!
        },
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "black",
      })}
      initialRouteName="Home"
      // screenOptions={{
      //   headerShown: false,
      // }}
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
        name="SELL"
        options={{ unmountOnBlur: true }}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
      >
        {(props) => <AddProduct {...props} extraData={route.params} />}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{ unmountOnBlur: true }}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
      >
        {(props) => <ShopeOwnerViewProduct {...props} route={route} />}
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
