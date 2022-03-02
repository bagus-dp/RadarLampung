import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import {
    unila, kdm, disway, corona, dinkes, gambar1, gambar2, gambar3, gambar4, gambar5, gambar6, gambar7, gambar8, gambar9, gambar10,
    gambar11, gambar12, gambar13, gambar14, gambar15, gambar16, gambar17, gambar18, gambar19, gambar20
} from '../../assets/images';

const listKategori = [
    {
        id: 6,
        logo: gambar1,
        name: 'Lampung'
    },
    {
        id: 7,
        logo: gambar2,
        name: ' Bandar Lampung'
    },
    {
        id: 8,
        logo: gambar3,
        name: 'Provinsi'
    },
    {
        id: 9,
        logo: gambar4,
        name: 'Bisnis'
    },
    {
        id: 10,
        logo: gambar5,
        name: 'Kriminal'
    },
    {
        id: 11,
        logo: gambar6,
        name: 'Pendidikan'
    },
    {
        id: 12,
        logo: gambar7,
        name: 'Internasional'
    },
    {
        id: 13,
        logo: gambar8,
        name: 'Nasional'
    },
    {
        id: 14,
        logo: gambar9,
        name: 'Pertanian'
    },
    {
        id: 15,
        logo: gambar10,
        name: 'Tips'
    },
    {
        id: 16,
        logo: gambar11,
        name: 'Sport'
    },
    {
        id: 17,
        logo: gambar12,
        name: 'Kuliner'
    },
    {
        id: 18,
        logo: gambar13,
        name: 'Seni Budaya'
    },
    {
        id: 19,
        logo: gambar14,
        name: 'Blitz'
    },
    {
        id: 20,
        logo: gambar15,
        name: 'Viral'
    },
    {
        id: 21,
        logo: gambar16,
        name: 'Ekonomi Bisnis'
    },
    {
        id: 22,
        logo: gambar17,
        name: 'Wisata'
    },
    {
        id: 23,
        logo: gambar18,
        name: 'Lifestyle'
    },
    {
        id: 24,
        logo: gambar19,
        name: 'Otomotif'
    },
    {
        id: 15,
        logo: gambar20,
        name: 'Video'
    },



]


const Kategori = () => {
  const { colors } = useTheme();

    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#c4c4c4', height: 50, }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.text }}>
                    Kategori
                </Text>
            </View>
            <ScrollView>

                <Text style={{...styles.titleTxt, color:colors.text}}>Kategori Berita</Text>
                <FlatList
                    data={listKategori}
                    numColumns={4}
                    renderItem={({ item }) => (
                        <View style={{ marginVertical: 10, width: '25%', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ justifyContent: 'center', alignItems:'center', }}>
                                <View style={{ padding: 14, borderRadius: 21, backgroundColor:'white', marginBottom:4, ...styles.shadow }}>
                                    <Image source={item.logo} style={{ width: 14, height: 14, backgroundColor:'white', }} />
                                </View>
                                <Text style={{ fontWeight: '700', fontSize: 10, color:colors.text }} numberOfLines={1} >{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                // ListFooterComponent={<View style={{ marginBottom: 50 }} />}
                />
                <Text style={{...styles.titleTxt, color:colors.text}}>Kerja Sama</Text>
                <View style={{ flexDirection: 'row' }}>

                    <View style={{ paddingHorizontal: 25, marginVertical: 10, width: '25%', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ justifyContent: 'center' }}>
                            <View style={{ padding:10, borderRadius: 21, backgroundColor:'white', marginBottom:4, ...styles.shadow  }}>
                                <Image source={unila} style={{ width: 17, height: 17 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 25, marginVertical: 10, width: '25%', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ justifyContent: 'center' }}>
                            <View style={{ padding: 10, borderRadius: 21, backgroundColor:'white', marginBottom:4, ...styles.shadow  }}>
                                <Image source={kdm} style={{ width: 17, height: 17 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{...styles.titleTxt, color:colors.text}}>Link Terkait</Text>
                <View style={{ flexDirection: 'row' }}>

                    <View style={{ paddingHorizontal: 25, marginVertical: 10, width: '25%', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ justifyContent: 'center' }}>
                            <View style={{ padding: 8, borderRadius: 21, backgroundColor:'white', marginBottom:4, ...styles.shadow  }}>
                                <Image source={disway} style={{ width: 24, height: 24 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{...styles.titleTxt, color:colors.text}}>Informasi Terkait</Text>
                
                <View style={{ flexDirection: 'row' }}>

                    <View style={{ paddingHorizontal: 25, marginVertical: 10, width: '25%', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ justifyContent: 'center' }}>
                            <View style={{ padding: 8, borderRadius: 21, backgroundColor:'white', marginBottom:4, ...styles.shadow  }}>
                                <Image source={corona} style={{ width: 24, height: 24 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 25, marginVertical: 10, width: '25%', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ justifyContent: 'center' }}>
                            <View style={{ padding: 8, borderRadius: 21, backgroundColor:'white', marginBottom:4, ...styles.shadow  }}>
                                <Image source={dinkes} style={{ width: 24, height: 24 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom:100}} />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapIcon: { padding: 10, borderWidth: 1, borderRadius: 50, justifyContent: 'center' },
    shadow:{
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height:-10
        },
        shadowOpacity:0.25,
        shadowRadius:2.5,
        elevation:5
    },
    titleTxt:{
        fontSize:16,
        fontWeight:'700',
        marginLeft:20,
        marginTop:5
    }
})



export default Kategori;