import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PurpleScreen extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.welcome}
                >
                    Purple Screen
                </Text>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10
    }
});
