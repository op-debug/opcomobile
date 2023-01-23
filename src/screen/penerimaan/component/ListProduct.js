import {
    View,
    FlatList,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native"


const dataProduk = [
    {
        id: "1",
        nama: "Kratingdeng",
        harga: "25000",
        qty: 5,
        imgUrl: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: "2",
        nama: "Kratingdeng",
        harga: "25000",
        qty: 5,
        imgUrl: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: "3",
        nama: "Kratingdeng",
        harga: "25000",
        qty: 5,
        imgUrl: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: "4",
        nama: "Kratingdeng",
        harga: "25000",
        qty: 5,
        imgUrl: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: "5",
        nama: "Kratingdeng",
        harga: "25000",
        qty: 5,
        imgUrl: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: "6",
        nama: "Kratingdeng",
        harga: "25000",
        qty: 5,
        imgUrl: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: "7",
        nama: "Kratingdeng",
        harga: "25000",
        qty: 5,
        imgUrl: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: "8",
        nama: "Kratingdeng",
        harga: "25000",
        qty: 5,
        imgUrl: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: "9",
        nama: "Kratingdeng",
        harga: "25000",
        qty: 5,
        imgUrl: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]


const content = ({ item }) => {
    return (
        <TouchableOpacity style={styles.listProduct}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{
                    width: 50
                }}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{ uri: item.imgUrl }} />

                </View>
                <View style={{ marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>NAMA </Text>
                            <Text>HARGA </Text>
                            <Text>QTY </Text>
                        </View>
                        <View>
                            <Text style={{fontWeight: 'bold'}}>: {item.nama}</Text>
                            <Text>: {item.harga}</Text>
                            <Text>: {item.qty}</Text>
                        </View>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}

const ListProduct = () => {
    return (
        <View>
            <FlatList
                data={dataProduk}
                renderItem={content}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                style={{
                    marginRight: 10
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listProduct: {
        borderColor: '#008000',
        padding: 5,
        borderBottomWidth: 1,
        marginLeft: 20,
        marginTop: 20,
    }
})

export default ListProduct