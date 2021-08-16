import React from 'react'
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={message}
                onChangeText={(text) => setMessage(text)}
                placeholder="Type a message ..."
                placeholderTextColor="black"
            />

            <TouchableOpacity onPress={sendMessage}
                style={styles.buttonContainer}
            >
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        
        flexDirection: 'row',
        width:'100%',
        height:50,
        // borderWidth: 1,
        
    },
    
    input: {
        color:'black',
        borderWidth:1,
        width:"75%",
        marginRight:10
    },
    buttonContainer: {
        backgroundColor:"blue",
        borderRadius:5,
        textAlign:'center',
        padding:15
        
    },
    buttonText: {
        color:'white',
    }
})
