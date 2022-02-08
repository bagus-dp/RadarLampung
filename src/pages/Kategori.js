import React from 'react';
import { View, Image, StyleSheet, Text, TextInput, ScrollView, StatusBar } from 'react-native';
import {
    unila, kdm, disway, corona, dinkes, gambar1, gambar2, gambar3, gambar4, gambar5, gambar6, gambar7, gambar8, gambar9, gambar10,
    gambar11, gambar12, gambar13, gambar14, gambar15, gambar16, gambar17, gambar18, gambar19, gambar20
} from '../../assets/images';


const Kategori = () => {
    return (
        <ScrollView>
            <StatusBar />
            <View style={styles.border}>
                <Text style={styles.borderk}>Kategori</Text>
            </View>
            <Text style={styles.ktb}>KATEGORI BERITA</Text>
            <View style={styles.kate}>
                <Image source={gambar1} style={styles.img} resizeMode='contain' />
                <Image source={gambar2} style={styles.img} resizeMode='contain' />
                <Image source={gambar3} style={styles.img} resizeMode='contain' />
                <Image source={gambar4} style={styles.img} resizeMode='contain' />
                <Image source={gambar5} style={styles.img} resizeMode='contain' />
            </View>
            {/* <View style={{flexDirection:'row', marginTop:-15, marginRight:40,}}>
                <Text>bdl</Text>
                <Text>bdl</Text>
                <Text>bdl</Text>
                <Text>bdl</Text>
                <Text>bdl</Text>
            </View>  */}

            <View style={styles.kate}>
                <View style={{justifyContent:'center'}}>
                    <View style={styles.wrapIcon}>
                        <Image source={gambar6} style={styles.img} resizeMode='contain' />
                    </View>
                    <Text>kategori</Text>
                </View>
                <View style={styles.wrapIcon}>
                    <Image source={gambar7} style={styles.img} resizeMode='contain' />
                </View>
                <View style={styles.wrapIcon}>
                    <Image source={gambar8} style={styles.img} resizeMode='contain' />

                </View>
                <View style={styles.wrapIcon}>
                    <Image source={gambar9} style={styles.img} resizeMode='contain' />

                </View>
                <View style={styles.wrapIcon}>
                    <Image source={gambar10} style={styles.img} resizeMode='contain' />

                </View>
            </View>

            <View style={styles.kate}>
                <Image source={gambar11} style={styles.img} resizeMode='contain' />
                <Image source={gambar12} style={styles.img} resizeMode='contain' />
                <Image source={gambar13} style={styles.img} resizeMode='contain' />
                <Image source={gambar14} style={styles.img} resizeMode='contain' />
                <Image source={gambar15} style={styles.img} resizeMode='contain' />
            </View>

            <View style={styles.kate}>
                <Image source={gambar16} style={styles.img} resizeMode='contain' />
                <Image source={gambar17} style={styles.img} resizeMode='contain' />
                <Image source={gambar18} style={styles.img} resizeMode='contain' />
                <Image source={gambar19} style={styles.img} resizeMode='contain' />
                <Image source={gambar20} style={styles.img} resizeMode='contain' />
            </View>

            <Text style={styles.ktb}>KERJA SAMA</Text>
            <View style={styles.kerma}>
                <Image source={kdm} style={styles.img} resizeMode='contain' />
                <Image source={unila} style={styles.img} resizeMode='contain' />
            </View>

            <Text style={styles.ktb}>LINK TERKAIT</Text>
            <View style={{ flexDirection: 'row' }}>
                <Image source={disway} style={{ width: 100, height: 80, marginTop: 15, marginLeft: 20 }} resizeMode='contain' />
            </View>

            <Text style={styles.ktb}>INFORMASI COVID</Text>
            <View style={{ flexDirection: 'row' }}>
                <Image source={corona} style={{ width: 100, height: 80, marginTop: 15 }} resizeMode='contain' />
                <Image source={dinkes} style={{ width: 100, height: 80, marginTop: 15 }} resizeMode='contain' />
            </View>
        </ScrollView>
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
    borderk: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0057A1',
        marginLeft: 12,
        marginTop: 25
    },
    ktb: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0057A1',
        marginLeft: 12,
        marginTop: 18
    },
    kate: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 12,
    },
    img: {
        width: 24,
        height: 24,

    },
    kerma: {
        flexDirection: 'row',
        marginTop: 20,
    },
    wrapIcon: { padding: 10, borderWidth: 1, borderRadius: 50, justifyContent: 'center' }
})



export default Kategori;