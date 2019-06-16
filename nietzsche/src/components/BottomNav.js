import React, { Component } from 'react'
import { ButtonGroup, Button } from 'react-native-elements'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements';
import TabNavigator from 'react-native-tab-navigator';
let Tabs = TabNavigator

import ActiveView from '../views/Active';
import RecommendedView from '../views/Recommended';
import MarketplaceView from '../views/Marketplace'

class BottomNav extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedTab: 'profile',
        }

        this.changeTab = this.changeTab.bind(this)
    }

    changeTab(selectedTab) {
        this.setState({ selectedTab })
    }

    render() {
        const { selectedTab } = this.state

        return (
            <View>
                <Tabs>
                    <Tabs.Item
                        titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
                        selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
                        selected={selectedTab === 'feed'}
                        title={selectedTab === 'feed' ? 'FEED' : null}
                        renderIcon={() => <Icon containerStyle={{ 
                            justifyContent: 'center',
                            alignItems: 'center', marginTop: 12 
                        }} 
                        color={'#5e6977'} 
                        name='whatshot' 
                        size={33} 
                        />}
                        renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
                        onPress={() => this.changeTab('feed')}>
                        <ActiveView />
                    </Tabs.Item>
                    <Tabs.Item
                        titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
                        selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
                        selected={selectedTab === 'profile'}
                        title={selectedTab === 'profile' ? 'PROFILE' : null}
                        renderIcon={() => <Icon containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }} color={'#5e6977'} name='person' size={33} />}
                        renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
                        onPress={() => this.changeTab('profile')}>
                        <RecommendedView />
                    </Tabs.Item>
                    <Tabs.Item
                        titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
                        selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
                        selected={selectedTab === 'profile'}
                        title={selectedTab === 'profile' ? 'PROFILE' : null}
                        renderIcon={() => <Icon containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }} color={'#5e6977'} name='person' size={33} />}
                        renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
                        onPress={() => this.changeTab('profile')}>
                        <MarketplaceView />
                    </Tabs.Item>
                /* ... more tabs here */
                </Tabs>
            </View>
        )
    }

}

export default BottomNav;