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
        let steps = [];
        for (let i = 0; i < 10; i++) {
            this.left = Math.floor(Math.random() * 100);
            console.log(this.left);
            //this.setState({imageLeft : left});
            steps.push(<Egg key={i}/>);
            //steps.push(i);
            console.log(steps);
        }

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
                    <Image
                        style={{ height: 40, width: 30, position: 'absolute', top: this.state.imageTop+ 15 +'%', left: '1%' }}
                        source={require('./assets/egg2.png')}/>
                    <Image
                        style={{ height: 40, width: 30, position: 'absolute', top: this.state.imageTop+ 10 +'%', left: '30%' }}
                        source={require('./assets/egg2.png')}/>
                    <Image
                        style={{ height: 40, width: 30, position: 'absolute', top: this.state.imageTop+5 +'%', left: '55%' }}
                        source={require('./assets/egg2.png')}/>
                    <Image
                        style={{ height: 40, width: 30, position: 'absolute', top: this.state.imageTop +'%', left: '85%' }}
                        source={require('./assets/egg2.png')}/>
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

