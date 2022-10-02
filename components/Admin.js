import React, { startTransition } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper'


const Admin = ({ admin }) => {
    return (
        <DataTable.Row>
            <DataTable.Cell>{admin.ime}</DataTable.Cell>
            <DataTable.Cell>{admin.prezime}</DataTable.Cell>
            <DataTable.Cell>{admin.uloga}</DataTable.Cell>
            <DataTable.Cell>{admin.username}</DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
        </DataTable.Row>
    )
}

const stil = StyleSheet.create({
    tipka: {
        backgroundColor: 'red'    
    },
    naslov: {
        fontSize: 10,
        fontWeight: 'bold',
    }

})

export default Admin;