import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { berita5 } from "../../assets/images";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";

const DetailBerita = ({ navigation, route }) => {
  const { title, image, kategori, keterangan, header } = route.params;
  const { colors } = useTheme();

  return (
    <View>
      <StatusBar />
      <ScrollView>
        <ImageBackground
          source={header ? { uri: image } : image}
          style={styles.gambar}
        >
          <TouchableOpacity
            style={{
              marginLeft: 10,
              marginTop: 10,
              padding: 5,
              backgroundColor: "white",
              width: 40,
              borderRadius: 25,
            }}
            onPress={() => navigation.navigate("Beranda")}
          >
            <Icon name="arrow-back-outline" size={30} color="#000" />
          </TouchableOpacity>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.background,
            justifyContent: "center",
            alignContent: "center",
            paddingHorizontal: 12,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            position: "relative",
            top: -32,
            paddingTop: 10,
          }}
        >
          <Text style={{...styles.tamel, fontFamily:'Montserrat_400Regular'}}>{kategori}</Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: colors.text,
              marginTop: 1,
              textAlign: "justify",
              fontFamily: "Montserrat_400Regular",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "normal",
              color: "#95a5a6",
              marginTop: 1,
              marginBottom: 7,
            }}
          >
            {keterangan}
          </Text>
          <Text style={{ ...styles.isi, color: colors.text, fontFamily:'OpenSans_400Regular' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisis efficitur dolor. Sed in ipsum risus. Nulla iaculis velit
            et lobortis facilisis. Pellentesque ut erat turpis. Proin maximus
            est at nisl auctor, a auctor eros lobortis. Fusce lectus ante,
            malesuada quis imperdiet id, imperdiet eget arcu. Nam mauris lorem,
            euismod vel lorem non, hendrerit semper lorem. Aliquam a nunc nisl.
            Aliquam ornare dui vel dignissim fringilla. Etiam eget congue nisi.
            Sed quis tortor mauris. Integer non tortor eget erat finibus
            rhoncus. Duis ut vehicula felis, non scelerisque orci. Cras interdum
            dignissim est a consequat. Sed at placerat massa. Mauris sapien
            {"\n"}
            {"\n"}
            felis, ultricies nec mollis eget, sollicitudin eget purus. Maecenas
            at consequat tortor. Donec eleifend molestie fermentum. Quisque
            sollicitudin massa neque, nec lacinia odio tincidunt et. Quisque in
            ipsum ut libero ornare placerat et non lorem. Nulla nisi nisi,
            mattis sit amet sodales vel, condimentum porta mauris. Mauris sed
            {"\n"}
            luctus est. Mauris porta ullamcorper velit eu mattis. Sed mollis sed
            sem non mattis. Aliquam ac ornare augue. Proin maximus purus massa,
            sit amet rutrum libero sodales et. Praesent suscipit mi nibh, eget
            suscipit tortor porta sed. In vitae luctus nisl. Proin eget
            pellentesque orci. Donec mattis sapien ut fringilla vehicula. Donec
            pharetra vel urna a rhoncus. Cras bibendum tortor eget purus
            {"\n"}
            sagittis, eget aliquet augue ultricies. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Aenean
            vitae ante eu nibh iaculis tristique nec ac justo. Phasellus ut
            ipsum in felis vestibulum elementum. Etiam eu libero tortor. Nunc
            mattis, nisi a vestibulum malesuada, risus ante dapibus risus, at
            fringilla nisl quam non velit. In vel iaculis tortor. Morbi ac est
            eget enim sagittis mattis id sed ante. Praesent efficitur, quam vel
            fermentum ornare, dolor orci laoreet ipsum, quis fermentum tortor
            mauris in tellus. Duis sollicitudin, lorem non vulputate suscipit,
            {"\n"}
            orci felis tristique libero, et dictum risus nisi vel velit. Proin
            nisl erat, laoreet eu lacus ut, euismod viverra libero. Nullam
            dignissim lectus erat, eu vulputate arcu ultricies at. Sed posuere
            orci egestas, efficitur magna quis, tincidunt magna. Nunc dui velit,
            imperdiet quis odio id, viverra molestie mauris.
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: colors.text,
              marginTop: 20,
            }}
          >
            Berita Lain
          </Text>
          <Text style={{ ...styles.berital, color: colors.text }}>
            Kesabaran AKBP Dermawan Yang Dipukuli Massa Pemuda Pancasila Dipuji
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "normal",
              color: "#95a5a6",
              marginTop: 2,
              marginBottom: 20,
            }}
          >
            23 Menit Yang Lalu
          </Text>
          <Text style={{ ...styles.berital, color: colors.text }}>
            AHY Klaim Putusan MK Soal UU Cipta Kerja Sejalan Sikap Demokrat
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "normal",
              color: "#95a5a6",
              marginTop: 2,
              marginBottom: 20,
            }}
          >
            40 Menit Yang Lalu
          </Text>
          <Text style={{ ...styles.berital, color: colors.text }}>
            Alasan Buruh Minta Aturan Upah Mesti Balik ke yang Lama
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "normal",
              color: "#95a5a6",
              marginTop: 2,
              marginBottom: 20,
            }}
          >
            56 Menit Yang Lalu
          </Text>
          <Text style={{ ...styles.berital, color: colors.text }}>
            Dirjen Keuangan Daerah Kemendagri Ardian NoerVianto Dicpot
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "normal",
              color: "#95a5a6",
              marginTop: 2,
              marginBottom: 20,
            }}
          >
            56 Menit Yang Lalu
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  gambar: {
    resizeMode: "contain",
    height: 310,
  },

  tamel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0057A1",
    marginTop: 10,
    padding: 1,
  },

  isi: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 7,
    textAlign: "justify",
  },
  berital: {
    fontSize: 16,
    fontWeight: "bold",
    width: 300,
    marginTop: 1,
    padding: 1,
  },
  menubar: {
    flexDirection: "row",
    backgroundColor: "#7f8c8d",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 25,
    height: 80,
    width: 410,
  },
});

export default DetailBerita;
