import * as React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/to-do-list.png')} style={styles.image} />
            <Text style={styles.title}>MANAGE YOUR TASK</Text>
            
            <View style={styles.containerInput}>
                <Image source={require('../assets/mail.png')} style={{width:20, height:20, marginLeft:10}} />
                <TextInput style={styles.textInput} placeholder='Enter your name' placeholderTextColor={'lightgray'}/>
            </View>
            
            <TouchableOpacity style={styles.button}>GET STARTED</TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    image: {
        marginTop: 100,
        width: 180,
        height: 180,
        resizeMode: 'contain'
    },
    title: {
        fontFamily: 'Ubuntu',
        marginTop: 50,
        width: 250,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000'
    },
    containerInput: {
        marginTop: 80,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 10,
        // paddingLeft:10,
        width: 300
    },
    textInput: {
        width: 250,
        marginLeft:10,
        paddingLeft: 10,
        height:30,
        outlineWidth :0
    },
    button: {
        marginTop: 50,
        width: 200,
        height: 50,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'arial'
    }
});