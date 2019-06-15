import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { styles } from './styles/styles'
//import RNSamsungHealth from 'rn-samsung-health'
//import feedMockData from './mock_data_producer'

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

let Props = {};

export default class App extends Component {

	constructor(props) {
		super(props);
		//this.samsungData = {
		// 	steps: [],
		// }

		// RNSamsungHealth.authorize((err, res) => {

		// 	if (res) {
				
		// 		let startDate = new Date().setDate(new Date().getDate() - 60); // 30 days back date
		// 		let endDate = new Date().getTime(); //today's date
		// 		let opt = { startDate, endDate };

		// 		RNSamsungHealth.getDailyStepCount(opt, (err, res) => {
		// 			if (err) console.log(err);
		// 			if (res) {
		// 				this.samsungData = res;
		// 				console.log(res);
		// 				console.log("ADASDSAD")
		// 			}

		// 		});

		// 		console.log(this.samsungData)
		// 		// more similar functions are - 
		// 		//getDailyStepCount
		// 		//getHeight
		// 		//getWeight
		// 		//getSleep
		// 		//getCholesterol
		// 		//getBloodPressure
		// 		//getBodyTemprature

		// 	} else {
		// 		console.log(err);
		// 	}
		// });
		// 
	}


	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native!</Text>
				<Text style={styles.instructions}>To get started, edi GEI</Text>
				<Text style={styles.instructions}>{instructions}</Text>
			</View>
		);
	}
}


