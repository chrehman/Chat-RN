import React, { useRef } from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import Message from './Message'
const Mesages = ({messages,name}) => {
    
    const scrollViewRef = useRef();
    console.log("hi",messages);
    return (
        <ScrollView
         ref={scrollViewRef}
         onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
         >
            {messages.map((message, index) => (
                <View key={index}>
                    <Message message={message} 
                        name={name}
                    />
                </View>
            ))}
        </ScrollView>
    )
}

export default Mesages

const styles = StyleSheet.create({})
