import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import {
  darkModeLogo,
  berita1,
  berita2,
  berita3,
  berita4,
  berita6,
  berita7,
  berita8,
  berita9,
  berita10,
  berita11,
  berita24,
  berita15,
  berita16,
  berita21,
  berita22,
  berita17,
  berita25,
  berita26,
  berita27,
  logo,
  searchLogo,
} from "../../assets/images";
import { Kategori } from ".";

const ListKategori = [
  {
    id: 1,
    name: "Berita Terbaru",
  },
  {
    id: 2,
    name: "Bandar Lampung",
  },
  {
    id: 3,
    name: "Lampung Raya",
  },
  {
    id: 4,
    name: "Nasional",
  },
  {
    id: 5,
    name: "Politik",
  },
  {
    id: 6,
    name: "Sport",
  },
];

const listBerita = [
  {
    id: 1,
    image: berita2,
    title: "Dua Preman Resmi Bertaubat Karena Nonton Tukang Bubur Naik Haji",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Berita Terbaru",
  },
  {
    id: 2,
    image: berita3,
    title: "Kemenkes Pastikan Virus Corona Sudah Hilang Dari Indonesia",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Berita Terbaru",
  },
  {
    id: 3,
    image: berita4,
    title: "Erick Tohir Siap Beli Kembali Club Besar Italia Yaitu Inter Milan",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Berita Terbaru",
  },
  {
    id: 4,
    image: berita9,
    title:
      "Para Guru Sarankan Anak-anak Lebih Baik Belajar Secara Tatap Muka Dikarenakan Satu dan Lain Hal",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Bandar Lampung",
  },
  {
    id: 5,
    image: berita10,
    title:
      "Kuliner di Bandar Lampung Semakin Digemari Masyarakat Membuat Perekonomian Kota Bandar Lampung Naik",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Bandar Lampung",
  },
  {
    id: 6,
    image: berita11,
    title:
      "Kota Bandar Lampung Menjadi Salah Satu Kota pencetak Hafiz Quran Terbanyak di Provinsi Lampung",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Bandar Lampung",
  },
  {
    id: 7,
    image: berita6,
    title: "Penyerahan Bantuan Berupa Sembako Kepada Bupati Lampung Selatan",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Lampung Raya",
  },
  {
    id: 8,
    image: berita7,
    title:
      "Pelaksanaan Vaksinisasi di Wilayah Kaliawi Berjalan Ramai dan Lancar",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Lampung Raya",
  },
  {
    id: 9,
    image: berita8,
    title:
      "Dua Desa Yang Bersitegang di Kabupaten Mesuji Berdamai di Polda Lampung",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Lampung Raya",
  },
  {
    id: 10,
    image: berita24,
    title:
      "Mantan Kader PDIP Lampung Ini Gabung NasDem, Disiapkan Untuk Posisi Wabup Lampura ?",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Politik",
  },
  {
    id: 11,
    image: berita21,
    title:
      "Mantan Kader PDIP Lampung Ini Gabung NasDem, Disiapkan Untuk Posisi Wabup Lampura ?",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Politik",
  },
  {
    id: 12,
    image: berita22,
    title:
      "Kherlani Pindah ke Partai Demokrat, Sekretaris Golkar Lampung : Tak Ada Komunikasi!",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Politik",
  },
  {
    id: 13,
    image: berita15,
    title:
      "Presiden Persebaya: Klub yang Bagus Lakukan Pembinaan ”Dipenalti” Timnas",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Sport",
  },
  {
    id: 14,
    image: berita16,
    title: "Gibran Dukung Bergulirnya Honda DBL Seri Jateng di Solo",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Sport",
  },
  {
    id: 15,
    image: berita17,
    title: "Kalahkan Atlet MMA, Kick Boxing Lampung Segel Tiket ke Sea Games",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Sport",
  },
  {
    id: 16,
    image: berita25,
    title: "Terima Kasih Pak Airlangga, Minyak Goreng di Pasar Ini Harganya Sekarang Sudah Turun",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Nasional",
  },
  {
    id: 17,
    image: berita26,
    title:
      "Top ! Gubernur Jateng Ganjar Pranowo Berbusana Adat Lampung Saat Sambut Triawan Munaf",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Nasional",
  },
  {
    id: 18,
    image: berita27,
    title: "Airlangga Hartarto Terima Anugerah Baznas Award 2022",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30 WIB",
    kategori: "Nasional",
  },
];

