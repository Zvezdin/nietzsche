import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';
//import RNSamsungHealth from 'rn-samsung-health'
//import feedMockData from './mock_data_producer'

import { observer } from 'mobx-react';
import Main from './Main';
import { Store as store } from './stores/mainStore'

import { Button, ThemeProvider } from 'react-native-elements';

@observer
export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ThemeProvider>
				<Main store={store}/>
			</ThemeProvider>
		);
	}
}


