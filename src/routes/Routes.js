import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DetailBerita,
  Search
} from "../pages";
import Tabs from "./BottomTabs";

const Stack = createStackNavigator();

const Route = () => {
    return (
      <Stack.Navigator
        initialRouteName="Beranda"
        screenOptions={{
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Beranda" component={Tabs} />
        <Stack.Screen
          name="DetailBerita"
          component={DetailBerita}
        />
        <Stack.Screen
          name="Search"
          component={Search}
        />
      </Stack.Navigator>
    );
  };
  
  export default Route;