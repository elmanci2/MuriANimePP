import { View, Text } from "react-native";
import React from "react";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { ComponetsStyles } from "../../styles/Styles";

interface alertProps {
  title: string;
  isError: boolean;
}

export default function AlertCustom({ title, isError }: alertProps) {
  return (
    <View style={ComponetsStyles.alertStyles.container as any}>
      {isError ? (
        <MaterialIcons name="error-outline" size={24} color="black" />
      ) : (
        <AntDesign name="checkcircleo" size={24} color="black" />
      )}
      <Text numberOfLines={2} style={ComponetsStyles.alertStyles.textAlert}>
        {title}
      </Text>
    </View>
  );
}
