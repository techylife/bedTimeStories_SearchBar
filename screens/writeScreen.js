import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import db from '../config'
import firebase from 'firebase'
import { color } from 'react-native-reanimated';

export default class WriteScreen extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            title:"",
            author:"",
            content:""
        }
    }

    uploadStory = ()=>{
        
        db.collection('stories').add({
            title:this.state.title,
            author:this.state.author,
            content:this.state.content
        })
        .then((doc)=>{
            this.setState({
                title:'',
                author:'',
                content:''
            })
            alert("Your story has been uploaded successfully with the document id : " + doc.id)
        })
        .catch((error)=>{
            alert("Your story wasn't uploaded successfully. Error : " + error.message)
        })
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Write screen</Text>
                <ScrollView>
                    <KeyboardAvoidingView>
                        <TextInput style={styles.input} placeholder="Title" onChangeText={(value)=>{
                            this.setState({title: value})
                            }}></TextInput>
                        <TextInput style={styles.input} placeholder="Author" onChangeText={(value)=>{
                            this.setState({author: value})
                            }}></TextInput>
                        <TextInput multiline={true} style={styles.content} placeholder="Story" onChangeText={(value)=>{
                            this.setState({content: value})
                            }}></TextInput>
                        <TouchableOpacity style={styles.button} onPress={()=>{
                            this.uploadStory()
                        }}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                    
                </ScrollView>               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:30,
    },
    title:{
        alignSelf: 'center',
        fontSize:24,
        fontWeight: 'bold',
        color:'#ff00ff',
        letterSpacing:5,
        fontFamily: 'sans-serif'
    },
    input:{
        marginHorizontal:15,
        marginVertical:30,
        borderWidth:5,
        borderColor: '#e77fcd',
        borderRadius:10,
        height:45,
        padding:10
    },
    content:{
        marginHorizontal:15,
        marginVertical:30,
        borderWidth:5,
        borderColor: '#e77fcd',
        borderRadius:10,
        height:500,
        padding:10
    },
    button:{
        alignSelf:'center',
        backgroundColor:'#e77fcd',
        paddingHorizontal:50,
        paddingVertical:20,
        borderRadius:50
    },
    buttonText:{
        color:'white',
        fontSize:16,
        fontFamily:'sans-serif',
        fontWeight:'bold'
    }
})