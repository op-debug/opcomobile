import * as React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Text,
    Pressable
} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');
const FormPelanggan = () => {
    const navigation = useNavigation();
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
                                placeholderTextColor="#003f5c"
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="email"
                                placeholderTextColor="#003f5c"
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="No Hp"
                                placeholderTextColor="#003f5c"
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Alamat"
                                placeholderTextColor="#003f5c"
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Alamat"
                                placeholderTextColor="#003f5c"
                            />
                        </View>
                        
                        <TouchableOpacity
                            style={styles.loginBtn}
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
