import React, { startTransition } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper'
import Tipka from './Tipka';


const Isporuka = ({ isporuka, brisanje, promjenaStatusa}) => {
    return (
        <DataTable.Row style={ isporuka.status ? stil.prikazIsp : stil.prikazNeisp}>
            <DataTable.Cell>{isporuka.proizvod}</DataTable.Cell>
            <DataTable.Cell>{isporuka.kolicina}</DataTable.Cell>
            <DataTable.Cell>{isporuka.sektor}</DataTable.Cell>
            <DataTable.Cell>
                <Tipka
                    style={stil.tipkaBrisi}
                    stilNaslov={stil.naslov}
                    title='BRIŠI'
                    onPress={brisanje}
                />
                
            </DataTable.Cell>
            <DataTable.Cell>
                <Tipka
                    style={isporuka.status ? stil.tipkaPromijeniIsp : stil.tipkaPromijeniNeisp}
                    stilNaslov={stil.naslov}
                    title='Promijeni'
                    onPress={promjenaStatusa}
                />
            </DataTable.Cell>
        </DataTable.Row>
    )
}

const stil = StyleSheet.create({
    prikazIsp: {
        backgroundColor: '#85C1E9'
    },
    prikazNeisp: {
        backgroundColor: '#FFE5B4'
    },
    tipkaBrisi: {
        backgroundColor: 'orange'    
    },
    tipkaPromijeniIsp: {
        backgroundColor: '#FFE5B4'
    },
    tipkaPromijeniNeisp: {
        backgroundColor: '#85C1E9'
    },
    naslov: {
        fontSize: 11,
        fontWeight: 'bold',
    },


})

export default Isporuka;