import React, { Component } from 'react';

import { View, Text, Image, Dimensions } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { Button, Icon } from 'react-native-elements';
import { styles } from './styles/styles'
import { TabView, SceneMap } from 'react-native-tab-view';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import ActiveView from './views/Active'
import RecommendedView from './views/Recommended'
import MarketplaceView from './views/Marketplace'
import ProfileView from './views/Profile'
import RankingView from './views/RankingView'



class Main extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Active'},
            { key: 'second', title: 'More' },
            { key: 'third', title: 'Market' },
            { key: 'fourth', title: 'Profile' },
            { key: 'fifth', title: 'Ranks' },            
        ],
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: ActiveView,
                    second: RecommendedView,
                    third: MarketplaceView,
                    fourth: ProfileView,
                    fifth: RankingView,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        );
    }
}

export default Main;