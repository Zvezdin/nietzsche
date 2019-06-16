import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Button, Icon, Image } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class ProfileView extends Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {

        return (
            <ScrollView>
                <Card style={{ flex: 1, justifyContent: 'center' }}
                    title="Profile">
                    <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 20 }}> Viktor Velev </Text>
                    <View style={{
                        flex: 1, justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                        <Image
                            source={{ uri: "https://avatars3.githubusercontent.com/u/24723757?s=460&v=4" }}
                            style={{ width: 200, height: 200, marginBottom: 25 }}
                        />
                    <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 20 }}> <FontAwesomeIcon icon="fire"/> 450, GOLD: 1250 </Text>

                    </View>
                    <Button
                        icon={<Icon name='settings' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title="Options"
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default ProfileView;