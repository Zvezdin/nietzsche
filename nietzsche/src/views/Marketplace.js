import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'


class MarketplaceView extends Component {
    
    constructor(props){
        super(props)
        // console.log(props) 
        fetch("http://192.168.43.197:8080/market")
            .then(response => response.json())
            .then(data => {
                this.setState({ items: data })

                console.log("Data: ", data)
            })
            .catch(error => {
                this.setState({ items: this.items })
                console.log("Error: ", error)
            })
    }

    state = {
        items: []
    }

    items = [{
        id: "123213",
        image: "",
        name: "1 month tax-free bank transactions",
        price: 350,
    },{
        id: "1232213",
        image: "",
        name: "1 month tax-free bank transactions",
        price: 350,
    },{
        id: "1232313",
        image: "",
        name: "1 month tax-free bank transactions",
        price: 350,
    },{
        id: "1232143",
        image: "",
        name: "1 month tax-free bank transactions",
        price: 350,
    },
    {
        id: "1232153",
        image: "",
        name: "1 month tax-free bank transactions",
        price: 350,
    },{
        id: "1231213",
        image: "",
        name: "1 month tax-free bank transactions",
        price: 350,
    },{
        id: "12321113",
        image: "",
        name: "1 month tax-free bank transactions",
        price: 350,
    },]

    card = (e) => (
        <Card
            title={e.name}>
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
                {this.state.items.map(ci => this.card(ci))}
            </ScrollView>
        );
    }
}

export default MarketplaceView;