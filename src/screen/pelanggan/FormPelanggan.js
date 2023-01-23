import React, { useContext, useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Text,
    Pressable,
    Alert
} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { UserContext } from '../../context/UserContext';
import { server } from '../../constants/init';
import * as api from '../../services/api';


const { width } = Dimensions.get('window');
const FormPelanggan = () => {
    const { login } = useContext(UserContext);
    const [nama, setNama] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [alamat, setAlamat] = useState('');
    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        if (route.params) {
            const { data } = route.params;
            setNama(data.nama)
            setId(data.id)
            setEmail(data.email)
            setPhone(data.phone)
            setAlamat(data.alamat)
        }
    }, []);

    const save = async () => {
        try {

            const data = {
                profile_type: "",
                company_name: "",
                contact_name: nama,
                contact_email: email,
                contact_phone: phone,
                country: "",
                city: "",
                state: "",
                zip: "",
                address: alamat,
                facebook: "",
                twitter: "",
                linkedin: "",
                remarks: "",
                contact_image: "",
                group_id: 0,
                user_id: 0
            }
            if (id && id != "") {
                const url = `${server.url}/contacts/${id}`;
                const sendReq = await api.PATCH(url, 'Bearer ' + login.sendReq.token, data);
                if (sendReq) {
                    Alert.alert("Success", "Data berhasil diubah")
                }
            }
            else {
                const url = `${server.url}/contacts`;
                const sendReq = await api.POST(url, 'Bearer ' + login.sendReq.token, data);
                if (sendReq) {
                    Alert.alert("Success", "Data berhasil disimpan")
                }
            }
        }
        catch (e) {
            Alert.alert("Error", "Gagal Simpan")
        }
    }


    return (
        <View>
            <Pressable
                onPress={() => navigation.goBack(null)}
            >
                <Icon
                    name={'arrow-back'}
                    size={50}
                    color={'#000'}
                    style={{ marginTop: 30, marginLeft: 20 }} />
            </Pressable>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>Form Pelanggan</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Nama"
                                value={nama}
                                placeholderTextColor="#003f5c"
                                onChangeText={(nama) => setNama(nama)}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="email"
                                value={email}
                                placeholderTextColor="#003f5c"
                                onChangeText={(email) => setEmail(email)}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="No Hp"
                                value={phone}
                                placeholderTextColor="#003f5c"
                                onChangeText={(phone) => setPhone(phone)}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Alamat"
                                value={alamat}
                                placeholderTextColor="#003f5c"
                                onChangeText={(alamat) => setAlamat(alamat)}
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.loginBtn}
                            onPress={save}
                        >
                            <Text style={styles.loginText}>SMIPAN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    inputView: {
        width: '100%',
        height: 50,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D4CDCD',
    },
    card: {
        borderColor: '#D4CDCD',
        width: width / 1.1,
        borderWidth: 1,
        padding: 20,
        marginTop: 50,
        alignItems: "center",
        borderRadius: 10
    },
    loginText: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    loginBtn: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#71DA46",
    },
})

export default FormPelanggan
