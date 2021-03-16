import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import {ListItem, SearchBar } from 'react-native-elements'
import db from '../config'

export default class ReadScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            storiesList : [],
            search:''
        }
    }

    keyExtractor = (item, index) => index.toString()


    getStory=()=>{
        db.collection('stories')
        .onSnapshot(snapshot=>{
            var stories = snapshot.docs.map(doc => doc.data())
            this.setState({storiesList:stories})
        })
    }

    componentDidMount(){
        this.getStory()
    }

    renderStories = ({item, i})=>{
        return(
            <ListItem
                key = {i}
                title = {item.title}
                subtitle = {item.author}
                titleStyle={{ color: 'black', fontWeight: 'bold' }}
                rightElement={
                    <TouchableOpacity style={styles.readButton}>
                        <Text style={styles.buttonText}>Read</Text>
                    </TouchableOpacity>
                }
                bottomDivider
            />
        )
    }

    updateSearch = (search)=>{
        this.setState({search})
        db.collection('stories').where('title' === search)
        .onSnapshot(snapshot=>{
            var stories = snapshot.docs.map(doc => doc.data())
            this.setState({storiesList:stories})
        })
    }

    render(){
        const { search } = this.state;
        return(
            <View>
                <SearchBar
                    placeholder={"Search a story..."}
                    onChangeText={this.updateSearch}
                    value={search}
                    lightTheme
                />
                {
                    this.state.storiesList.length === 0
                       ? <Text>There are 0 results to your search</Text> 
                       :<FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.storiesList}
                            renderItem={this.renderStories}
                        />
                    
                }
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    readButton : {
        paddingVertical:10,
        paddingHorizontal:30,
        backgroundColor:'#f0a3ff',
        borderRadius:15,
    },
    buttonText : {
        color:'white'
    }
})