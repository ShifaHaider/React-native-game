import React from 'react';
import { StyleSheet, Text, View , ImageBackground  , Button , Image,
    TouchableOpacity , Alert , Animated} from 'react-native';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            fadeAnim: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,{
                toValue:1,
                duration:5000
            }
        ).start()

    }

    handlePress(evt) {
        Alert.alert(`x coord = ${evt.nativeEvent.locationX}`);
        Alert.alert(`y coord = ${evt.nativeEvent.locationY}`);
    }


    render() {
        const opacity = this.state.fadeAnim;
        return (
            <ImageBackground source={require('./assets/nature.png')} style={{ flex : 1 }}>
                <Animated.View style={{
                backgroundColor: "red",
                height: "50%",
                width: "80%",
                opacity: opacity,
                justifyContent:"center",
                alignItems:"center"
            }} >
                    <Text style={{fontSize:30}}>Hello</Text>
                </Animated.View>
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

