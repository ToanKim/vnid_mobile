/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Searchbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';

function SearchBar(props: any) {
    return (
        <Searchbar
            placeholder="What are you thinking?"
            style={styles.searchContainer}
            inputStyle={{letterSpacing: 1}}
            icon={() => <Icon name="search" size={20} color="#2C2E3D" />}
            {...props}
        />
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    searchContainer: {
        marginBottom: 20,
        borderRadius: 14,
        alignSelf: 'center',
        width: 320,
        height: 60,
        shadowColor: 'rgba(0,0,0,0.4)',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 7.68,

        elevation: 11,
    },
    searchInput: {
        color: '#00879C',
        flex: 1,
    },
    searchIcon: {
        borderRadius: 0,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
