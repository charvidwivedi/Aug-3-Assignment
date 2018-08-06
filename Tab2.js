import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Tab2 extends Component {
    render() {
        retrun(
            <View style={styles.container}>
                <Text style={styles.text}>click me</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        fontFamily: 'bold',

    }
})
