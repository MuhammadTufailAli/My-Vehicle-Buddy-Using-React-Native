import * as React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import PostAdd from "./PostAdd";
import ViewAd from "./ViewAd";
import cars from "./cars";

const Stack = createStackNavigator();
function Dashboardd() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: `#2D4263`,
          },
          headerRight: () => (
            <Icon
              name="user"
              size={28}
              style={{ marginRight: 10 }}
              color="#fff"
            />
          ),
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="View Ads"
          component={ViewAd}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="View Car"
          component={cars}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

const SobanScreen = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      options={{}}
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: `#2D4263`,
        },
        headerRight: () => (
          <Icon name="car" size={28} style={{ marginRight: 10 }} color="#fff" />
        ),

        headerTintColor: "#fff",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Post Ad") {
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
          } else if (route.name === "View Ads") {
            iconName = focused ? "ios-eye" : "ios-eye-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: `#5584AC`,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Post Ad" component={PostAdd} />
      <Tab.Screen name="View Ads" component={Dashboardd} />
    </Tab.Navigator>
  );
};

export default SobanScreen;
