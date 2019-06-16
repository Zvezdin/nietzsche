import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements';
import { styles } from '../styles/styles';
import BottomNav from '../components/BottomNav'
import InProgressItem from '../components/InProgressItem'
import MarketplaceView from './Marketplace';

class ActiveView extends Component {
    
    static navigationOptions = {
        //title: 'Nietzsche',
    };
    
    constructor() {
        super()
    }

    render() {
        
        return (
            <View>
                <MarketplaceView/>
            </View>
        );
    }
}

export default ActiveView;