import React from 'react';
import { StyleSheet, Text, View , Images } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Image source={require('./fire.jpeg')} style={styles.backgroundImage}>
            
          </Image>
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
    width: null,
    height: null,
    resizeMode: 'cover'
  },

});
