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
import {
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
  video7,
  video8,
} from "../../assets/images";
import YoutubePlayer from "react-native-youtube-iframe";
import { useTheme } from "@react-navigation/native";

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
]
  const ListVideopilihan = [
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
  },
  {
    id: 8,
    urlVideo: "L10JkrVOiuA",
    judul: "Nataru, 2900 Personil Siaga di 67 titik di Bandar Lampung",
  },
];

const Videos = () => {
  const video = React.useRef(null);
  const {colors} = useTheme();

  return (
    <View style={{ flex: 1}}>
      <View
        style={{
          padding: 10,
          borderBottomWidth: 1,
          borderColor: "#c4c4c4",
          height: 50,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color:colors.text }}>Videos</Text>
      </View>
      <FlatList
        data={ListVideo}
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 25, marginVertical: 10 }}>
            <View style={{ justifyContent: "center" }}>
              <YoutubePlayer
                style={{ borderRadius: 12 }}
                height= {170}
                videoId={item.urlVideo}
              />
              <Text style={{ fontWeight: "bold", fontSize: 16, color:colors.text }}>
                {item.judul}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<View style={{ marginBottom: 50 }} />}
      />
    </View>
  );
};

export default Videos;
