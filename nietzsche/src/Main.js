import React, { Component } from 'react';

import { View, Text, Image, Dimensions } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { Button } from 'react-native-elements';
import { styles } from './styles/styles'
import { TabView, SceneMap } from 'react-native-tab-view';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import ActiveView from './views/Active'
import RecommendedView from './views/Recommended'
import MarketplaceView from './views/Marketplace'

class Main extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Active' },
            { key: 'second', title: 'Marketplace' },
            { key: 'third', title: 'Recommended' },
        ],
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: ActiveView,
                    second: MarketplaceView,
                    third: RecommendedView
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        );
    }
}

export default Main;