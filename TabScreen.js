import React , {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class TabScreen extends Component {
    render() {
        return (
            <View style ={{flex: 1}}>
            <View style = {{alignItems: 'flex-start', justifyContent: 'flex-start', borderWidth: 2, borderColor: 'black', backgroundColor:'blue'}}>
            <TouchableOpacity onPress={() => Actions.App()}>
            <Text style = {{color: 'white', fontSize: 25, fontFamily: 'bold'}}>Tab1</Text>
            </TouchableOpacity>

            <View style = {{alignItems: 'flex-end', justifyContent: 'flex-start', borderWidth: 2, borderColor: 'black', backgroundColor: 'blue'}}>
            <TouchableOpacity onPress={()=> Actions.App()}>
            <Text style ={{color: 'white', fontSize: 25, fontFamily: 'bold'}}>Tab2</Text>
            </TouchableOpacity>
                </View>
                </View>
                </View>
        )
    }

}
/*import { Router, Scene, Drawer } from 'react-native-router-flux'

import RedScreen from './RedScreen';
import PinkScreen from './PinkScreen';

import PurpleScreen from './PurpleScreen';
import BlueScreen from './BlueScreen';
import Drawer from './Drawer';

const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
    );
};

export default class TabScreen  extends Component  {
    return (
        <Router>
            <Scene key="root">
            <Drawer
            contentComponent={drawer}>
                <Scene key="tabbar"
                    tabs
                    tabBarStyle={{ backgroundColor: 'white' }}
                >
                    <Scene key="ABC" title="ABC" icon={TabIcon}>
                        <Scene key="RED"
                            component={RedScreen}
                            title="Red"
                            initial
                        />
                    </Scene>

                    <Scene key="DEF" title="DEF" icon={TabIcon}>
                        <Scene key="PINK"
                            component={PinkScreen}
                            title="Pink"
                        />
                    </Scene>

                    <Scene key="GHI" title="GHI" icon={TabIcon}>
                        <Scene key="PURPLE"
                            component={PurpleScreen}
                            title="Purple"
                        />
                    </Scene>

                    <Scene key="JKL" title="JKL" icon={TabIcon}>
                        <Scene key="BLUE"
                            component={BlueScreen}
                            title="Blue"
                        />
                    </Scene>
                    </Scene>
                    <Drawer>
                   </Router> 
                
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    welcome: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        textAlign: 'center',

    },

})*/

  
