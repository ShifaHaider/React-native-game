import React from 'react';
import { StyleSheet, Text, View , ImageBackground  , Button , Image, TouchableOpacity , Alert , Animated} from 'react-native';

export default class Egg extends React.Component {

    constructor() {
        super();
        this.state = {
            imageTop: 0
        }
        this.moveEgg();
    }

    handlePress(evt) {
        Alert.alert(`x coord = ${evt.nativeEvent.locationX}`);
        Alert.alert(`y coord = ${evt.nativeEvent.locationY}`);
    }

    moveEgg() {
        var top = 0;
        var i = setInterval( ()=> {
            if (top < 100) {
                top++;
                this.setState({imageTop: top});
            }
            else{
                clearInterval(i);
            }
        })
    }

    render() {

        return (
            <Image
                style={{ height: 40, width: 30, position: 'absolute', top: this.state.imageTop + '%' }}
                source={require('./assets/egg2.png')}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 50
    },
    image: {
        height: 45,
        width: 35,
        position: 'absolute',
    }
});

