import React from 'react';
import { StyleSheet, Text, View , ImageBackground , ScrollView, Vibration }from 'react-native';


export default class Vibrations extends React.Component {

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});


