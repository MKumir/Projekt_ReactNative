import React, { startTransition } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, DataTable } from 'react-native-paper'
import Tipka from './Tipka';


const Korisnik = ({ korisnik, brisanje,sakrij }) => {
    return (
        <DataTable.Row>
            <DataTable.Cell>{korisnik.ime}</DataTable.Cell>
            <DataTable.Cell>{korisnik.prezime}</DataTable.Cell>
            <DataTable.Cell>{korisnik.uloga}</DataTable.Cell>
            <DataTable.Cell>{korisnik.username}</DataTable.Cell>
            <DataTable.Cell>
                <Tipka
                    style={stil.tipka}
                    stilNaslov={stil.naslov}
                    title='BRIŠI'
                    onPress={brisanje}
                />
            </DataTable.Cell>
        </DataTable.Row>
    )
}

const stil = StyleSheet.create({
    ekran: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    lista: {
        padding: 10,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1,

    },
    tipka: {
        backgroundColor: 'red',   
    },
    naslov: {
        fontSize: 11,
        fontWeight: 'bold',
        color: 'black'
    }
    
})

export default Korisnik;