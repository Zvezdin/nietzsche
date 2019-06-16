import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'


class MarketplaceView extends Component {
    
    constructor(props){
        super(props)
        console.log(props)       
    }

    items = [{
        id: "123213",
        image: "",
        title: "1 month tax-free bank transactions",
        price: 350,
    },{
        id: "1232213",
        image: "",
        title: "1 month tax-free bank transactions",
        price: 350,
    },{
        id: "1232313",
        image: "",
        title: "1 month tax-free bank transactions",
        price: 350,
    },{
        id: "1232143",
        image: "",
        title: "1 month tax-free bank transactions",
        price: 350,
    },
    {
        id: "1232153",
        image: "",
        title: "1 month tax-free bank transactions",
        price: 350,
    },{
        id: "1231213",
        image: "",
        title: "1 month tax-free bank transactions",
        price: 350,
    },{
        id: "12321113",
        image: "",
        title: "1 month tax-free bank transactions",
        price: 350,
    },]

    card = (e) => (
        <Card
            title={e.title}>
            <View style={{ flex: 1, flexDirection: 'row', textAlign: 'center', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <Text>
                    PRICE: <Text>{e.price}</Text> {'  '}
                </Text>
                <Icon name="money" type='font-awesome'/>
            </View>
            <Button
                icon={<Icon name='plus' type='font-awesome' color='#ffffff' />}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title="  BUY"
            />
        </Card>
    )

    render() {
        return (
            <ScrollView>
                {this.items.map(ci => this.card(ci))}
            </ScrollView>
        );
    }
}

export default MarketplaceView;