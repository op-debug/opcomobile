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


const Sales = () => {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <IconMenu />

                <View style={styles.inputViewSearch} >
                    <TextInput style={styles.TextInput}
                        placeholder="Cari Barang...."
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
                <Categori />
                <ListProduct />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TextInput: {
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
        marginTop: 30,
        borderWidth: 0.5,
        borderColor: '#000000',
    },
    basketView: {
        marginTop: 25,
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