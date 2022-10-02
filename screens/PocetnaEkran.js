import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Tipka from '../components/Tipka';

const PocetnaEkran = ({navigation}) => {

    return (
        <View style={stil.ekran}> 
            <Text style={stil.naslov}>SKLADIŠTE</Text>
            <Tipka style={stil.tipka} title="Prijava" onPress={() => navigation.navigate('Login')}/>
        </View>
    )
}

const stil = StyleSheet.create({
    ekran: {
        flex: 1,
        justifyContent: 'center',
        padding: Dimensions.get('window').width / 4,
        backgroundColor: '#F0F8FF',
    },
    naslov: {
        fontSize: 26,
        alignSelf: 'center',
        marginBottom: 40,
    },
    tipka: {
        marginTop: 20,
        backgroundColor: '#87CEEB',
        marginBottom: 30,
    }
})

export default PocetnaEkran;