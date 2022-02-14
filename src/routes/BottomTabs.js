import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Video, BandarLampung, Beranda, Kategori } from "../pages";
import { icon_home, icon_kategori, icon_video } from "../../assets/icons";

const Tab = createBottomTabNavigator();

const Tabs =  () => {
  return (
      <Tab.Navigator 
        screenOptions={{
            tabBarStyle:{
                position:'absolute',
                // bottom:25,
                // left:20,
                // right:20,
                elevation:0,
                backgroundColor:'#F5F4F1',
                // borderRadius:15,
                height:90,
                borderTopRightRadius:40,
                borderTopLeftRadius:40,
                ...styles.shadow,
                paddingHorizontal:40
            },
            tabBarShowLabel:false
        }}
      >
        <Tab.Screen name="Home" component={Beranda} 
          options={{ headerShown: false,
            tabBarIcon: ({focused}) => (
                <View>
                    <Image source={icon_home} resizeMode='contain'
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? '#000' : '#C4C4C4'
                    }} />
                </View>
            )
          }}/>
        <Tab.Screen name="Kategori" component={Kategori} 
          options={{ headerShown: false, tabBarIcon: ({focused}) => (
            <View>
                <Image source={icon_kategori} resizeMode='contain'
                style={{
                    width:25,
                    height:25,
                    tintColor: focused ? '#000' : '#C4C4C4'
                }} />
            </View>
        ) }}/>
        <Tab.Screen name="Video" component={Video} 
          options={{ headerShown: false, tabBarIcon: ({focused}) => (
            <View>
                <Image source={icon_video} resizeMode='contain'
                style={{
                    width:25,
                    height:25,
                    tintColor: focused ? '#000' : '#C4C4C4'
                }} />
            </View>
        ) }} />
      </Tab.Navigator>
  );
}

export default Tabs;

const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height:-10
        },
        shadowOpacity:0.25,
        shadowRadius:2.5,
        elevation:5
    }
})