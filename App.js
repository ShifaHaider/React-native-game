import React from 'react';
import { StyleSheet, Text, View , ImageBackground , ScrollView, Vibration
    , Button , Image,TouchableOpacity , Alert , Animated , CameraRoll } from 'react-native';


export default class App extends React.Component {

    constructor() {
        super();
    }


    vibration() {
        console.log(Vibration.vibrate);
        Vibration.vibrate(1000);
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <Button
                    onPress={this.vibration.bind(this)}
                    title="Vibration"
                    color="#841584"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
});



