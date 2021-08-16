import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert } from 'react-native'
import io from 'socket.io-client'
import Input from './Input'
import Mesages from './Mesages'

const ENDPOINT = 'http://192.168.18.16:5000'
// const ENDPOINT = 'http://192.168.1.9:5000'
// const ENDPOINT = 'https://chat-react-native-ar.herokuapp.com/'
// const ENDPOINT = 'https://diewithme-13.herokuapp.com/'
// const ENDPOINT = 'http://95b622b13f67.ngrok.io/'
// const socket = io(ENDPOINT)

const Room = ({ navigation, route }) => {

    // const [socket] = useState(io(ENDPOINT));
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [socket] = useState(io(ENDPOINT))

    const { name, room } = route.params

    // function to sending messages


    useEffect(() => {
        console.log(socket)
        socket.emit('join',  {room,name} ,(error)=>{
            if(error){

                console.log(error)
                Alert.alert('Error', error)
                navigation.goBack()
            }
        })
        // return () => {
        //     console.log("Bye")
        //     socket.disconnect()
        //     socket.off()
        // }
    },[room])

    useEffect(() => {
        socket.on('message', (msg) => {
            console.log('Messages',messages,"Message",message)
            setMessages([...messages, msg])
        })
    },[messages])

    // useEffect(() => {
    //     socket.on('isTyping', (name) => {
    //         navigation.setOptions({
    //             headerRight: () => <Text >{name} is typing...</Text>
    //         }
    //         )
    //     })
    // }, [])
    console.log(messages)
    const handleSendMessage = () => {
        // console.log("BAd")
        if (message) {
            // console.log(message)
            socket.emit('sendMessage', message, () => {
                setMessage('')
                
            })

        }
    }
    // const handleSendMessage = () => {
    //     // console.log("BAd")
    //     if (message) {
    //         // console.log(message)
    //         socket.emit('newMessage', message, () => {
    //             setMessage('')
                
    //         })

    //     }
    // }
    const renderItem = ({ item }) => (
        <View>
            <Text>{item}</Text>
        </View>
    );
    return (
        <View style={{ flex: 1, paddingHorizontal:15, 
        borderWidth:1}}>
            <Text>{room}</Text>
            <Mesages 
                messages={messages}
                name={name}
            />
            <Input 
            message={message}
            setMessage={setMessage}
            sendMessage={handleSendMessage}
             />
            <Text></Text>
        </View>
    )
}

export default Room

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'black'
    },
})
