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

export default class editContact extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            address: "",
            fullName: "",
            originalContact: null,
        };

        this.editContact = this.editContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }

    componentDidMount() {
        this.setState({
            email: this.props.contact.email,
            number: this.props.contact.number,
            address: this.props.contact.address,
            fullName: this.props.contact.fullName,
            originalContact: this.props.contact,
        });
    }

    editContact() {
        let contactInfo = {
            email: this.state.email,
            address: this.state.address,
            fullName: this.state.fullName,
            originalContact: this.state.originalContact
        };

        this.props.saveContactChanges(contactInfo);
    }

    deleteContact() {
        this.props.deleteContact(this.state.fullName);
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
                <View style={{flex: 1, alignItems: "flex-end", flexDirection: "row", justifyContent: "space-between"}}>
                    <View>
                        <TouchableOpacity onPress={this.editContact}>
                            <Image style={styles.saveContactImage} source={{ url: 'https://cdn3.iconfinder.com/data/icons/wsd-storage/512/wsd-storage-05-512.png' }} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.deleteContact}>
                            <Image style={styles.deleteContactImage} source={{ url: 'https://cdn0.iconfinder.com/data/icons/cosmo-player/40/button_delete_1-512.png' }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    saveContactImage: {
        width: 32,
        height: 32,
        marginLeft: 5,
        marginBottom: 5,
    },
    deleteContactImage: {
        width: 32,
        height: 32,
        marginRight: 5,
        marginBottom: 5,
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