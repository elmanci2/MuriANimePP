import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FovoriteLIst from "../screen/app/FovoriteLIst";

import HomeScreen from "../screen/app/HomeScreen";
import SearchScree from "../screen/app/SearchScree";
import { Styles } from "../styles/Styles";
import { Feather } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: Styles.colors.color }}>
      <Tab.Screen options={{}} name="inicio" component={HomeScreen} />
      <Tab.Screen options={{}} name="Favorito" component={FovoriteLIst} />
      <Tab.Screen options={{
        title: "Search",
        tabBarLabel: "Search",
        tabBarIcon: ({ color }) => <Feather name="search" size={24} color="white" />,
      }} name="Search" component={SearchScree} />
    </Tab.Navigator>
  );
}
