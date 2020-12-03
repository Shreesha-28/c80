import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Modal,ScrollView,KeyboardAvoidingView} from 'react-native';
import db from'../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class BookRequestScreens extends Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            bookName:"",
            reasonToRequest:""
        }
    }
    createUniqueId(){
        return Math.random().toString(36).substring(6)
    }
    addRequest=(bookName,reasonToRequest)=>{
        var userId=this.state.userId;
        var randomRequestId=this.createUniqueId()
        db.collection('requested_book').add({
            "user_id":userId,
            "book_name":bookName,
            "reason_to_request":reasonToRequest,
            "request_id":randomRequestId
        })
        this.setState({
            bookName:'',
            reasonToRequest:''
        })
        return alert("book Requested Succefully")
    }
    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title="request book"
                navigation={this.props.navigation}/>
                <KeyboardAvoidingView style={styles.keyboardStyles}>
                <TextInput
                            style={styles.formTextInput}
                            placeholder={"enter book name"}
                          
                            onChangeText={(text)=>{
                                this.setState({
                                    bookName:text
                                })
                            }}
                            value={this.state.bookName}
                            />
                                                        <TextInput
                            style={[styles.formTextInput,{height:300}]}
                            placeholder={"why do you need the book"}
                            numberOfLines={8}
                            multiline={true}
                            onChangeText={(text)=>{
                                this.setState({
                                    reasonToRequest:text
                                })
                            }}
                            value={this.state.reasonToRequest}
                            />
                            <TouchableOpacity style={styles.button}
                            onPress={()=>{this.addRequest(this.state.bookName,this.state.reasonToRequest)}}>
                                <Text>request</Text>
                            </TouchableOpacity>

                </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    keyboardStyles:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:8,
        },
        shadowOpacity:0.30,
        shadowRadius:10.32,
        elevation:16
    },
})