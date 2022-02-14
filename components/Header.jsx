import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Ionicons, Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Header = ({ title, callEnabled }) => {
  const navigation = useNavigation();
  return (
    <View style={tw.style("p-2 flex-row items-center justify-between")}>
      <View style={tw.style("flex flex-row items-center")}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw.style("p-2")}
        >
          <Ionicons name="chevron-back-outline" size={34} color="#FF5864" />
        </TouchableOpacity>
        <Text style={tw.style("text-2xl font-bold pt-2")}>{title}</Text>
      </View>
      {callEnabled && (
        <TouchableOpacity style={tw.style("rounded-full mr-4 p-3 bg-red-200")}>
          <Foundation
            style={tw.style("")}
            name="telephone"
            size={20}
            color="red"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
