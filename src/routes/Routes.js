import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Beranda,
  Nasional,
  Lpg,
  Kategori,
  DetailBerita,
  BandarLampung,
  Videos
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
      </Stack.Navigator>
    );
  };
  
  export default Route;