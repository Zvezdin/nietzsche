import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import * as Progress from 'react-native-progress';
import { StyleSheet, Dimensions } from 'react-native';
import { cardStyle } from '../styles/styles'
import { ScrollView } from 'react-native-gesture-handler';

class ActiveView extends Component {

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
                <Progress.Bar color="green" progress={ci.progress / ci.target} width={Dimensions.get('window').width - 60} />
                <Text>
                    {ci.progress}/{ci.target}
                </Text>
            </View>

        </Card>
    ))

    render() {
        return (
            <ScrollView>
                {this.listArr}
                <Text style={{
                    textAlign: 'center',
                    marginBottom: 30,
                    marginTop: 20,
                }}>
                    No more active goals :(
                </Text>
            </ScrollView>
        ) 
    }
}

export default ActiveView;