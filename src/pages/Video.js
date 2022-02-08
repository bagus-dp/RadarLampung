import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import { video1, video2, video3, video4, video5, video6, video7, video8 } from '../../assets/images';

const ListVideo = [
    {
        id:1,
        urlVideo:'https://www.youtube.com/watch?v=alN0uZEtESk',
        judul:'Detik-detik gempa Sumur Banten Terasa Sampai Polda BandarLampung'
    },
    {
        id:2,
        urlVideo:'https://www.youtube.com/watch?v=1iktehtjBqI',
        judul:'Pencuri Gasak Motor Mahasiswi di Kampus Universitas Lampung'
    },
    {
        id:3,
        urlVideo:'https://www.youtube.com/watch?v=nQ3AbKu-SCw',
        judul:'Hiu Tutul Terdapar Lahirkan Anak di Pantai Sukaraja'
    },
    {
        id:4,
        urlVideo:'https://www.youtube.com/watch?v=dXbNXKQk47A',
        judul:'PTM SD-SMP KOTA Bandar Lampung'
    },
    {
        id:5,
        urlVideo:'https://www.youtube.com/watch?v=JGXJ4wtV8RI',
        judul:'Bobol Indomaret Maling Gasak Sembako Dan Rekaman CCTV'
    },
    {
        id:6,
        urlVideo:'https://www.youtube.com/watch?v=qFQ10SXCXm0',
        judul:'BNN Tangkap Terduga Narkoba , 2kg Sabu di Amankan'
    },
    {
        id:7,
        urlVideo:'https://www.youtube.com/watch?v=G8L8h3oEuaQ',
        judul:'Kunjungi Gereja di Bandar Lampung Gus Yaqut, Isyaratkan junjung tinggi Toleransi'
    },
    {
        id:8,
        urlVideo:'https://www.youtube.com/watch?v=L10JkrVOiuA',
        judul:'Nataru, 2900 Personil Siaga di 67 titik di Bandar Lampung'
    },
]

const Video = () => {
    return (
        <View>
            <View style={styles.border}>
                <Text style={styles.vdo}>VIDEO</Text>
            </View>
            <ScrollView>
                <View>
                    <Image source={video1} style={styles.vid} />
                    <Text style={styles.tek}>Detik-detik gempa Sumur Banten Terasa Sampai Polda BandarLampung</Text>
                    <Text style={styles.drs}>1 Jam Yang Lalu</Text>
                    <Image source={video2} style={styles.vid} />
                    <Text style={styles.tek}>Pencuri Gasak Motor Mahasiswi di Kampus Universitas Lampung</Text>
                    <Text style={styles.drs} >2 Jam Yang Lalu</Text>
                    <Image source={video3} style={styles.vid} />
                    <Text style={styles.tek}>Hiu Tutul Terdapar Lahirkan Anak di Pantai Sukaraja</Text>
                    <Text style={styles.drs}>3 Jam Yang Lalu</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#0057A1', marginLeft: 30, marginTop: 30 }}>VIDEO PILIHAN</Text>
                    <View style={styles.vidpil}>
                        <Image source={video4} style={styles.vipil} />
                        <Image source={video5} style={styles.vipil} />
                    </View>

                    <View style={styles.tvp}>
                        <Text style={styles.tvipil}>PTM SD-SMP KOTA BANDAR LAMPUNG</Text>
                        <Text style={styles.tvipil}>BOBOL INDOMARET MALING GASAK SEMBAKO DAN REKAMAN CCTV</Text>

                    </View>

                    <View style={styles.vidpil}>
                        <Image source={video6} style={styles.vipil} />
                        <Image source={video7} style={styles.vipil} />
                    </View>

                    <View style={styles.tvp}>
                        <Text style={styles.tvipil}>BNN Tangkap Terduga Narkoba , 2kg Sabu di Amankan</Text>
                        <Text style={styles.tvipil}>Kunjungi Gereja di Bandar Lampung Gus Yaqut, Isyaratkan junjung tinggi Toleransi</Text>

                    </View>

                    <Image source={video8} style={styles.vid} />
                    <Text style={styles.tek}>Nataru, 2900 Personil Siaga di 67 titik di Bandar Lampung</Text>
                    <Text style={styles.drs}>5 Jam Yang Lalu</Text>
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    border: {
        width: 410,
        height: 80,
        backgroundColor: '#7f8c8d',
        borderRadius: 25,
        marginBottom: 25
    },
    vdo: {
        color: '#0057A1',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 12,
        marginTop: 25
    },
    vid: {
        width: 361,
        height: 206,
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 30,
        marginTop: 10
    },
    tek: {
        fontSize: 16,
        fontWeight: 'bold',
        width: 380,
        marginLeft: 30,
        marginTop: 9
    },
    drs: {
        fontSize: 10,
        fontWeight: 'normal',
        color: '#95a5a6',
        marginLeft: 30,
        marginTop: 5
    },
    vidpil: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal:12

    },
    vipil: {
        width: 131,
        height: 75,
        marginHorizontal:12
    },
    tvipil: {
        fontSize: 12,
        width: 250,
        fontWeight: 'bold'
    },
    tvp: {
        flexDirection: 'row-reverse',
        marginTop: 10,
        marginLeft: 30,
        marginRight: 5
    },
    menubar: {
        flexDirection: 'row',
        backgroundColor: '#7f8c8d',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 25
    }
})


export default Video;