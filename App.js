import React from 'react';
import { StyleSheet, Text, View , ImageBackground , ScrollView, Vibration, PermissionsAndroid
    , Button , Image,TouchableOpacity , Alert , Animated , CameraRoll } from 'react-native';
import Vibration from './vibration.js'

export default class App extends React.Component {

    constructor() {
        super();

    }


    render() {
        return (
            <View style={styles.container}>
              <Vibration/>
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

