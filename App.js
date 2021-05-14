

import * as React from 'react';
import {View,Text,Button,StyleSheet,Platform,StatusBar} from 'react-native';
import AppHeader from './components/Appheader';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './screens/Homescreen';

import SummaryScreen from './screens/Summaryscreen';
import {createAppContainer, createSwitchNavigator}from 'react-navigation';
export default class App extends React.Component{

render(){
     return(
       <View>
       <AppHeader/>
       <AppContainer/>
      </View>
    )
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
   SummaryScreen:SummaryScreen,
  
 
  
})

const AppContainer = createAppContainer(AppNavigator)