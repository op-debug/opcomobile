import React,{useContext} from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../context/UserContext';


const LogoutMenu = () => {
    const {dispatch} = useContext(UserContext);

    const onLogOut = () => {
        AsyncStorage.setItem('dataLogin', '');
        dispatch({type: 'USER_LOGOUT'});
        alert('Berhasil Logout');
      };
    return (
        <Pressable
            onPress={onLogOut}
        >
            <Icon
                name={'log-out-outline'}
                size={30}
                color={'#000'}
                style={{ marginTop: 30 }}
            />
        </Pressable>
    )
}

export default LogoutMenu 