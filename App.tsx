import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screen/app/HomeScreen";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./src/screen/login/LoginScreen";

import { QueryClientProvider, QueryClient } from "react-query";
import { MyTabs } from "./src/routes/BottonTabs";
import AnimePreviw from "./src/screen/app/AnimePreviw";
import GeneresScreen from "./src/screen/app/GeneresScreen";
import MayVideoPLayer from "./src/screen/app/VideoPLayer";
import ServerScreen from "./src/screen/app/Server/ServerScreen";
import { AppConfigContex, MayProvaiderFuction } from "./src/context/Context";
import * as SecureStore from "expo-secure-store";
import { useContext, useEffect } from "react";

const Stack = createStackNavigator();

const queryClient = new QueryClient();

const TransitionScreenOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
  gestureEnabled: false,
  presentation: "transparentModal",
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={TransitionScreenOptions as any}>
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="PreviwScreen" component={AnimePreviw} />
      <Stack.Screen name="Generes" component={GeneresScreen} />
      <Stack.Screen name="videoPlayer" component={MayVideoPLayer} />
      <Stack.Screen name="serverVideo" component={ServerScreen} />
    </Stack.Navigator>
  );
};

const LoginStck = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const RoutesNavigation = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default function App() {
  const { setAddFavotito, addFavotito } = useContext(AppConfigContex);
/* 
  useEffect(() => {
    guardarList();
  }, [addFavotito]);
 */

/*   const guardarList = async () => {
    await SecureStore.getItemAsync("Favoritoslist").then((perfil) => {
      const dato = JSON.parse(perfil as any);
      setAddFavotito(dato);
    });
  }; 

  console.log(    guardarList())


   */
  


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MayProvaiderFuction>
          <RoutesNavigation />
          <StatusBar style="light" />
        </MayProvaiderFuction>
      </QueryClientProvider>
    </>
  );
}
