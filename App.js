import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import Route from "./src/routes/Routes";
import { lightTheme, darkTheme } from "./src/theme";
import { ThemeContext } from "./src/context/ThemeContext";

export default function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const switchTheme = React.useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={switchTheme}>
      <NavigationContainer theme={isDarkMode ? lightTheme: darkTheme}>
        <StatusBar />
        <Route />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
