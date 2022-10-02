import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { dodajIsporuku } from '../store/actions/isporuke';
import { View, Text, TextInput, Button, FlatList, StyleSheet, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Tipka from '../components/Tipka';


const UnosIsporukeEkran = () => {

    const dispatch = useDispatch()

    const [unosProizvoda, postaviUnosProizvoda] = useState("")
    const [unosKolicine, postaviUnosKolicine] = useState("")
    const [unosSektora, postaviUnosSektora] = useState("A")
    const [unosStatusa, postaviUnosStatusa] = useState(false)


    const promjenaUnosaProizvoda = (tekst) => {
        postaviUnosProizvoda(tekst)
    }
    const promjenaUnosaKolicine = (broj) => {
        postaviUnosKolicine(broj)
    }
    const promjenaUnosaSektora = (tekst) => {
        postaviUnosSektora(tekst)
    }
    const promjenaUnosaStatusa = (tekst) => {
        postaviUnosStatusa(tekst)
    }

    const novaIsporuka = () =>{
        const noviObjekt = {
            id: Math.random().toString(),
            proizvod: unosProizvoda,
            kolicina: unosKolicine,
            sektor: unosSektora,
            status: unosStatusa
        }
        if(unosProizvoda === '' || unosKolicine < 1)
            alert('Neispravan unos')
            else {
                dispatch(dodajIsporuku(noviObjekt))
                alert('Isporuka je dodana!')
            }
       
        postaviUnosProizvoda('')
        postaviUnosKolicine('')
        postaviUnosSektora('A')
        postaviUnosStatusa(false)
        
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={stil.ekran}
        >
            <View>
                <View>
                    <Text style={stil.tekst}>Proizvod:</Text>
                    <TextInput
                        style={stil.input}
                        placeholder=" Unesi proizvod..."
                        value={unosProizvoda}
                        onChangeText={promjenaUnosaProizvoda}
                    />
                </View>
                <View>
                    <Text style={stil.tekst}>Kolicina:</Text>
                    <TextInput
                        style={stil.input}
                        placeholder=" Unesi kolicinu..."
                        keyboardType='numeric'
                        value={unosKolicine}
                        onChangeText={promjenaUnosaKolicine} />
                </View>
                <View>
                    <Text style={stil.tekst}>Sektor:</Text>
                    <View style={stil.selectSektor}>
                        <Picker selectedValue={unosSektora} onValueChange={promjenaUnosaSektora}>
                            <Picker.Item label='A' value='A' />
                            <Picker.Item label='B' value='B' />
                            <Picker.Item label='C' value='C' />
                        </Picker>
                    </View>
                </View>
                <View>
                    <Text style={stil.tekst}>Status:</Text>
                    <View style={stil.selectStatus}>
                        <Picker selectedValue={unosStatusa} onValueChange={promjenaUnosaStatusa}>
                            <Picker.Item label='neisporuceno' value={false} />
                            <Picker.Item label='isporuceno' value={true} />
                        </Picker>
                    </View>
                </View>
                <Tipka style={stil.tipka} title='Spremi' onPress={() => novaIsporuka()}></Tipka>
            </View>

        </KeyboardAvoidingView>
    )
}


const stil = StyleSheet.create({
    ekran: {
        flex: 1,
        justifyContent: 'center',
        padding: 50,
        backgroundColor: '#F0F8FF'

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
    selectSektor: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: Dimensions.get('window').width / 2.9,
        height: Dimensions.get('window').height / 14,
    },
    selectStatus: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height / 14,
    },
    tekst: {
        marginTop: 20,
        marginBottom: 10
    }
})

export default UnosIsporukeEkran;
