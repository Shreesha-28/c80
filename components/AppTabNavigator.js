import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonateScreen'
import BookRequestScreen from '../screens/BookRequestScreen'

export const AppTabNavigator=createBottomTabNavigator({
    DonateBooks:{
        screen:BookDonateScreen,
        navigationOptions:{
            tabBarLabel:"Donate Books"
        }
    },
    BookRequest:{
        screen:BookRequestScreen,
        navigationOptions:{
            tabBarLabel:" Book request"
        }
    }

})