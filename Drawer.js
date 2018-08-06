import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class DrawerScene extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 2, backgroundColor: 'pink' }}>
                    <TouchableOpacity onPress={() => Actions.App()}>
                        <Text style={{ color: 'purple', fontSize: 30 }}>Home</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 2, backgroundColor: 'pink' }}>
                    <TouchableOpacity onPress={() => Actions.App()}>
                        <Text style={{ color: 'purple', fontSize: 30 }}>Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 2, backgroundColor: 'pink' }}>
                    <TouchableOpacity onPress={() => Actions.App()}>
                        <Text style={{ color: 'purple', fontSize: 30 }}>Tab Scene</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}