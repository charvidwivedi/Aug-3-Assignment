import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Router, Scene, Drawer } from 'react-native-router-flux';
// import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';
import TabScreen from './TabScreen';
// import Tab1 from './Tab1';
// import Tab2 from './Tab2';
// import App from './App';
import DrawerScene from './Drawer';
import PurpleScreen from './PurpleScreen';
import RedScreen from './RedScreen';
// import PinkScreen from './PinkScreen';
// import BlueScreen from './BlueScreen';

const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
    );
};

export default class Comb extends Component {
    render() {
        return (
            <Router>

                <Scene key="root">
                    <Drawer
                        contentComponent={DrawerScene}>
                        <Scene key="HOME"
                            component={PurpleScreen}
                            title="HOME"
                            initial

                        />
                        { /*<Scene key="PROFILE"
                            component={ProfileScreen}
                            title="Profile"

        /> */}

                        <Scene key="TAB BAR"
                            component={RedScreen}
                            title="Tab" />

                    </Drawer>
                </Scene>

            </Router>
        )
    }
}