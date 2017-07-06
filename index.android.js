/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';
import FadeInView from "./Modules/test/FadeInView";

export default class AwesomeProject extends Component {

    render() {
        return (
            <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Allen Lee</Text>
            </FadeInView>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
