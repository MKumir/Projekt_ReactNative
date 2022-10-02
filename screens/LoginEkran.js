import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { prijavaKorisnika } from '../store/actions/login';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import Tipka from '../components/Tipka';

const LoginEkran = ({navigation}) => {

    const [username, postaviUsername] = useState('')
    const [pass, postaviPass] = useState('')

    const korisnici = useSelector( (state) => state.korisnici.korisnici)
    const logiraniKorisnik = useSelector ( (state) => state.login.korisnik)

    const dispatch = useDispatch()
    const promjenaUsername = (e) => {
        postaviUsername(e)
    }
    const promjenaPass = (e) => {
        postaviPass(e)
    }

    const prijava = () => {
        let prijavljen = false

        korisnici.map(k => {
            if (k.username === username && k.pass === pass) {
                dispatch(prijavaKorisnika(k))
                navigation.navigate(`${k.uloga}`, {
                    ime: k.ime,
                    prezime: k.prezime
                });
                prijavljen = true
            }
        })
        if(prijavljen === false) {
            alert('Neispravni podaci')
        }
        
    }
    
    return (
        <View style={stil.ekran}>
            <View>
                <Text>Korisnicko ime: </Text>
                <TextInput
                    style={stil.unos}
                    value={username}
                    onChangeText={promjenaUsername}
                />
            </View>
            <View>
                <Text>Lozinka: </Text>
                <TextInput
                    style={stil.unos}
                    secureTextEntry={true}
                    value={pass}
                    onChangeText={promjenaPass}
                />
            </View>
            <Tipka
                onPress={() => prijava()}
                title={'Prijavi se'}
                style={stil.tipka}
            />
        </View>
    )
}

const stil = StyleSheet.create({
    ekran: {
        flex: 1,
        backgroundColor: '#F0F8FF',
        justifyContent: 'center',
        padding: Dimensions.get('window').width / 5
    },
    unos: {
        fontSize: 16,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 6,
        paddingTop: '2%',
        paddingBottom: '2%',
        marginTop: 10,
        marginBottom: 20
    },
    tipka: {
        backgroundColor: 'lightgreen',
        marginTop: 20,
    }
})

export default LoginEkran;

