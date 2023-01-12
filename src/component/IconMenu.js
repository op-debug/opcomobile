import * as React from 'react';
import { StyleSheet,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const IconMenu = () => {
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => navigation.openDrawer()}
        >
            <Icon
                name={'menu'}
                size={50}
                color={'#000'}
                style={styles.menu}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    menu: {
        marginTop: 30,
        marginLeft: 20
    }
})

export default IconMenu 