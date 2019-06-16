import { ButtonGroup, Button } from 'react-native-elements'
import { Icon } from 'react-native-elements';

import ActiveView from '../views/Active';
import RecommendedView from '../views/Recommended';
import MarketplaceView from '../views/Marketplace'

import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});

export default class BottomNav extends React.Component {
    
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'First' },
            { key: 'second', title: 'Second' },
        ],
    };

    FirstRoute = () => (
        <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
    );
    
    SecondRoute = () => (
        <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
    );

    render() {

        // console.log(SceneMap, Dimensions.get('window').width, "TVA IMA LI GO")
        // console.log(<TabView/>, "TVA IMA LI GO")
        return (
            <View>
                <Text> Hello </Text>
                <TabView
                    navigationState={this.state}
                    renderScene={
                        SceneMap({
                            first: this.FirstRoute,
                            second: this.SecondRoute,
                        })
                    }
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }}
                />
            </View>
        );
    }
}
