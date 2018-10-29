import React from 'react';
import { StyleSheet, Text, View , ImageBackground , ScrollView, Vibration
    , Button , Image,TouchableOpacity , Alert , Animated , CameraRoll } from 'react-native';


export default class App extends React.Component {

    constructor() {
        super();
    }


    vibration() {
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
Helloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});



