import React from 'react';
import { StyleSheet, Text, View , ImageBackground  , Button , Image,
    TouchableOpacity , Alert} from 'react-native';

export default class App extends React.Component {


    handlePress(evt) {
        Alert.alert(`x coord = ${evt.nativeEvent.locationX}`);
        Alert.alert(`y coord = ${evt.nativeEvent.locationY}`);
    }

    //const ImagesExample = () => (
    //    <Image source={require('C:/Users/Tutorialspoint/Desktop/NativeReactSample/logo.png')}/>
    //);

    render() {
        return (
                    <ImageBackground source={require('./nature.png')} style={{ flex : 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={(evt) => this.handlePress(evt)}>
                </TouchableOpacity>
            </View>
                    </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

});
