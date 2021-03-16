import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';

const MyHeader = props => {
  return (
    <Header
      
      centerComponent={{ text: "Bedtime Stories", style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#f0a3ff"
    />
  );
};

export default MyHeader;