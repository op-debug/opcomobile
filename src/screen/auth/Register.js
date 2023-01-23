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
import { Dropdown } from 'react-native-element-dropdown';

const { width } = Dimensions.get('window');

const data = [
    { label: 'POS', value: '1' },
    { label: 'TRADING', value: '2' },
    { label: 'INTEGRATED', value: '3' },
];

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visiblePassword, setVisiblePassword] = useState(true);
    const navigation = useNavigation();
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const visible = () => {
        setVisiblePassword(!visiblePassword);
    };


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Image style={styles.image} source={require("../../../assets/logo.png")} />
                <Text style={styles.title}>Register</Text>
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
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Cabang."
                            placeholderTextColor="#003f5c"
                        />
                    </View>
                    <View style={{
                        width: '100%',
                        marginBottom: 20,
                        borderRadius: 10
                    }}>
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Jenis Langganan' : '...'}
                            searchPlaceholder="Jenis Langganan..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}

                        />
                    </View>
                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.loginText}>REGISTER</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.register_button}>
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>Sudah Punya Akun?, </Text>
                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={{ color: '#71DA46', fontWeight: 'bold' }} > Login</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView >
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
    dropdown: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})


export default Register