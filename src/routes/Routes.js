import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Beranda,
  Nasional,
  Lpg,
  Kategori,
  DetailBerita,
  BandarLampung,
  Video
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
          name="Kategori"
          component={Kategori}
        />
        <Stack.Screen
          name="DetailBerita"
          component={DetailBerita}
        />
        <Stack.Screen
          name="Video"
          component={Video}
        />
      </Stack.Navigator>
    );
  };
  
  export default Route;