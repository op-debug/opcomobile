import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    FlatList
} from "react-native"

const dataCategori = [
    {
        id: "1",
        name: "Makanan"
    },
    {
        id: "2",
        name: "Minuman"
    },
    {
        id: "3",
        name: "Minuman"
    },
    {
        id: "4",
        name: "Minuman"
    },
    {
        id: "5",
        name: "Minuman"
    }
]
const content = ({item})=>{
    return (
        <TouchableOpacity
            style={{
                borderColor: '#006400',
                padding: 10,
                borderWidth: 1,
                marginLeft: 20,
                marginTop:20,
                borderRadius:10
            }}
        >
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )
};


const Categori = () => {
    return (
        <View style={styles.container}>
            <FlatList
                horizontal={true}
                data={dataCategori}
                renderItem={content}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                style={{
                    marginRight:10
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    category: {
        marginLeft: 20
    }
})

export default Categori