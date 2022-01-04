import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "./Screens/IntroScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUpPage";
import SelectUi from "./Screens/SelectUi";
import SobanScreen from "./Screens/SobanScreen";
import dashboard from "./Screens/dashboard";
import HomeShopOwner from "./Screens/homeShopOwner";
import AddProduct from "./Screens/AddProduct";
import ShopeOwnerViewProduct from "./Screens/ShopeOwnerViewProduct";
import ShopOwnerEditProduct from "./Screens/ShopOwnerEditProduct";
import EditProfile from "./Screens/EditProfieCredentials";
import SelectUi2 from "./Screens/SelectUi2";
import customerDashboard from "./Screens/customerDashboard";
import inventory from "./Screens/inventory";
import ProductScreen from "./Screens/productScreen";
import Cart from "./Screens/cart";
import AdminSignin from "./Screens/AdminSignin";
import AdminScreen from "./Screens/AdminScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Introduction" component={IntroScreen} />
        <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
        <Stack.Screen name="Sign in" component={SignIn} />
        <Stack.Screen name="Sign up" component={SignUp} />
        <Stack.Screen name="SelectUI" component={SelectUi} />
        <Stack.Screen name="Buy and Sell" component={SobanScreen} />
        <Stack.Screen name="Dashboard" component={dashboard} />
        <Stack.Screen name="Home" component={HomeShopOwner} />
        <Stack.Screen name="Add Product" component={AddProduct} />
        <Stack.Screen name="View Product" component={ShopeOwnerViewProduct} />
        <Stack.Screen name="Edit Product" component={ShopOwnerEditProduct} />
        <Stack.Screen name="Setting" component={EditProfile} />
        <Stack.Screen name="SelectUI2" component={SelectUi2} />
        <Stack.Screen name="Customer Dashboard" component={customerDashboard} />
        <Stack.Screen name="Inventory" component={inventory} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="AdminSignin" component={AdminSignin} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  itemsWrapper: {
    paddingTop: 20,
    paddingHorizontal: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 7,
  },
  text: {
    maxWidth: "80%",
    fontSize: 17,
  },
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  date: {
    fontSize: 17,
  },
  itemLeft: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#F4BE2C",
    borderRadius: 5,
    opacity: 0.5,
    marginRight: 15,
  },
});
