/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Home", "Profile", "Tab Screen"]
    }
  }

  render() {
    return (
      <View style={{ flex: 1, borderRadius: 20 }}>
        <View style ={{flex: 1}}> 
         <FlatList
          data={this.state.list}
          renderItem={({ item }) => {
            return(
            <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: 'black', borderRadius: 25, padding: 10, margin: 15 }}>
              <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flex: .5 }}>
                <Image style={{ height: 200, width: 150, borderRadius: 35 }}
                  source={{ uri: 'https://vignette.wikia.nocookie.net/dccu/images/e/e4/Suicide-squad-poster-joker.jpg/revision/latest?cb=20160821124952' }} />
              </View>


              <View style={{ alignItems: 'center', justifyContent: 'center', flex: .5, padding: 15, margin: 20 }}>
                <View style={{ flex: .2, padding: 10, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                  <TextInput style={{ width: 200, height: 70, borderWidth: 2, borderColor: 'black' }}
                    placeholder=" HEADER TEXT"
                    onChangeText={(text) => this.setState({ text })}
                  />
                  <TextInput style={{ width: 150, height: 60, borderWidth: 2, borderColor: 'black'}}
                    placeholder="Smaller Text"
                    onChangeText={(text) => this.setState()}
                  />
                </View>
                <View style={{ padding: 15, flexDirection: 'row' }}>
                  <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flex: .3 }}>
                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: 'yellow', borderWidth: 2, borderColor: 'black' }}><Text style={{ color:'black', borderWidth: 2, borderColor: 'black' }}>Del</Text></TouchableOpacity>
                  </View>
                  <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', flex: .3 }}>
                    <TouchableOpacity style={{width: 60,  height: 60, backgroundColor: 'yellow', borderWidth: 2, borderColor: 'black' }}><Text style={{ color: 'black', borderWith: 2, borderColor: 'black' }}>Edit</Text></TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            )
          }}
        /> 
      </View>
      </View>
    )
  }
}

