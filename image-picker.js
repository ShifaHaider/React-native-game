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
            if (response.didCancel) {}
            else if (response.error){}
            else if (response.customButton){}
            else{
                let source = { uri: response.uri };
                this.setState({
                    groupImgUrl: source.uri
                })
            }
        })
    }


    render(){
        return(
            <View style={{flex: 1}}>
                <Button onPress={this.ImagePick.bind(this)}>Start Camera</Button>
            </View>
        )
    }
}


