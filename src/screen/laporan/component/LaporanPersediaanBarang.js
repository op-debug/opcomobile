import * as React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { DataTable } from 'react-native-paper';

const LaporanPersediaanBarang = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>LAPORAN PERSEDIAAN BARANG</Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title >Barang</DataTable.Title>
                    <DataTable.Title numeric sortDirection="descending">
                        Stok
                    </DataTable.Title>
                    <DataTable.Title numeric>HPP</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                    <DataTable.Cell numeric>159</DataTable.Cell>
                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
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

export default LaporanPersediaanBarang