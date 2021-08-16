import React, { useEffect, useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Home = ({ navigation,route }) => {
    const [name, setName] = useState('')
    const handleUserName=(room,name)=>{


    }
    return (
        // <ScrollView style={{flexDirection:'row',width:'100%'}}>

        <View style={styles.container}>
            <View style={{flexDirection:'row',alignItems:'center',width:"100%",padding:20}}>
            <Text style={{color:'black',marginRight:20,fontSize:18}}>Username</Text>
            <TextInput value={name} 
            style={{color: 'black', fontSize: 13, height: 50, borderWidth:1,
            borderColor:'black',flex:1,
            borderRadius:5,}}
            placeholder="Enter Name"
            placeholderTextColor= 'black'
                onChangeText={setName}
            />
            </View>

            <TouchableOpacity 
            style={styles.roomContainer}
            onPress={()=>{
                navigation.navigate('English', { room: "English",name })
            }}>
            <Text style={styles.roomText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.roomContainer}
            onPress={()=>{
                navigation.navigate('Urdu', { room: "Urdu",name })
            }}>
            <Text style={styles.roomText}>Urdu</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.roomContainer}
            onPress={()=>{
                navigation.navigate('Arabic', { room: "Arabic",name })
            }}>
            <Text style={styles.roomText}>Arabic</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.roomContainer}
            onPress={()=>{
                navigation.navigate('Spanish', { room: "Spanish",name })
            }}>
            <Text style={styles.roomText}>Spanish</Text>
            </TouchableOpacity>
            
            
        
        </View>
        // </ScrollView>
        
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-around',
        backgroundColor: '#F5FCFF',
    },
    roomContainer: {
        borderWidth:1,
        paddingHorizontal:50,
        paddingVertical:20,
        backgroundColor:'#ebcded'
    },
    roomText:{
        color:'black',
        fontSize:20,
        color:'white'
    }

})
