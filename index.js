import React from 'react';
import { StyleSheet, Text, View , ImageBackground  , Button , Image, TouchableOpacity , Alert , Animated} from 'react-native';

export default class Egg extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            imageTop: 0,
            imageLeft: this.props.l
        };
        this.moveEgg();
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
                top = 10
            }
        })
    }

    render() {
        console.log(this.state.imageLeft);
        return (

            <Image
                style={{height: 40, width: 30, position: 'absolute', top: this.state.imageTop + '%' , left: (this.props.l || 0) + '%' }}
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
        position: 'absolute'
    }
});

