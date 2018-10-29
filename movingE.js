import React, { Component } from 'react';

import { StyleSheet, View, Platform, Text, PanResponder,Image } from 'react-native';

export default class MovingPoint extends Component {
    constructor() {
        super();

        this.panResponder;

        this.state = {

            locationX: 0,
            locationY: 0
        }
    }

    componentWillMount() {
        this.panResponder = PanResponder.create(
            {
                onStartShouldSetPanResponder: (event, gestureState) => true,

                onStartShouldSetPanResponderCapture: (event, gestureState) => true,

                onMoveShouldSetPanResponder: (event, gestureState) => false,

                onMoveShouldSetPanResponderCapture: (event, gestureState) => false,

                onPanResponderGrant: (event, gestureState) => false,

                onPanResponderMove: (event, gestureState) => false,

                onPanResponderRelease: (event, gestureState) => {
                    this.setState({

                        locationX: event.nativeEvent.locationX.toFixed(2),

                        locationY: event.nativeEvent.locationY.toFixed(2)

                    });
                }
            });
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <View>
                    <Text style={styles.text}>X: {this.state.locationX}, Y: {this.state.locationY}</Text>
                </View>
                <View style={styles.childView}>
                    <Image source={require('./assets/basket.jpg')} style={[styles.point, {  left: parseFloat(this.state.locationX - 15) }]} />
                    <View style={{ flex: 1, backgroundColor: 'transparent' }}  {...this.panResponder.panHandlers} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        },

        childView:
        {
            flex: 1,
            backgroundColor: '#263238',
            overflow: 'hidden'
        },

        text:
        {
            fontSize: 22,
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            padding: 8,
            backgroundColor: '#607D8B',
        },

        point:
        {
            height: 80,
            width: 160,
            position: 'absolute',
            bottom : 2
        }
    });