import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    if (user === name) {
        isSentByCurrentUser = true;
    }
    return (
        <View style={{}}>
            {isSentByCurrentUser
            ?
            (
                <View style={styles.cUContainer}>
                
                    <View style={styles.cUMsgContainer}>
                        <Text
                        style={styles.cUCMsg}
                        >{text}</Text>
                        
                    </View>
                    <Text style={styles.cUName}>{user}</Text>
                    
                </View>
            )
            : (
                <View style={styles.oUContainer}>
                
                <View style={styles.oUMsgContainer}>
                    <Text
                    style={styles.oUCMsg}
                    >{text}</Text>
                </View>
                <Text style={styles.oUName}>{user}</Text>
            </View>
            )}
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    cUContainer: {
        alignItems:'flex-end',
        marginLeft:'auto',
        // borderWidth: 1,
        marginVertical:10,
        flexWrap: 'wrap',
        // marginLeft:0,
        
    },
    cUName: {
        // position:'absolute',
        color:'grey',
        // borderWidth:1,
        // width:50,
        marginTop:7,
        marginRight:5
        
               
    },
    cUMsgContainer: {
        backgroundColor:'lightblue',
        marginLeft:20,
        
        padding:10,
        borderRadius:10,
    },
    cUCMsg: {
        color:'white',
    },
    oUContainer: {
        alignItems: 'flex-start',
        marginVertical:10,
        
    },
    oUName: {
        color:'grey',
        marginLeft:5,
        marginTop:10

    },
    oUMsgContainer: {
        backgroundColor:'#dedede',
        marginRight:20,
        
        padding:10,
        borderRadius:10,
    },
    oUCMsg: {
        color:'#000',
    },

})
