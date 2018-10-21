import React from 'react';
import { StyleSheet, Text, View , ImageBackground  , Button , Image,
    TouchableOpacity , Alert} from 'react-native';

export default class App extends React.Component {




  handlePress(evt){
    Alert.alert(`x coord = ${evt.nativeEvent.locationX}`);
    Alert.alert(`y coord = ${evt.nativeEvent.locationY}`);
  }
  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={(evt) => this.handlePress(evt)}>
            <Image source={require('./images (2).jpg')} style={{resizeMode:'cover'}}>
            </Image>
          </TouchableOpacity>
        </View>
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
