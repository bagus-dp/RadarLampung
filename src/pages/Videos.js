import { Video } from "expo-av";
import React from "react";
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const ListVideo = [
  {
    id: 1,
    urlVideo: "alN0uZEtESk",
    judul: "Detik-detik gempa Sumur Banten Terasa Sampai Polda BandarLampung",
  },
  {
    id: 2,
    urlVideo: "1iktehtjBqI",
    judul: "Pencuri Gasak Motor Mahasiswi di Kampus Universitas Lampung",
  },
  {
    id: 3,
    urlVideo: "nQ3AbKu-SCw",
    judul: "Hiu Tutul Terdapar Lahirkan Anak di Pantai Sukaraja",
  },
];
const ListVideoPilihan = [
  {
    id: 4,
    urlVideo: "dXbNXKQk47A",
    judul: "PTM SD-SMP KOTA Bandar Lampung",
  },
  {
    id: 5,
    urlVideo: "JGXJ4wtV8RI",
    judul: "Bobol Indomaret Maling Gasak Sembako Dan Rekaman CCTV",
  },
  {
    id: 6,
    urlVideo: "qFQ10SXCXm0",
    judul: "BNN Tangkap Terduga Narkoba , 2kg Sabu di Amankan",
  },
  {
    id: 7,
    urlVideo: "G8L8h3oEuaQ",
    judul:
      "Kunjungi Gereja di Bandar Lampung Gus Yaqut, Isyaratkan junjung tinggi Toleransi",
  }
];

const Videos = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingHorizontal: 25,
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderColor: "#c4c4c4",
          height: 50,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: colors.text }}>
          Videos
        </Text>
        <TouchableOpacity
          // onPress={() => {
          //   navigation.navigate("Search", {
          //     val: "Videos",
          //   });
          // }}
        >
          <Icon name="search-outline" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          data={ListVideo}
          renderItem={({ item }) => (
            <View style={{ paddingHorizontal: 25, marginVertical: 10 }}>
              <View style={{ justifyContent: "center" }}>
                <YoutubePlayer
                  style={{ borderRadius: 12 }}
                  height={170}
                  videoId={item.urlVideo}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    color: colors.text,
                  }}
                >
                  {item.judul}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <FlatList
          data={ListVideoPilihan}
          numColumns={2}
          renderItem={({ item }) => (
            <View
              style={{ paddingHorizontal: 25, marginTop: 10, width: "50%" }}
            >
              <View style={{ justifyContent: "center" }}>
                <YoutubePlayer
                  style={{ borderRadius: 12 }}
                  height={78}
                  videoId={item.urlVideo}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    color: colors.text,
                  }}
                  numberOfLines={2}
                >
                  {item.judul}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View style={{ marginBottom: 50 }} />}
        />

        <View style={{ paddingHorizontal: 25, marginVertical: 10, marginBottom:100 }}>
          <View style={{ justifyContent: "center" }}>
            <YoutubePlayer
              style={{ borderRadius: 12 }}
              height={170}
              videoId={'L10JkrVOiuA'}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: colors.text,
              }}
            >
              Nataru, 2900 Personil Siaga di 67 titik di Bandar Lampung
            </Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default Videos;
