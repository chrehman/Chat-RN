import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native'
import io from 'socket.io-client'

const ENDPOINT = 'http://192.168.18.16:5000'
// const ENDPOINT = 'http://192.168.1.10:5000'


const Rom1 = ({ navigation, route }) => {

    // const [socket] = useState(io(ENDPOINT));
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [socket] = useState(io(ENDPOINT))

    const { name, room } = route.params

    // useEffect(() => {

    //     socket.connect()
    //     console.log(socket)

    //     socket.emit('join', room,()=>{
    //         // console.log(error)
    //     })
    //     socket.on('receiveMessage', (msg) => {
    //         console.log("RECeIVE ", msg)
    //         setMessages(msg)
    //     })
    //     return ()=>{
    //         socket.disconnect()
    //         socket.off()
    //     }
    // }, [ENDPOINT,room])

    useEffect(() => {
        // socket=io(ENDPOINT);
        console.log(socket)
        socket.emit('join', { name, room }, (error) => {
            console.log(error)
            console.log("hi")
        })
        return () => {
            console.log("Bye")
            socket.disconnect()
            // socket.off()
        }
    }, [room])

    useEffect(() => {
        console.log("Msgs Useeffect");
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])

    // function to sending messages



    // useEffect(() => {
    //     socket.on('isTyping', (name) => {
    //         navigation.setOptions({
    //             headerRight: () => <Text >{name} is typing...</Text>
    //         }
    //         )
    //     })
    // }, [])

    const handleSendMessage = () => {
        console.log("BAd")
        if (message) {
            console.log(message)
            socket.emit('sendMessage', message, () => {
                setMessage('')
            })

        }
    }
    const renderItem = ({ item }) => (
        <View>
            <Text>{item}</Text>
        </View>
    );
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{room}</Text>
            {/* <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item}
            /> */}
            <TextInput
                style={styles.input}
                onChangeText={(text) => {
                    setMessage(text)
                    // socket.emit('typing', room, 'abdul rahman')
                }
                }
                value={message}
            />
            <Button title="Go Back" onPress={() => {
                socket.emit('leave', room)
                navigation.goBack()
            }} />
            <Button title="Send" onPress={handleSendMessage} />

            <Text></Text>
        </View>
    )
}

export default Rom1

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'black'
    },
})
