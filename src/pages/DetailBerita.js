import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView, StatusBar, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {berita5} from '../../assets/images';

const DetailBerita = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar/>
            <ScrollView>
            <ImageBackground source={berita5} style={styles.gambar} >
                <TouchableOpacity style={{marginLeft:10, marginTop:10}} onPress={ () => navigation.navigate('Beranda')}>
                <Text style={{color:'#000', fontWeight:'bold', }}>Back</Text>
                </TouchableOpacity>
            </ImageBackground>
            <View style={{paddingHorizontal:12}}>
                <Text style={styles.tamel}>Provinsi</Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black', marginTop: 1, textAlign:'justify' }}>Gubernur Lampung Pastikan Seluruh Masyarakat Yang Terdapak Akan Virus Covid-19 Akan Mendapatkan Bantuan</Text>
                <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#95a5a6', marginTop: 1, marginBottom: 7 }}>Radar Lampung | Selasa, 4 Januari 2022</Text>
                <Text style={styles.isi}>Dinas Kesehatan (Dinkes) Provinsi Lampung menyebutkan terdapat seorang Aparatur Sipil Negara (ASN) terdeteksi positif Covid-19 setelah pulang dinas dari Bogor,
                    namun belum ada hasil yang menyebutkan ASN tersebut mengidap Omicron. Dinkes masih menunggu hasil pemeriksaan dari Litbangkes Kemenkes.</Text>
                <Text style={styles.isi}>Kepala Dinkes Lampung dr Reihana membantah info yang marak beredar pesan te,rtulis di media sosial seorang warga di Lampung terdeteksi varian Omicron.
                    “Ada satu kasus positif tapi belum dikirim hasil S Gene Target Failure (SGTF) dan Whole Genome Sequensing (WGS). Kita tunggu hasil dari Litbangkes,” kata Reihana saat dikonfirmasi wartawan di Bandar Lampung, Kamis (13/1).</Text>
                <Text style={styles.isi}>Ia mengatakan, sampel dari seorang ASN terdeteksi positif Covid-19 tersebut akan dikirim ke Litbangkes.
                    ASN tersebut melakukan perjalanan luar kota kegiatan dinas di Bogor pekan lalu. Hasil pemeriksaan pasien tersebut terpapar Covid-19. “Gejala pasien demam dan batuk, mudah-mudahan bukan Omicron,” katanya.</Text>
                <Text style={styles.isi}>Reihana yang juga jubir Satgas Penanganan Covid-19 Provinsi Lampung mengatakan, dari seorang pasien positif Covid-19 tersebut telah dilakukan tracing kepada 100 orang yang melakukan kontak erat dengannya.
                    Dari jumlah tersebut, hanya terdapat satu orang dari lingkungan keluarga terdeteksi positif Covid-19 setelah dilakukan tes antigen.</Text>
                <Text style={styles.isi}>Sebuah pesan tertulis di media sosial khususnya Whatsapps (WA) berisi seorang warga Bandar Lampung terdeteksi Covid-19 varian Omicron, Kamis (13/1). Pesan WA beredar berisi: “Rekan2 sekalian hari ini terdeteksi satu orang Warga Bandar Lampung yang terpapar Covid-19 varian Omicron, untuk itu
                    ingatkan terus masyarakat tentang prokes ketat, aktifkan kegiatan PPKM skala Micro dan lakukan 3T kepada orang yang kontak erat dengan warga yang terpapar. Salam sehat selalu.”</Text>
                <Text style={styles.isi}>eihana membantah info yang tidak jelas sumbernya tersebut. Menurut dia, kalaupun ada pasti akan diumumkan agar masyarakat lebih ketat menerapkan protokol kesehatannya.
                    Sebelumnya,
                    ia menyatakan, bila ditemukan kasus Omicron di daerahnya maka pasien terjangkit diwajibkan untuk
                    melakukan isolasi dan perawatan di rumah sakit. Menurutnya, memang belum ada kasus varian Omicron di Lampung, tapi sudah ada surat edaran dari Kementerian Kesehatan yang mengharuskan pasien terpapar wajib di isolasi di rumah sakit.</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black', marginTop: 20 }}>Berita Lain</Text>
                <Text style={styles.berital}>Kesabaran AKBP Dermawan Yang Dipukuli Massa Pemuda Pancasila Dipuji</Text>
                <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#95a5a6', marginTop: 2, marginBottom: 20 }}>23 Menit Yang Lalu</Text>
                <Text style={styles.berital}>AHY Klaim Putusan MK Soal UU Cipta Kerja Sejalan Sikap Demokrat</Text>
                <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#95a5a6', marginTop: 2, marginBottom: 20 }}>40 Menit Yang Lalu</Text>
                <Text style={styles.berital}>Alasan Buruh Minta Aturan Upah Mesti Balik ke yang Lama</Text>
                <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#95a5a6', marginTop: 2, marginBottom: 20 }}>56 Menit Yang Lalu</Text>
                <Text style={styles.berital}>Dirjen Keuangan Daerah Kemendagri Ardian NoerVianto Dicpot</Text>
                <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#95a5a6', marginTop: 2, marginBottom: 20 }}>56 Menit Yang Lalu</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    gambar: {
        width: 410,
        height: 330,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginHorizontal: 0,
        padding: 1
    },

    tamel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0057A1',
        marginTop: 10,
        padding: 1
    },

    isi: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: 7,
        textAlign:'justify'
    },
    berital: {
        fontSize: 16,
        fontWeight: 'bold',
        width: 300,
        marginTop: 1,
        padding: 1
    },
    menubar: {
        flexDirection: 'row',
        backgroundColor: '#7f8c8d',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 25,
        height: 80,
        width: 410
    }
})


export default DetailBerita;