import {
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native"
import IconMenu from "../../component/IconMenu"
import Categori from "./component/Category"
import ListProduct from "./component/ListProduct"
import Icon from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from "react";

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const Sales = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <IconMenu />

                <View style={styles.inputViewSearch} >
                    <TextInput style={styles.TextInput}
                        placeholder="Cari...."
                        placeholderTextColor="#000000" />
                </View>
                <View style={styles.basketView}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <View style={{
                            marginTop: 20,
                            width: 23,
                            backgroundColor: '#006400',
                            borderRadius: 15,
                            position: 'absolute',
                            zIndex: 999999,
                            borderColor: "#fff",
                            borderWidth: 2,
                            alignItems: "center",
                        }}><Text
                            style={{
                                color: "#fff",
                                fontWeight: 'bold'
                            }}
                        >0</Text></View>
                        <Icon
                            name={'basket'}
                            size={40}
                            color={'#006400'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={styles.inputView}>
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
                        placeholder={!isFocus ? 'Pilih Pelanggan' : '...'}
                        searchPlaceholder="Cari Pelanggan..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}

                    />
                </View>
            </View>
            <View>
                <Categori />
                <ListProduct />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        height: 30,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    inputView: {
        width: '90%',
        marginLeft: 20,
        marginTop: 10,
        borderWidth: 0.5,
        borderColor: '#000000',
    },
    inputViewSearch: {
        width: '65%',
        height: 40,
        marginLeft: 15,
        marginTop: 40,
        borderWidth: 0.5,
        borderColor: '#000000',
    },
    basketView: {
        marginTop: 35,
        marginLeft: 10
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

export default Sales