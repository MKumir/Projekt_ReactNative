import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { brisanjeKorisnika } from '../store/actions/korisnici';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import Korisnik from '../components/Korisnik'
import Admin from '../components/Admin';

const PrikazKorisnika = (props) => { 

    const pocetniKorisnici = useSelector((state) => state.korisnici.korisnici)

    const dispatch = useDispatch()

    const brisiKorisnika = (id) => {
        dispatch(brisanjeKorisnika(id))
    }

    return (
        <View style={stil.ekran}>
            <DataTable style={stil.prikaz}>
                <DataTable.Header>
                    <DataTable.Title>IME</DataTable.Title>
                    <DataTable.Title>PREZIME</DataTable.Title>
                    <DataTable.Title>ULOGA</DataTable.Title>
                    <DataTable.Title>USERNAME</DataTable.Title>
                    <DataTable.Title>_________</DataTable.Title>
                </DataTable.Header>
                <FlatList
                    data={pocetniKorisnici}
                    renderItem={el => (
                        el.item.uloga === 'admin' 
                        ? ( <Admin 
                                admin={el.item}
                            />
                        )
                        : ( <Korisnik  
                                korisnik={el.item}
                                brisanje={() => brisiKorisnika(el.item.id)}
                            />
                        )
                    )}
                />
             </DataTable>
        </View>
    )
}


const stil = StyleSheet.create({
    ekran: {
        flex: 1,
        backgroundColor: '#F0F8FF',
    },
    prikaz: {
        marginTop: 20
    },
    naslov: {
        marginTop: 30,
        fontSize: 17,
        alignSelf: 'center'
    }
})


export default PrikazKorisnika;