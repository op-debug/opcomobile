import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Image,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { server } from '../../constants/init';
import * as api from '../../services/api';
import { UserContext } from '../../context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visiblePassword, setVisiblePassword] = useState(true);
    const navigation = useNavigation();
    const {dispatch} = useContext(UserContext);

    const visible = () => {
        setVisiblePassword(!visiblePassword);
    };

    const onLogin = async () => {
        const url = `${server.url}/auth/login`;
        if (email == "") {
            Alert.alert("Error", "Isi email terlebih dahulu")
        }
        else if (password == "") {
            Alert.alert("Error", "Isi password terlebih dahulu")
        }
        else {
            try {
                const sendReq = await api.POST(url,'' ,{ ...{ username: email, password: password } });
                let dataUser = { sendReq, isLoggedIn: true };
                AsyncStorage.setItem('dataLogin', JSON.stringify(dataUser));
                dispatch({ type: 'USER_LOGIN', login: dataUser });
            }
            catch (e) {
                Alert.alert("Error", "Gagal Login Email / Password salah");
            }
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Image style={styles.image} source={require("../../../assets/logo.png")} />
                <Text style={styles.title}>Login</Text>
                <View style={styles.card}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Email."
                            placeholderTextColor="#003f5c"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Password."
                            placeholderTextColor="#003f5c"
                            secureTextEntry={visiblePassword}
                            onChangeText={(password) => setPassword(password)}

                        />
                        <TouchableOpacity onPress={visible} style={styles.visiblePassword}>
                            <Icon
                                name={visiblePassword ? 'ios-eye' : 'ios-eye-off'}
                                size={20}
                                color={'#000'}
                            />
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={onLogin}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.register_button}>
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>Belum Punya Akun?, </Text>
                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={{ color: '#71DA46', fontWeight: 'bold' }} > Klik disini</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                    <Text style={styles.forgot_button}>
                        <View>
                            <Text style={{ fontWeight: 'bold' }}> Lupa Password?,</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text style={{ color: '#71DA46', fontWeight: 'bold' }} > Klik Disini</Text>
                        </TouchableOpacity>
                    </Text>
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