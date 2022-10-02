import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { brisanjeIsporuke, promjenaStatusaIsporuke } from '../store/actions/isporuke';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { DataTable } from 'react-native-paper';
import Isporuka from '../components/Isporuka'

const PrikazIsporuka = (props) => { 

    const isporuke = useSelector((state) => state.isporuke.isporuke)
    const [unosSektora, postaviUnosSektora] = useState('svi')
    const [unosProizvoda, postaviUnosProizvoda] = useState('')

    const filtriraneIsporuke = isporuke.filter( i => {
        if(unosSektora === 'svi'){
            return i
        }
        else {
            if(i.sektor.includes(unosSektora)) {
                return i
            }
        }
        return null
    })

    const filtriraneIsporukePoProizvodu = filtriraneIsporuke.filter( fi => {
        if(unosProizvoda === ''){
            return fi
        }
        else {
            if(fi.proizvod.includes(unosProizvoda)) {
                return fi
            }
        }
        return null
    })


    const promjenaUnosaSektora = (tekst) => {
        postaviUnosSektora(tekst)
    }

    const promjenaUnosaProizvoda = (tekst) => {
        postaviUnosProizvoda(tekst)
    }

    const dispatch = useDispatch()

    const brisiIsporuku = (id) => {
        dispatch(brisanjeIsporuke(id))
    }
    
    const mijenjajStatusIsporuke = (id) => {
        dispatch(promjenaStatusaIsporuke(id))
    }

    return (
        <View style={stil.ekran}>
            <View style={stil.pretrazi}>
                <TextInput
                    style={stil.input}
                    placeholder=" Pretrazi po proizvodu..."
                    value={unosProizvoda}
                    onChangeText={promjenaUnosaProizvoda}
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
                    <DataTable.Title>___________</DataTable.Title>
                </DataTable.Header>
                <FlatList
                    data={filtriraneIsporukePoProizvodu}
                    renderItem={el =>
                        <Isporuka
                            isporuka={el.item}
                            brisanje={() => brisiIsporuku(el.item.id)}
                            promjenaStatusa={() => mijenjajStatusIsporuke(el.item.id)}
                        />
                    }
                />
            </DataTable>
        </View>
    )
}


const stil = StyleSheet.create({
    ekran: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F0F8FF',
    },
    naslov: {
        marginTop: 30,
        fontSize: 17,
        alignSelf: 'center'
    },
    prikaz: {
        marginTop: 20
    },
    select: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: Dimensions.get('window').width / 3.5,
        height: Dimensions.get('window').width / 9,
        marginRight: Dimensions.get('window').width / 5,
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: Dimensions.get('window').width / 13,
        marginLeft: Dimensions.get('window').width / 10,
        marginRight: Dimensions.get('window').width / 20,
        marginBottom: Dimensions.get('window').width / 50,
    },
    polje: {
        fontSize: 16,
    },
    tekst: {
        marginTop: Dimensions.get('window').width / 20,
        marginLeft: Dimensions.get('window').width / 10,
        marginRight: Dimensions.get('window').width / 20,
    }, 
    pretrazi: {
        fontSize: 16,
        borderColor: '#87cefa',
        borderWidth: 2,
        borderRadius: 20,
        marginTop: 30,
        height: 40,
        width: 200
    }
})


export default PrikazIsporuka;