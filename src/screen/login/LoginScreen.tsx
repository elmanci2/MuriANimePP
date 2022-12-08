import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { naviagtion } from "../../ts/types";

import { LoginStyles } from "../../styles/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen({ navigation }: naviagtion) {
  const [posware, setPosware] = useState("");
  const [email, setEmail] = useState("");

  const login = () => {
    createUserWithEmailAndPassword(auth, email, posware);
  };

  return (
    <View style={LoginStyles.body}>
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={LoginStyles.gradients}
      />

      <View style={LoginStyles.logoContainer}>
        <Image
          style={LoginStyles.logo}
          source={require("../../assets/logo.png")}
        />
        <Text style={LoginStyles.logoStyles}>Muri</Text>
      </View>
      <SafeAreaView style={LoginStyles.inputConted}>
        <TextInput style={LoginStyles.textINput} placeholder="hola" />
        <TextInput style={LoginStyles.textINput} placeholder="hola" />

        <TouchableOpacity style={LoginStyles.bottom}>
          <Text style={LoginStyles.textBotom}>enviar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
