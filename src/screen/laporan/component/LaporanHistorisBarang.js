import * as React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { DataTable } from 'react-native-paper';


const LaporanHistorisBarang =()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.label}>LAPORAN HISTORIS BARANG</Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title >FAKTUR</DataTable.Title>
                    <DataTable.Title >TANGGAL</DataTable.Title>
                    <DataTable.Title numeric sortDirection="descending">
                        MASUK
                    </DataTable.Title>
                    <DataTable.Title numeric>KELUAR</DataTable.Title>
                    <DataTable.Title numeric>AKHIR</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>PI000001</DataTable.Cell>
                    <DataTable.Cell>12/01/2020</DataTable.Cell>
                    <DataTable.Cell numeric>5</DataTable.Cell>
                    <DataTable.Cell numeric>0</DataTable.Cell>
                    <DataTable.Cell numeric>5</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>SI000001</DataTable.Cell>
                    <DataTable.Cell>12/01/2020</DataTable.Cell>
                    <DataTable.Cell numeric>0</DataTable.Cell>
                    <DataTable.Cell numeric>4</DataTable.Cell>
                    <DataTable.Cell numeric>1</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Pagination
                    page={1}
                    numberOfPages={3}
                    onPageChange={(page) => {
                    }}
                    label="1-2 of 6"
                />
            </DataTable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        top: 50,
        alignItems: "center",
    },
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20


    }
})

export default LaporanHistorisBarang