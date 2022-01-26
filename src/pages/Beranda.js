import { StatusBar, StyleSheet, Text, TouchableOpacity, View, Image, TouchableWithoutFeedback, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { darkModeLogo, berita1, berita2, berita3, berita4, berita5, logo, searchLogo } from '../../assets/images';

const ListKategori = [
    {
        id: 1,
        name: 'Berita Terbaru',
    },
    {
        id: 2,
        name: 'Bandar Lampung',
    },
    {
        id: 3,
        name: 'Lampung Raya',
    },
    {
        id: 4,
        name: 'Provinsi',
    },
    {
        id: 5,
        name: 'Hukum Kriminal'
    },
    {
        id: 5,
        name: 'Ekonomi Bisnis'
    },
    {
        id: 5,
        name: 'Politik'
    },
    {
        id: 5,
        name: 'Sports'
    },
    {
        id: 5,
        name: 'Lifestyle'
    },
    {
        id: 5,
        name: 'Disway'
    }
]

const listBerita = [
    {
        id: 1,
        image: berita2,
        title: 'Dua Preman Resmi Bertaubat Karena Nonton Tukang Bubur Naik Haji',
        keterangan: 'Radar Lampung | Rabu 6 Januari 2022 20:30 WIB'
    },
    {
        id: 2,
        image: berita3,
        title: 'Kemenkes Pastikan Virus Corona Sudah Hilang Dari Indonesia',
        keterangan: 'Radar Lampung | Rabu 6 Januari 2022 20:30 WIB'
    },
    {
        id: 3,
        image: berita4,
        title: 'Erick Tohir Siap Beli Kembali Club Besar Italia Yaitu Inter Milan',
        keterangan: 'Radar Lampung | Rabu 6 Januari 2022 20:30 WIB'
    },
]

const Beranda = () => {
    return (
        <View style={styles.container}>
            <StatusBar />

            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={darkModeLogo} style={styles.headerImg} />
                </TouchableOpacity>
                <View style={styles.searchContainer}>
                    <Image source={searchLogo} style={{ width: 24, height: 24 }} />
                    <TouchableWithoutFeedback>
                        <Text style={{ color: 'grey', marginLeft: 8 }}>
                            RadarLampung.id
                        </Text>
                    </TouchableWithoutFeedback>
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
                            <Text style={styles.textBody2}>{item.name}</Text>
                        </View>
                    )
                    }
                    keyExtractor={item => item.id}
                    horizontal={true}
                    ListFooterComponent={<View style={{ marginBottom: 50 }} />}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Berita Terbaru</Text>
                        <Image source={berita1} style={styles.berita1} />
                        <Text style={styles.titleText}>Presiden Jokowi Dukung Penuh Timnas Indonesia Berlaga di Kejuaraan AFF 2020 Bertemu Thailand</Text>
                        <Text style={{ ...styles.captionText, marginTop: -15 }}>Radar Lampung | Rabu 5 Januari 2022 20:28WIB</Text>
                    </View>
                    <View style={{ marginVertical: 10 }} />
                    <FlatList
                        data={listBerita}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <Image source={item.image} style={{ width: 150, height: 120, marginRight: 5, borderRadius: 12 }} />
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.title}</Text>
                                    <Text style={styles.captionText}>{item.keterangan}</Text>
                                </View>
                            </View>
                        )
                        }
                        keyExtractor={item => item.id}
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
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,

    },
    headerImg: {
        width: 30,
        height: 30
    },
    searchContainer: {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: 'grey',
        width: '80%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 30
    },
    textBody2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#C4C4C4'
    },
    berita1: {
        width: '100%',
        height: 263,
        marginVertical: 13,
        borderRadius: 12
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'justify'
    },
    captionText: {
        fontWeight: 'bold', fontSize: 10, color: '#C4C4C4',
    }
});
