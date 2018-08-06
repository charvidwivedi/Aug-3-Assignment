import React, {Component} from 'react';
import{Image, View, Text, TextInput, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
 export default class ProfileScreen extends Component {
     render() {
         return (
             <View style ={{flex: 1}}>
             <View style = {{alignItems: 'center', justifyContent: 'center'}}>
             <Text style = {{fontSize: 30, color: 'white'}}>PROFILE</Text>
                 </View>
                 <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                 <Image style ={{height: 70, width: 70, borderWidth:2, borderColor: 'black', borderRadius:50, zIndex: 90, right: 0, left: 0, top: 0, position: 'absolute' }} 
                 source={{ uri: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-joker-fanart-jasmina-susak.jpg'}}> </Image>
                 </View>
                 </View>
            <View style ={{flex:6, padding: 15, margin: 5}}>
            <View style = {{alignItems:'flex-start', justifyContent: 'flex-start'}}>
            <Text style ={{fontSize: 15, fontFamily: 'bold'}}> Name</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            <TextInput style={{borderBottomWidth: 3, width: 275}}
            placeholder = ""
            />
            </View> 

            <View style = {{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
            <TouchableOpacity style ={{height: 50, width: 50, backgroundColor: 'blue'}}>
            <Text style ={{fontSize: 30, fontWeight:'bold'}}>Done</Text>
            </TouchableOpacity>
            </View>

             <Text>Contact no</Text>
             <View style ={{flexDirection: 'row'}}>
             <TextInput style={{borderBottomWidth: 3, width: 275}}
             placeholder=" "
             />
             <TouchableOpacity style = {{height: 50, width: 50, backgroundColor: 'blue'}}>
             <Text style ={{fontSize: 30, fontWeight: 'bold'}}>Done</Text>
             </TouchableOpacity>
             </View> 

             <Text>Email id</Text>
             <View syle ={{flexDirection: 'row'}}>
             <TextInput style={{borderBottomWidth: 3, width: 275}}
             placeholder=" "
             />
             <TouchableOpacity style ={{height: 50, width: 50, backgroundColor: 'blue'}}>
             <Text style ={{fontSize: 30, fontWeight: 'bold'}}>Done</Text>
             </TouchableOpacity>
             </View>
             </View>

             <View style={{flex: 3, padding: 15, margin: 5}}>
             <View style = {{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
             <TextInput style ={{borderBottomWidth: 3, width: 300}}
             placeholder = ""
             />
             </View>

             <View style = {{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
             <TouchableOpacity style ={{height: 50, width:50, backgroundColor: 'blue'}}>
             <Text style= {{fontSize: 30, fontWeight: 'bold'}}>Done</Text>
             </TouchableOpacity>
             </View>


             </View>

             </View>
         )
         
        }
           }