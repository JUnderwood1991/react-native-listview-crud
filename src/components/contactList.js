import React, { Component } from 'react';

import {
    TouchableOpacity,
    StyleSheet,
    ListView,
    Image,
    Text,
    View
} from 'react-native';

import addContact from './addContact';
import editContact from './editContact';

const ds = new ListView.DataSource({ rowHasChanged: ( _row1, _row2 ) => { _row1 != _row2 } });

export default class contactList extends Component {
    constructor() {
        super();

        this.state = {
            contacts: [],
            dataSource: ds.cloneWithRows([])
        };

        this.renderRow = this.renderRow.bind(this);
        this.addContact = this.addContact.bind(this);
        this.saveContact = this.saveContact.bind(this);
        this.editContact = this.editContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.saveContactChanges = this.saveContactChanges.bind(this);
    }

    editContact(contact) {
        this.props.navigator.push({
            component: editContact,
            title: "Edit Contact",
            passProps: { saveContactChanges: this.saveContactChanges, deleteContact: this.deleteContact, contact }
        });
    }

    deleteContact(contactName) {

    }

    saveContactChanges(contact) {

    }

    renderRow( _rowData ) {
        return (
            <TouchableOpacity onPress={ () => { this.editContact(_rowData); }}>
                <View style={styles.contactListItem}>
                    <Text style={[styles.contactListItemText, { fontWeight: "900" } ]}>
                        {
                            _rowData.fullName
                        }
                    </Text>
                    <Text style={styles.contactListItemText}>
                        {
                            _rowData.email
                        }
                    </Text>
                    <Text style={styles.contactListItemText}>
                        {
                            _rowData.number
                        }
                    </Text>
                    <Text style={styles.contactListItemText}>
                        {
                            _rowData.address
                        }
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    saveContact(contactInfo) {

    }

    addContact() {
        this.props.navigator.push({
            component: addContact,
            title: "Add Contact",
            passProps: { saveContact: this.saveContact }
        });
    }

    componentDidMount() {
        this.setState({
            dataSource: ds.cloneWithRows(this.state.contacts)
        });
    }

    render() {
        return (
          <View style={{flex: 1, backgroundColor: "#efefdd"}}>
              <ListView
                  enableEmptySections
                  style={styles.contactList}
                  renderRow={this.renderRow}
                  dataSource={this.state.dataSource}
              />
              <TouchableOpacity onPress={this.addContact}>
                  <Image style={styles.addContactImage} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/07_plus-128.png' }} />
              </TouchableOpacity>
          </View>
        );
    }
}


const styles = StyleSheet.create({
    contactList: {
        flex: 1,
    },
    addContactImage: {
        width: 32,
        height: 32,
        marginRight: 5,
        marginBottom: 5,
        alignSelf: 'flex-end',
    },
    contactListItem: {
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: "#e2e2c2",
    },
    contactListItemText: {
        marginLeft: 10,
        marginBottom: 5
    }
});