const listHeader = [
  {
    id: 19,
    image: 'https://radarlampung.co.id/wp-content/uploads/2022/02/IMG-20220222-WA0016-1536x1148.jpg',
    title: "Winarti Warning Pengusaha Nakal yang Nekat Timbun Minyak Goreng",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 20:30",
    kategori: "Berita Terbaru",
  },
  {
    id: 20,
    image: 'https://radarlampung.co.id/wp-content/uploads/2022/02/IMG-20220215-WA0015.jpg',
    title: "Sukarma Wijaya Jabat Pj. Sekkot Bandarlampung",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 21:00",
    kategori: "Bandar Lampung",
  },
  {
    id: 21,
    image: 'https://radarlampung.co.id/wp-content/uploads/2020/10/images-2020-10-29T200524.723.jpeg',
    title: "Tambah 55 Kasus Positif Covid-19 di Tanggamus",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 21:30",
    kategori: "Lampung Raya",
  },
  {
    id: 22,
    image: 'https://radarlampung.co.id/wp-content/uploads/2022/02/IMG_20220215_213901.jpg',
    title: "PPKM 386 Kabupaten/Kota di Luar Jawa-Bali Diperpanjang Dua Pekan",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 21:40",
    kategori: "Nasional",
  },
  {
    id: 23,
    image: 'https://radarlampung.co.id/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-10-at-15.36.24-1536x1006.jpeg',
    title: "Tegas ! Ini Pesan AHY ke Ketua Partai Demokrat Lampung Soal Wajib Rangkul Semua Pihak",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 22:00",
    kategori: "Politik",
  },
  {
    id: 24,
    image: 'https://radarlampung.co.id/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-09-at-19.09.25-e1644412013217.jpeg',
    title: "Raih 114 Medali, Rafflesia Swimming Club Bandar Lampung Juara Umum Damraman Championship 2022",
    keterangan: "Radar Lampung | Rabu 6 Januari 2022 22:15",
    kategori: "Sport",
  }

]

const Beranda = ({ navigation }) => {
  const [kategori, setKategori] = useState("Berita Terbaru");
  const [data, setData] = useState(listBerita.filter((e) => e.kategori == "Berita Terbaru"));
  const [header, setHeader] = useState(listHeader.filter((e) => e.kategori == "Berita Terbaru"));
  const setKategoriFilter = (kategori) => {
    setData([...listBerita.filter((e) => e.kategori == kategori)]);
    setHeader([...listHeader.filter((e) => e.kategori == kategori)]);
    setKategori(kategori);
  };

  return (
    <View style={styles.container}>
      <StatusBar />

      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={darkModeLogo} style={styles.headerImg} />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          {/* <Image source={searchLogo} style={{ width: 24, height: 24 }} />
                    <TouchableWithoutFeedback>
                        <Text style={{ color: 'grey', marginLeft: 8 }}>
                            RadarLampung.id
                        </Text>
                    </TouchableWithoutFeedback> */}
          <TextInput
            // inlineImageLeft={searchLogo}
            placeholder="RadarLampung.id"
            keyboardType="default"
          />
        </View>
        <TouchableOpacity>
          <Image source={logo} style={styles.headerImg} />
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <FlatList
          data={ListKategori}
          renderItem={({ item }) => (
            <View style={{ marginRight: 7 }}>
              <TouchableOpacity
                onPress={() => {
                  setKategoriFilter(item.name), console.log(item.name);
                }}
              >
                <Text style={[styles.textBody2, kategori === item.name && styles.textActive]}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
          ListFooterComponent={<View style={{ marginBottom: 50 }} />}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: '#0057A1' }}>
              {kategori}
            </Text>
            {header.map((item) =>
              <View>
                <Image source={{ uri: item.image }} style={styles.beritaa} />
                <Text style={styles.titleText}>
                  {item.title}
                </Text>
                <Text style={{ ...styles.captionText, marginTop: -15 }}>
                  {item.keterangan}
                </Text>
              </View>)
            }
          </View>

          <View style={{ marginVertical: 10 }} />
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }} onPress={() => {
                navigation.navigate("DetailBerita");
              }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: 150,
                    height: 120,
                    marginRight: 5,
                    borderRadius: 12,
                  }}
                />
                <View style={{ flex: 1 }}>
                  <Text
                    style={{ fontSize: 14, fontWeight: "bold", marginLeft: 7 }}
                  >
                    {item.title}
                  </Text>
                  <Text style={styles.captionText}>{item.keterangan}</Text>
                </View>

              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            ListFooterComponent={<View style={{ marginBottom: 180 }} />}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  headerImg: {
    width: 30,
    height: 30,
  },
  searchContainer: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "grey",
    width: "80%",
    alignItems: "center",
    padding: 10,
    borderRadius: 30,
  },
  textBody2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#C4C4C4",
  },
  beritaa: {
    width: "100%",
    height: 263,
    marginVertical: 13,
    borderRadius: 12,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "justify",
  },
  captionText: {
    fontWeight: "bold",
    fontSize: 10,
    color: "#C4C4C4",
    marginLeft: 7,
  },
  textActive: {
    color: "#0057A1",
  },
  textTab: {
    marginLeft: 2,
    fontSize: 14,
  },
});
