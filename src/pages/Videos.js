import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet, Text, ScrollView, FlatList } from 'react-native';
import { video1, video2, video3, video4, video5, video6, video7, video8 } from '../../assets/images';

const ListVideo = [
    {
        id: 1,
        urlVideo: video1,
        judul: 'Detik-detik gempa Sumur Banten Terasa Sampai Polda BandarLampung'
    },
    {
        id: 2,
        urlVideo: video2,
        judul: 'Pencuri Gasak Motor Mahasiswi di Kampus Universitas Lampung'
    },
    {
        id: 3,
        urlVideo: video3,
        judul: 'Hiu Tutul Terdapar Lahirkan Anak di Pantai Sukaraja'
    },
    {
        id: 4,
        urlVideo: video4,
        judul: 'PTM SD-SMP KOTA Bandar Lampung'
    },
    {
        id: 5,
        urlVideo: video5,
        judul: 'Bobol Indomaret Maling Gasak Sembako Dan Rekaman CCTV'
    },
    {
        id: 6,
        urlVideo: video6,
        judul: 'BNN Tangkap Terduga Narkoba , 2kg Sabu di Amankan'
    },
    {
        id: 7,
        urlVideo: video7,
        judul: 'Kunjungi Gereja di Bandar Lampung Gus Yaqut, Isyaratkan junjung tinggi Toleransi'
    },
    {
        id: 8,
        urlVideo: video8,
        judul: 'Nataru, 2900 Personil Siaga di 67 titik di Bandar Lampung'
    },
]

const Videos = () => {
    return (
        <View style={{ flex: 1, backgroundColor:'white' }}>
            <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#c4c4c4', height: 50, }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Videos
                </Text>
            </View>
            <FlatList
                data={ListVideo}
                renderItem={({ item }) => (
                    <View style={{ paddingHorizontal: 25, marginVertical:10 }}>
                        <TouchableOpacity style={{ justifyContent: 'center' }}>
                            <Image source={item.urlVideo} style={{ width: '100%', height:170, borderRadius: 12 }} />
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.judul}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                ListFooterComponent={<View style={{ marginBottom: 50 }} />}
            />
        </View>
    )
}

export default Videos;