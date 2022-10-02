import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { promjenaStatusaIsporuke } from '../store/actions/isporuke';
import { odjavaKorisnika } from '../store/actions/login';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { DataTable } from 'react-native-paper';
import IsporukaRadnik from '../components/IsporukaRadnik';
import Tipka from '../components/Tipka';

const PocetnaRadnikEkran = ({route, navigation}) => { 

    const {ime, prezime} = route.params

    const isporuke = useSelector((state) => state.isporuke.isporuke)
    const neisporuceneIsporuke = isporuke.filter(i => i.status === false)

    const [unosSektora, postaviUnosSektora] = useState('svi')

    const filterNeisporuceneIsporuke = neisporuceneIsporuke.filter( ni => {
        if(unosSektora === 'svi'){
            return ni
        }
        else {
            if(ni.sektor.includes(unosSektora)) {
                return ni
            }
        }
        return null
    })

    const dispatch = useDispatch()

    const promjenaUnosaSektora = (tekst) => {
        postaviUnosSektora(tekst)
    }
    
    const mijenjajStatusIsporuke = (id) => {
        dispatch(promjenaStatusaIsporuke(id))
    }

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
            <View style={stil.filter}>
                <Text style={stil.tekst}>Filtriraj po sektoru:</Text>
                <View style={stil.select}>
                    <Picker selectedValue={unosSektora} onValueChange={promjenaUnosaSektora}>
                        <Picker.Item style={stil.polje} label='svi' value='svi' />
                        <Picker.Item style={stil.polje} label='A' value='A' />
                        <Picker.Item style={stil.polje} label='B' value='B' />
                        <Picker.Item style={stil.polje} label='C' value='C' />
                    </Picker>
                </View>
            </View>
            <DataTable style={stil.prikaz}>
                <DataTable.Header>
                    <DataTable.Title>PROIZVOD</DataTable.Title>
                    <DataTable.Title>KOLICINA</DataTable.Title>
                    <DataTable.Title>SEKTOR</DataTable.Title>
                    <DataTable.Title>___________</DataTable.Title>
                </DataTable.Header>
                <FlatList
                    data={filterNeisporuceneIsporuke}
                    renderItem={el => 
                        <IsporukaRadnik
                            isporuka={el.item}
                            promjenaStatusa={() => mijenjajStatusIsporuke(el.item.id)}
                        />
                    }
                />
             </DataTable>
        </View>
    )
}


const stil = StyleSheet.create({
    glavniEkran: {
      flex: 1,
      backgroundColor: '#F0F8FF',
    },
    ekran: {
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    naslov: {
        marginTop: 30,
        fontSize: 17,
        alignSelf: 'center'
    },
    prikaz: {
        marginTop: 20
    },
    text: {
        fontSize: 16
    },
    username: {
        marginTop: 20,
        fontSize: 16,
        fontStyle: 'italic'
    },
    tipka: {
        alignSelf: 'flex-end',
        backgroundColor: 'lightcoral'
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: Dimensions.get('window').width / 20,
        marginLeft: Dimensions.get('window').width / 10,
        marginRight: Dimensions.get('window').width / 20,
        marginBottom: Dimensions.get('window').width / 30,
    },
    tekst: {
        marginTop: Dimensions.get('window').width / 20,
        marginRight: Dimensions.get('window').width / 20,
    }, 
    select: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: Dimensions.get('window').width / 3.5,
        height: Dimensions.get('window').width / 9
    },
    polje: {
        fontSize: 16,
    },
    
})


export default PocetnaRadnikEkran;