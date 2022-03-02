import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { searchLogo } from "../../assets/images";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";

const Search = ({ navigation }) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Beranda")}>
          <View style={styles.buttonBack}>
            <Icon name="arrow-back-outline" size={24} color={colors.text}  />
          </View>
        </TouchableOpacity>
        <View style={styles.searchContainer}><Icon
              name="search"
              size={24}
              color="#c3c3c3"
              style={styles.icon}
            />
          <TextInput
            placeholder="Cari Berita"
            style={styles.input}
            autoFocus
            autoCapitalize="none"
            placeholderTextColor={colors.text}
          />
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
  searchContainer: {
    width: "85%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 20,
    borderColor: "#bfbdb8",
    borderWidth: 1,
  },
  icon: { width: 28, height: 28, marginLeft: 10 },
  input: {
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
    marginLeft: 5,
    paddingRight: 30,
  },
  buttonBack: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
});
