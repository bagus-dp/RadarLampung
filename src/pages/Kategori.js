import React from 'react';
import { View, Image, StyleSheet, Text, TextInput, ScrollView, StatusBar } from 'react-native';
// import lpg from './lpg.png';
// import sgr from './sgr.jpg';
// import bdl from './bdl.png';
// import krm from './krm.jpg';
// import bsn from './bsn.jpg';
// import tips from './tips.png';
// import prtn from './prtn.png';
// import nsnl from './nsnl.png';
// import inn from './inn.jpg';
// import pdd from './pdd.png';
// import unila from './unila.png';
// import kdm from './kdm.jpg';
// import disway from './disway.jpg';
// import corona from './corona.jpg';
// import dinkes from './dinkes.png';
import { lpg, sgr, bdl, krm, bsn, tips, prtn, nsnl, inn, pdd, unila, kdm, disway, corona, dinkes } from '../../assets/images';


const Kategori = () => {
    return (
        <ScrollView>
            <StatusBar />
            <View style={styles.border}>
                <Text style={styles.borderk}>Kategori</Text>
            </View>
            <Text style={styles.ktb}>KATEGORI BERITA</Text>
            <View style={styles.kate}>
                <Image source={bsn} style={styles.img} resizeMode='contain' />
                <Image source={krm} style={styles.img} resizeMode='contain' />
                <Image source={sgr} style={styles.img} resizeMode='contain' />
                <Image source={lpg} style={styles.img} resizeMode='contain' />
                <Image source={bdl} style={styles.img} resizeMode='contain' />

            </View>

            <View style={styles.kate}>
                <Image source={tips} style={styles.img} resizeMode='contain' />
                <Image source={prtn} style={styles.img} resizeMode='contain' />
                <Image source={nsnl} style={styles.img} resizeMode='contain' />
                <Image source={inn} style={styles.img} resizeMode='contain' />
                <Image source={pdd} style={styles.img} resizeMode='contain' />
            </View>

            <Text style={styles.ktb}>KERJA SAMA</Text>
            <View style={styles.kerma}>
                <Image source={bdl} style={styles.img} resizeMode='contain' />
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
        marginTop:18
    },
    kate: {
        flexDirection: 'row',
        marginTop: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginRight: 40
    },
    img: {
        width: 40,
        height: 60,
        marginLeft: 25,
        marginTop: 15,
        marginBottom: 20
    },
    kerma: {
        flexDirection: 'row',
        marginTop: 20,
    }
})



export default Kategori;