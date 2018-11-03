import React from 'react';
import { StyleSheet, Text, View , Vibration, PermissionsAndroid, Button , Image,TouchableOpacity
    ,ScrollView  , CameraRoll,RNFS } from 'react-native';
const ImagePicker = require('react-native-image-picker');

export default class ImagePicker extends React.Component {

    constructor(){
        super();
        this.state ={

        }
    }

    ImagePick(){
        ImagePicker.showImagePicker(options, (response) => {
            
        })
    }
//    ImagePicker.showImagePicker(options, (response) => {
//
//}

    render(){
        return(
            <View>
            </View>
        )
    }
}


