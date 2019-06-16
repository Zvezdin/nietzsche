import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'


class RankingView extends Component {
    
    constructor(props){
        super(props)
        // console.log(props) 
    }

    state = {
        items: []
    }

    items = [{
        id: "12321asd3",
        username: "VikVelev",
        calories: 350,
    },
    {
        id: "12321asd3",
        username: "VikVelev",
        calories: 320,
    },
    {
        id: "12321asd3",
        username: "VikVelev",
        calories: 310,
    },
    {
        id: "12321asd3",
        username: "VikVelev",
        calories: 300,
    },
    {
        id: "12321asd3",
        username: "VikVelev",
        calories: 280,
    },
    {
        id: "12321asd3",
        username: "VikVelev",
        calories: 264,
    },]

    card = (e) => (
        <Card
            title={e.name}>
            <View style={{ flex: 1, flexDirection: 'row', textAlign: 'center', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <Text>
                    <Text style={{ fontSize: 20}}>Viktor Velev {'    '}</Text>
                    <Text>{e.calories}</Text> {'  '}
                </Text>
                <Icon name="fire" type='font-awesome'/>
            </View>
        </Card>
    )

    render() {
        return (
            <ScrollView>
                {this.items.map(ci => this.card(ci))}
                <Text style={{
                    textAlign: 'center',
                    marginBottom: 30,
                    marginTop: 20,
                }}>
                    No more people :(
                </Text>
            </ScrollView>
        );
    }
}

export default RankingView;