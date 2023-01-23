import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visiblePassword, setVisiblePassword] = useState(true);
    const navigation = useNavigation();

    const visible = () => {
        setVisiblePassword(!visiblePassword);
    };
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Image style={styles.image} source={require("../../../assets/logo.png")} />
                <Text style={styles.title}>LUPA PASSWORD</Text>
                <View style={styles.card}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Masukan Email Yang Terdaftar...."
                            placeholderTextColor="#003f5c"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    
                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.loginText}>LUPA password</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.register_button}>
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>Kembali Ke Halaman </Text>
                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={{ color: '#71DA46', fontWeight: 'bold' }} > Login?</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 10,
        resizeMode: 'contain',
    },
    title: {
        marginBottom: 30,
        fontWeight: 'bold',
        fontSize: 20
    },
    visiblePassword: {
        position: 'absolute',
        right: 10,
        padding: 15,
        zIndex: 999999,

    },
    card: {
        borderColor: '#D4CDCD',
        width: width / 1.2,
        borderWidth: 1,
        padding: 20,
        marginTop: 50,
        alignItems: "center",
        borderRadius: 10
    },
    inputView: {
        width: '100%',
        height: 50,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D4CDCD'
    },
    loginText: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    register_button: {
        marginTop: 20,
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

export default Login