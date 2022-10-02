import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { odjavaKorisnika } from '../store/actions/login';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Tipka from '../components/Tipka';

const PocetnaPoslovodaEkran = ({ route, navigation }) => {

    const {ime, prezime} = route.params

    const dispatch = useDispatch()

    const odjava = () => {
        dispatch(odjavaKorisnika())
        navigation.navigate('Skladiste')
    }

    return (
        <View style={stil.glavniEkran}>
            <View style={stil.ekran}>
                <View>
                    <Text style={stil.text}>Prijavljeni ste kao:</Text>
                    <Text style={stil.username}>{ime} {prezime}</Text>
                </View>
                <Tipka
                    style={stil.tipka}
                    title="Odjavi se"
                    onPress={() => odjava()}
                />
            </View>
            <Tipka
                onPress={() => {
                    navigation.navigate('UnosIsporuke')      
                }}
                title={'UNOS ISPORUKA'}
                style={stil.isporukeTipka}
                stilNaslov={stil.stilNaslov}
            />
            <Tipka
                onPress={() => {
                    navigation.navigate('PrikazIsporuka')      
                }}
                title={'ISPORUKE'}
                style={stil.isporukeTipka}
                stilNaslov={stil.stilNaslov}
            />
        </View>

    );
}


const stil = StyleSheet.create({
    glavniEkran: {
        flex: 1,
        backgroundColor: '#F0F8FF',
    },
    ekran: {
        padding: Dimensions.get('window').width / 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tipka: {
        alignSelf: 'flex-end',
        backgroundColor: 'lightcoral'
    },
    text: {
        fontSize: 16
    },
    username: {
        marginTop: 20,
        fontSize: 16,
        fontStyle: 'italic'
    },
    isporukeTipka: {
        marginTop: 100,
        width: 300,
        height: 110,
        alignSelf: 'center',
        backgroundColor: '#A3E4D7'
    },
    stilNaslov: {
        fontSize: 18
    }

})

export default PocetnaPoslovodaEkran;