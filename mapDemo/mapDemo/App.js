/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class App extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            laps: ['step 1', 'step 2', 'step 3', 'step 4', 'step 5']
        };
    }


    render() {
        return (
            <View style={styles.container}>

                <View style={{height: 600, width: 300, backgroundColor: '#FFF'}}>

                    <Text style={styles.welcome}>Welcome to React Native!</Text>

                    {this.state.laps.map((data) => {
                        return (
                            <View style={{height: 20, backgroundColor: 'yellow', margin: 5}}>
                                <Text>{data}</Text>
                            </View>
                        )
                    })
                    }

                </View>

            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#878787',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
