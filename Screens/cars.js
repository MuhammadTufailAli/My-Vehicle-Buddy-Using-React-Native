import React from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";

export default ({ navigation, route }) => {
  const { cars } = route.params;
  return (
    <ScrollView>
      <View style={{ alignContent: "center", margin: 5, padding: 8 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("View Ads")}
          style={{
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#4682b4",
            borderRadius: "50%",
            width: "20%",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#f5f5f5" }}>
            Back{" "}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            borderBottomWidth: 2,
            alignSelf: "center",
            fontWeight: "bold",
          }}
        >
          Car Details
        </Text>
      </View>

      <View
        style={{
          margin: 8,
          marginTop: 10,
          padding: 5,
          justifyContent: "space-between",
        }}
      >
        <Image
          style={{
            resizeMode: "cover",
            height: 200,
            width: 200,
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: 8,
          }}
          source={{
            uri: cars.uri,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            padding: 8,
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Name:</Text>
          <Text style={{ fontSize: 15, paddingRight: 10 }}>{cars.name}</Text>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Company:</Text>
          <Text style={{ fontSize: 15, paddingRight: 10 }}>{cars.make}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            padding: 8,
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Type:</Text>
          <Text style={{ fontSize: 15, paddingRight: 10 }}>{cars.type}</Text>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Year:</Text>
          <Text style={{ fontSize: 15, paddingRight: 10 }}>{cars.model}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            padding: 8,
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Transmisson:</Text>
          <Text style={{ fontSize: 15, paddingRight: 10 }}>{cars.engine}</Text>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Price:</Text>
          <Text style={{ fontSize: 15, paddingRight: 10 }}>{cars.price}</Text>
        </View>
      </View>
    </ScrollView>
  );
};
