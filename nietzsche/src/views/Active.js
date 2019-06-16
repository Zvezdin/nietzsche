import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements';
import { styles } from '../styles/styles';
import BottomNav from '../components/BottomNav'

class ActiveView extends Component {
    
    static navigationOptions = {
        title: 'Nietzsche',
    };
    
    constructor() {
        super()
    }

    render() {
        
        return (
            <View>
                <BottomNav navigate={this.props.navigation.navigate}/>
            </View>
        );
    }
}

export default ActiveView;