import React from 'react';
import { StyleSheet, Text, View , ImageBackground , ScrollView, PermissionsAndroid
    , Button , Image,TouchableOpacity , Alert , Animated  } from 'react-native';
import Vibrations from './vibration.js'
import Camera from './camera.js'



export default class App extends React.Component {

    constructor() {
        super();
    }


    render() {
        return (
            <View style={styles.container}>
              <Camera/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

