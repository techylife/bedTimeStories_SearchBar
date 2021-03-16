import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Header, { Icon } from 'react-native-elements'

import ReadScreen from './screens/readScreen'
import WriteScreen from './screens/writeScreen'
import MyHeader from './components/myheader'
import { render } from 'react-dom';
import WelcomeScreen from './screens/WelcomeScreen'
 
export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <MyHeader/>
        <AppContainer/>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Read:{
    screen:ReadScreen,
    navigationOptions:{
      tabBarIcon:<Icon name="book-open" type="feather"/>
    }
  },
  Write:{
    screen:WriteScreen,
    navigationOptions:{
      tabBarIcon:<Icon name="pencil" type="entypo"/>
    }
  }
},
// {
//   defaultNavigationOptions:({navigation}) =>{
//     const routeName = navigation.state
//     if(routeName === "Read"){
//       return(
//         <Image source={require("./assets/open book.jpg")}/>
//       )
//     }else if(routeName === "Write"){
//       return(
//         <Image source={require("./assets/depositphotos_72594121-stock-illustration-feather-writing.jpg")}/>
//       )
//     }
//   }
// }
)



const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
