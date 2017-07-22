import React, { Component } from 'react';

import {
    NavigatorIOS,
    AppRegistry,
    StatusBar,
    View
} from 'react-native';

import contactList from './src/components/contactList';

export default class untitled extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar hidden />
                <NavigatorIOS
                    initialRoute={{
                        component: contactList,
                        title: 'Contact List'
                    }}
                    style={{flex: 1}}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('untitled', () => untitled);