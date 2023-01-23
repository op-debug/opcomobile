
import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Alert
} from 'react-native';
import { UserContext } from '../../../context/UserContext';
import { server } from '../../../constants/init';
import * as api from '../../../services/api';
import ActionButton from './ActionButton';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');



const ListPelanggan = () => {
    const { login } = useContext(UserContext);
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [showAction, setShowAction] = useState(false);
    const [selectedData, setSelectedData] = useState({});
    const navigation = useNavigation();

    useEffect(() => {
        getDataPelanggan();
    }, []);

    const onSelected = (item) => {
        setShowAction(true);
        setSelectedData({ ...item });
    };


    const getDataPelanggan = async () => {
        try {
            const url = `${server.url}/contacts`;
            const sendReq = await api.GET(url, 'Bearer ' + login.sendReq.token);
            const pelanggan = sendReq.message.map((dataPelanggan) => {
                return (
                    {
                        id: dataPelanggan.id,
                        nama: dataPelanggan.contact_name,
                        email: dataPelanggan.contact_email,
                        no_telp: dataPelanggan.contact_phone
                    }
                )
            })
            setData([...pelanggan]);
            setRefreshing(false)
        }
        catch (e) {
            Alert.alert(e)
        }
    };

    const onUpdate = () => {
        setShowAction(false);
        const detailUser = { ...selectedData };
        navigation.navigate('FormPelanggan', { data: detailUser });
    };

    const onDelete = async () => {
        try {
            setShowAction(false);
            const pelangganID = selectedData.id;
            const url = `${server.url}/contacts/${pelangganID}`;
            const reqData = await api.DELETE(url, 'Bearer ' + login.sendReq.token);
            if (!reqData.error) {
                Alert.alert("Success", 'Berhasil Menghapus Data');
                return getDataPelanggan();
            }

            Alert.alert("Error", 'Terjadi Kesalahan');
        } catch (error) {
            alert(error);
        }
    };

    const Item = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => onSelected(item)}>
                <View style={styles.listPiutang} width={Dimensions.get("window").width - 50}>
                    <View>
                        <Text style={styles.label}>Nama</Text>
                        <Text style={styles.label}>Email</Text>
                        <Text style={styles.label}>No.Telp</Text>
                    </View>
                    <View>
                        <Text>: {item.nama}</Text>
                        <Text>: {item.email}</Text>
                        <Text>: {item.no_telp}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }
    
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
                refreshing={refreshing}
                onRefresh={() => {
                    setRefreshing(true)
                    getDataPelanggan()
                }}
            />
            <ActionButton
                visible={showAction}
                onRequestClose={() => setShowAction(false)}
                onUpdate={onUpdate}
                onDelete={onDelete}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listPiutang: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.5)',
        padding: 20,
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#cacaca',
        borderRadius: 20,
    },
    label: {
        width: width / 2,
    },
})

export default ListPelanggan