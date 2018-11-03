import React from 'react';
import { StyleSheet, Text, View , Vibration, PermissionsAndroid, Button , Image,TouchableOpacity
    ,ScrollView  , CameraRoll,RNFS } from 'react-native';


export default class Camera extends React.Component {

    constructor() {
        super();
        this.state={
            photos: []
        };
        async function requestCameraPermission() {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        'title': 'Cool Photo App Camera Permission',
                        'message': 'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.'
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("You can use the camera")
                } else {
                    console.log("Camera permission denied")
                }
            } catch (err) {
                console.warn(err)
            }
        }
        requestCameraPermission();
    }



    _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        })
            .then(r => {
                console.log(r);
                this.setState({ photos: r.edges });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    render() {
        return (
            <View style={styles.container}>
                <Button title="Load Images" onPress={this._handleButtonPress} />
                <ScrollView>
                    {this.state.photos.map((p, i) => {
                        return (
                            <Image key={i} style={{  width: 300, height: 100}}
                                source={{ uri: p.node.image.uri }}/>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

