import React, { Component } from 'react';

import {
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    TextInput,
    Image,
    Text,
    View
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

export default class addContact extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            number: "",
            address: "",
            fullName: "",
        };

        this.saveContact = this.saveContact.bind(this);
    }

    saveContact() {
        let contactInfo = {
            email: this.state.email,
            number: this.state.number,
            address: this.state.address,
            fullName: this.state.fullName
        };

        this.props.saveContact(contactInfo);
    }

    render() {
        return (
            <View style={{flex: 1, marginTop: 45, backgroundColor: "#efefdd"}}>

                <Text style={{ fontWeight: "900" }}>Full Name</Text>
                <TextInput
                    style={styles.fullName}
                    value={this.state.fullName}
                    autoCapitalize={"none"}
                    onChange={ ( e ) => this.setState({ fullName: e.nativeEvent.text }) }
                />

                <Text style={{ fontWeight: "900" }}>Email Address:</Text>
                <TextInput
                    style={styles.fullName}
                    value={this.state.email}
                    autoCapitalize={"none"}
                    onChange={ ( e ) => this.setState({ email: e.nativeEvent.text }) }
                />

                <Text style={{ fontWeight: "900" }}>Number:</Text>
                <TextInput
                    style={styles.fullName}
                    value={this.state.number}
                    onChange={ ( e ) => this.setState({ number: e.nativeEvent.text }) }
                />

                <Text style={{ fontWeight: "900" }}>Address:</Text>
                <TextInput
                    style={styles.address}
                    value={this.state.address}
                    onChange={ ( e ) => this.setState({ address: e.nativeEvent.text }) }
                    multiline={true}
                    lines={4}
                />

                <View style={{flex: 1, justifyContent: "flex-end"}}>
                    <TouchableOpacity onPress={this.saveContact}>
                        <Image style={styles.saveContactImage} source={{ url: 'https://cdn3.iconfinder.com/data/icons/wsd-storage/512/wsd-storage-05-512.png' }} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    saveContactImage: {
        width: 32,
        height: 32,
        marginRight: 5,
        marginBottom: 5,
        alignSelf: 'flex-end',
    },
    fullName: {
        height: 40,
        width: WINDOW_WIDTH,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
    },
    address: {
        height: 120,
        borderWidth: 1,
        borderColor: 'black'
    }
});