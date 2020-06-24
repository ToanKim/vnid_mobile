import React from 'react';
import {StyleSheet, Text} from 'react-native';
import MenuItem from '../components/MenuItem';
import {useNavigation} from '@react-navigation/native';
import useAuth from 'src/hooks/useAuth';
import {useTheme} from 'react-native-paper';
import Page from 'src/components/Page';

function Settings() {
    const MENU_ITEM = [
        {
            name: 'Profile',
            action: () => navigation.navigate('Maintain'),
            haveDetailScreen: true,
        },
        {
            name: 'Payment',
            action: () => navigation.navigate('Maintain'),
        },
        {
            name: 'Notification',
            action: () => navigation.navigate('Maintain'),
        },
        {
            name: 'Term and Condition',
            action: () => navigation.navigate('Maintain'),
        },
        {
            name: 'Report a problem',
            action: () => navigation.navigate('Maintain'),
        },
        {
            name: 'Log out',
            action: async () => await handleLogout(),
        },
    ];

    const navigation = useNavigation();
    const {handleLogout} = useAuth();
    const {colors} = useTheme();
    return (
        <Page loading={false} contentContainerStyle={styles.container}>
            <Text style={{...styles.header}}>Settings</Text>
            {MENU_ITEM.map((item: any) => (
                <MenuItem
                    key={item.name}
                    fontStyle={{color: colors.text, fontSize: 16}}
                    {...item}
                />
            ))}
        </Page>
    );
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingTop: 50,
    },
    header: {
        marginBottom: 10,
        fontSize: 25,
        fontWeight: '700',
        color: '#2c2e3d',
        marginVertical: 20,
        letterSpacing: 1,
    },
    subHeader: {
        color: '#74B6C1',
        marginVertical: 10,
    },
});
