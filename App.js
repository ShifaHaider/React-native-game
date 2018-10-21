import React from 'react';
import { StyleSheet, Text, View , ImageBackground  , Button , Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={{backgroungColor: 'red'}}>
          <ImageBackground source={} style={{width: '100%', height: '100%'}}>
            <View style{{backgroundColor: 'black'}}>
            <Text >Inside</Text>
            <Text >Inside</Text>
            </View>
          </ImageBackground>
          <Image
              source={require('https://facebook.github.io/react/logo-og.png')}
              style={{width: 400, height: 400}}/>
        </View>
);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
