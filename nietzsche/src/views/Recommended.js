import React, { Component } from 'react'
import { View, Text } from 'react-native'

class RecommendedView extends Component {
    
    constructor(props){
        super(props)
        console.log(props)       
    }

    render() {
        return (
            <View>
                <Text>
                    This is recommended view
                    Hi {JSON.stringify(this.props.navigation)}
                </Text>
            </View>
        );
    }
}

export default RecommendedView;