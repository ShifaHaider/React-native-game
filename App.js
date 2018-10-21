import React from 'react';
import { StyleSheet, Text, View , ImageBackground  , Button , Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <ImageBackground source={} style={{width: '100%', height: '100%'}}>
            <Text>Inside</Text>
          </ImageBackground>
          <Image
              source={{
              uri: 'https://facebook.github.io/react/logo-og.png',
              cache: 'only-if-cached',}}
              style={{width: 400, height: 400}}/>
        </View>
);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
