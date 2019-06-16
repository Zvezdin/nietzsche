import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import * as Progress from 'react-native-progress';
import { StyleSheet, Dimensions } from 'react-native';
import { cardStyle } from '../styles/styles'
import { ScrollView } from 'react-native-gesture-handler';

const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    // more users here
]

class RecommendedView extends Component {

    /**
     * Dummy props
     */
    dummyProps = [{
        id: "1abcfd8",
        title: "Swim 104m",
        description: "Swimming is cool",
        reward: {
            kcal: 120,
            gold: 50,
        },
        progress: 88,
        target: 104,
    },{
        id: "1abcfd9",
        title: "Run 300m",
        description: "Running",
        reward: {
            kcal: 43,
            gold: 5,
        },
        progress: 23,
        target: 300,
    }, {
        id: "1abc2d9",
        title: "Climb 300 stairs",
        description: "Running",
        reward: {
            kcal: 95,
            gold: 25,
        },
        progress: 277,
        target: 300,
    },
    {
        id: "1abc2d9",
        title: "Climb 300 stairs",
        description: "Running",
        reward: {
            kcal: 95,
            gold: 25,
        },
        progress: 277,
        target: 300,
    },
    {
        id: "1abc2ds9",
        title: "Climb 300 stairs",
        description: "Running",
        reward: {
            kcal: 95,
            gold: 25,
        },
        progress: 277,
        target: 300,
    },
    {
        id: "1abc2d39",
        title: "Climb 300 stairs",
        description: "Running",
        reward: {
            kcal: 95,
            gold: 25,
        },
        progress: 277,
        target: 300,
    }]

    listArr = this.dummyProps.map(ci => (
        <Card title={ci.title}>
            <View>
                <Text style={{ marginBottom: 10 }}>
                    {ci.description}
                </Text>
                <View style={{flex: 1, flexDirection: 'row', bottomPadding: 20}}>
                    <Text style={{ marginBottom: 10 }}>
                        REWARDS: {ci.reward.kcal} {'  '}
                    </Text>
                        <Icon name="fire" type="font-awesome"/>
                    <Text>
                        {'  '} {ci.reward.gold} {'  '}
                    </Text>
                        <Icon name="money" type='font-awesome'/>
                </View>
            </View>
            <View>
                <Button
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title="Accept"
                />
            </View>

        </Card>
    ))

    render() {
        const { title, progress, description, target, reward } = this.dummyProps

        return (
            <ScrollView>
                {this.listArr}
                <Text style={{
                    textAlign: 'center',
                    marginBottom: 30,
                    marginTop: 20,
                }}>
                    No more recommended goals :(
                </Text>
            </ScrollView>
        ) 
    }
}

export default RecommendedView;