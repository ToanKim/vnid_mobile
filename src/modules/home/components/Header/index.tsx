import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useTheme} from 'react-native-paper';

export default () => {
    const {preferred_username} = useSelector(
        (state: any) => state.authReducers,
    );
    const {colors} = useTheme();
    return (
        <View style={styles.headerContainer}>
            <Text style={{...styles.headerTitle, color: colors.text}}>
                Hi, {preferred_username?.replace('@gmail.com', '') || ''}
            </Text>
            <Text style={{...styles.headerSubTitle, color: colors.text}}>
                Where would you like to study abroad? Search below.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        height: 223,
        justifyContent: 'center',
        paddingTop: 40,
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: '700',
        color: '#2c2e3d',
        marginVertical: 20,
        letterSpacing: 1,
    },
    headerSubTitle: {
        color: '#2c2e3d',
        fontSize: 20,
        textAlign: 'center',
        width: 300,
        letterSpacing: 0.5,
    },
    headerSection: {
        color: '#00879C',
        fontSize: 20,
        marginBottom: 10,
    },
    avatar: {width: 90, height: 90},
});
