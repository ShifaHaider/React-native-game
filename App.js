import React from 'react';
import { StyleSheet, Text, View , ImageBackground  , Button , Image,TouchableOpacity , Alert , Animated} from 'react-native';
import Egg from './index.js'
export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            fadeAnim: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim, {
                toValue: 1,
                duration: 5000
            }
        ).start()

    }

    handlePress(evt) {
        Alert.alert(`x coord = ${evt.nativeEvent.locationX}`);
        Alert.alert(`y coord = ${evt.nativeEvent.locationY}`);
    }


    render() {
        const opacity = this.state.fadeAnim;

        let steps = [];
        for (let i = 0; i < 10; i++) {
            steps.push(<Egg/>);
            console.log(steps);
        }

        return (
            <ImageBackground source={require('./assets/nature.png')} style={{ flex : 1 }}>
                <View style={{flex: 1}}>
                <Egg/>
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

