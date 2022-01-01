import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

const HomeShopOwner = ({ navigation, extraData }) => {
  const [getdata, setdata] = React.useState([]);
  const [getcondition, setcondition] = React.useState(true);

  const getcovid = () => {
    fetch(`https://covid-19-data.p.rapidapi.com/country?name=Pakistan`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "027914bd19mshe814f892dfb4639p148750jsnd2d63ac26064",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setdata(responseJson);
        setcondition(false);
        console.log("I am in covid");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    console.log("JII");

    getcovid();
  }, []);

  if (getcondition) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />

        <Text>Waiting for response</Text>
      </View>
    );
  }

  return (
    <View style={{ marginTop: "11%" }}>
      <View
        style={{
          alignItems: "center",
          borderBottomWidth: 0.5,
          borderColor: "grey",
        }}
      >
        <Text style={{ fontSize: 28, fontWeight: "600", color: "#1DA1F2" }}>
          {" "}
          Welcome {extraData.firstname} {extraData.lastname}
        </Text>
      </View>

      <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
        You are ShopOwner Of{" "}
      </Text>
      <View style={{ alignItems: "center", marginTop: 5, marginLeft: 5 }}>
        <Text
          style={{
            color: "#1DA1F2",
            fontWeight: "600",
            fontSize: 24,
          }}
        >
          MY VEHICHLE BUDDY
        </Text>
      </View>
      <Text
        style={{
          marginTop: 10,
          marginLeft: 5,
          fontSize: 24,
          color: "#1DA1F2",
          fontWeight: "500",
        }}
      >
        Things you can do:
      </Text>
      <Text style={{ marginTop: 8, fontSize: 18, marginLeft: 5 }}>
        1) Post an Ad
      </Text>
      <Text style={{ marginTop: 8, fontSize: 18, marginLeft: 5 }}>
        2) View your Ad
      </Text>
      <Text style={{ marginTop: 8, fontSize: 18, marginLeft: 5 }}>
        3) Edit your Ad
      </Text>
      <Text style={{ marginTop: 8, fontSize: 18, marginLeft: 5 }}>
        4) Delete your Ad
      </Text>
      <Text style={{ marginTop: 8, fontSize: 18, marginLeft: 5 }}>
        5) Update your profile credentials
      </Text>
      <Text
        style={{
          marginTop: 10,
          marginLeft: 5,
          fontSize: 22,
          color: "#1DA1F2",
          fontWeight: "500",
        }}
      >
        Why you should use our App:
      </Text>
      <Text style={{ marginTop: 8, fontSize: 18, marginLeft: 5 }}>
        <Text style={{ color: "red" }}>Covid</Text> Stats in Pakistan
      </Text>
      <Text style={{ marginTop: 8, fontSize: 18, marginLeft: 5 }}>
        Confirmed Cases:{" "}
        <Text style={{ color: "red" }}>{getdata[0].confirmed}</Text>{" "}
      </Text>
      <Text style={{ marginTop: 8, fontSize: 18, marginLeft: 5 }}>
        Critical Cases:{" "}
        <Text style={{ color: "red" }}>{getdata[0].critical}</Text>
      </Text>
      <Text style={{ marginTop: 8, fontSize: 18, marginLeft: 5 }}>
        Deaths: <Text style={{ color: "red" }}>{getdata[0].deaths}</Text>
      </Text>
      <Text style={{ marginTop: 8, fontSize: 18, marginLeft: 5 }}>
        As <Text style={{ color: "red" }}>Covid</Text> is seperating once again
      </Text>
      <View style={{ alignItems: "center" }}>
        <Text style={{ marginTop: 8, fontSize: 18, marginLeft: 5 }}>
          SHOP ONLINE
        </Text>
        <Text style={{ marginTop: 8, fontSize: 18, marginLeft: 5 }}>
          STAY HOME
        </Text>
        <Text style={{ marginTop: 8, fontSize: 18, marginLeft: 5 }}>
          STAY SAFE
        </Text>
        <Text
          style={{
            marginTop: 8,
            fontSize: 18,
            marginLeft: 5,
            color: "#1DA1F2",
            fontWeight: "bold",
          }}
        >
          SAVE LIVES
        </Text>
      </View>

      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: "#1DA1F2",
          width: "90%",
          alignItems: "center",
          borderRadius: "50%",
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: 25,
        }}
        onPress={() => {
          navigation.navigate("Sign in", { user: extraData.user });
        }}
      >
        <Text style={{ color: "white", fontWeight: "500" }}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeShopOwner;
