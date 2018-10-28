import React from 'react';
import { StyleSheet, Text, View , ImageBackground  , Button , Image,TouchableOpacity , Alert , Animated} from 'react-native';
import Egg from './index.js'


export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            imageLeft: 0,
            imageTop: 0,
            eggs: [<Egg/>]
        };
        this.moveEgg();

    }

    moveEgg() {
        //console.log(document);
        var top = 0;
        var i = setInterval(()=> {
            if (top < 100) {
                top++;
                this.setState({imageTop: top});
            }
            else {
                //clearInterval(i);
                top = 0;
            }
        })
    }

    render() {
        const opacity = this.state.fadeAnim;
        let steps = [];
      var s = setInterval(()=> {
            var left = Math.floor(Math.random() * 100);
            steps.push(<Egg l={left} key={steps.length}/>);
            //console.log(left);
            this.setState({eggs: steps});
        });

        return (
            <ImageBackground source={require('./assets/game_bg.jpg')} style={{ flex : 1 }}>

                {this.state.eggs.map((e)=>{
                    return (
                        e
                    )
                })}

                <Image style={{height: 80, width: 160, position: 'absolute', bottom : 2}}
                       source={require('./assets/basket.jpg')}/>
            </ImageBackground>
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
Helloo


