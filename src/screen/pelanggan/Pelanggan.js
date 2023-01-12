import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native"
import IconMenu from '../../component/IconMenu';
import ListPelanggan from './component/listpelanggan';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const Pelanggan = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <IconMenu />
            <View style={styles.listPelanggan}>
                <ListPelanggan />
            </View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('FormPelanggan')}
                style={styles.TouchableOpacityStyle} >
                <Icon name="ios-add-circle" size={60} color="#9ACD32" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    listPelanggan: {
        flex: 1,
        alignItems: 'center',
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        right: 5,
        bottom: 5,
    },
})


export default Pelanggan