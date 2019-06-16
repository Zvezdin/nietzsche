import React, { Component } from 'react';

import { View, Text, Image } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { Button } from 'react-native-elements';
import { styles } from './styles/styles'

import { createStackNavigator, createAppContainer } from 'react-navigation';
import ActiveView from './views/Active'
import RecommendedView from './views/Recommended'
import MarketplaceView from './views/Marketplace'

const MainNavigator = createStackNavigator({
    Active: { screen: ActiveView },
    Recommended: { screen: RecommendedView },
    Marketplace: { screen: MarketplaceView },
    
});

const Main = () => <ActiveView/>;

export default Main;