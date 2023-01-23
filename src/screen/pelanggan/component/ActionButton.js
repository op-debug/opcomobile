import React from 'react';
import {StyleSheet, View, Modal, Dimensions, TouchableOpacity,Text, TouchableWithoutFeedback} from 'react-native';
import {} from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import {colors, sizes} from '../../../constants/theme';


const {width, height} = Dimensions.get('window')

const ActionButton = ({visible, onRequestClose, onUpdate, onDelete, onViewDetail}) => {
  return (
    <Modal visible={visible} onRequestClose={onRequestClose} transparent={true} animationType="slide">
      <TouchableWithoutFeedback style={{height:height}} onPress={onRequestClose}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,.2)'}}>
          <View style={styles.container}>
            <TouchableOpacity
              style={[styles.btn, {backgroundColor: colors.primaryDark}]} onPress={onUpdate}>
              <Text style={{color:'#ffffff'}}>
                Edit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, {backgroundColor: 'red'}]} onPress={onDelete}>
              <Text style={{color:'#ffffff'}}>
                Hapus
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    marginTop: 'auto',
    padding: sizes.base,
    justifyContent: 'center',
  },
  btn: {
    padding: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
