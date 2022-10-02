import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { dodajKorisnika } from '../store/actions/korisnici';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Dimensions} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Tipka from '../components/Tipka';


const UnosKorisnikaEkran = () => {

    const [unosIme, postaviUnosIme] = useState("")
    const [unosPrezime, postaviUnosPrezime] = useState("")
    const [unosUloga, postaviUnosUloga] = useState("radnik")
    const [unosUsername, postaviUnosUsername] = useState("")
    const [unosPass, postaviUnosPass] = useState("")
    

    const promjenaUnosaIme = (tekst) => {
        postaviUnosIme(tekst)
    }
    const promjenaUnosaPrezime = (tekst) => {
        postaviUnosPrezime(tekst)
    }
    const promjenaUnosaUloga = (tekst) =>{
        postaviUnosUloga(tekst)
    }
    const promjenaUnosaUsername = (tekst) =>{
        postaviUnosUsername(tekst)
    }
    const promjenaUnosaPass = (tekst) =>{
        postaviUnosPass(tekst)
    }

    const dispatch = useDispatch()

    const noviKorisnik = () =>{
        const noviObjekt = {
            id: Math.random().toString(),
            ime: unosIme,
            prezime: unosPrezime,
            uloga: unosUloga,
            username: unosUsername,
            pass: unosPass
        }
        if(unosIme.length < 2 || unosPrezime.length < 3 || unosUsername.length < 5 || unosPass.length < 5)
            alert('Neispravan unos')
            else {
                dispatch(dodajKorisnika(noviObjekt))
                alert('Korisnik je dodan!')
            }
        postaviUnosIme('')
        postaviUnosPrezime('')
        postaviUnosUloga('radnik')
        postaviUnosUsername('')
        postaviUnosPass('')
        
    }

    return (  
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={stil.ekran}
        >
            <View style={stil.prikaz}>
                <View>
                    <Text style={stil.tekst}>Ime:</Text>
                    <TextInput
                        style={stil.input}
                        placeholder=" Unesi ime..."
                        value={unosIme}
                        onChangeText={promjenaUnosaIme}
                    />
                </View>
                <View>
                    <Text style={stil.tekst}>Prezime:</Text>
                    <TextInput
                        style={stil.input}
                        placeholder=" Unesi prezime..."
                        value={unosPrezime}
                        onChangeText={promjenaUnosaPrezime}
                    />
                </View>
                <View>
                    <Text style={stil.tekst}>Uloga:</Text>
                    <View style={stil.select}>
                        <Picker selectedValue={unosUloga} onValueChange={promjenaUnosaUloga}>
                            <Picker.Item label='radnik' value='radnik' />
                            <Picker.Item label='poslovoda' value='poslovoda' />
                        </Picker>
                    </View>
                </View>
                <View>
                    <Text style={stil.tekst}>Korisnicko ime:</Text>
                    <TextInput
                        style={stil.input}
                        placeholder=" Unesi korisnicko ime..."
                        value={unosUsername}
                        onChangeText={promjenaUnosaUsername}
                    />
                </View>
                <View>
                    <Text style={stil.tekst}>Lozinka:</Text>
                    <TextInput
                        style={stil.input}
                        placeholder=" Unesi lozinku..."
                        value={unosPass}
                        onChangeText={promjenaUnosaPass}
                    />
                </View>
                <Tipka style={stil.tipka} title='Spremi' onPress={() => noviKorisnik()}></Tipka>
            </View>
        </KeyboardAvoidingView>
        
    )
}

const stil = StyleSheet.create({
    ekran: {
        flex: 1,
        justifyContent: 'center',
        padding: 50,
        backgroundColor: '#F0F8FF',
    },
    prikaz: {
        height: Dimensions.get('window').height / 1.25
    },
    tipka: {
        backgroundColor: 'lightblue',
        marginTop: 60
    },
    input: {
        height: 60,
        fontSize: 16,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        height: 50
    },
    select: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: Dimensions.get('window').width / 2.9,
        height: Dimensions.get('window').height / 14,
        
    },
    tekst: {
        marginTop: 20,
        marginBottom: 10
    }
})

export default UnosKorisnikaEkran;
