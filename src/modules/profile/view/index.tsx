import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Avatar, useTheme} from 'react-native-paper';
import ProfileForm from '../components/ProfileForm';
import {useSelector} from 'react-redux';
import Page from 'src/components/Page';
const {width} = Dimensions.get('screen');

const AVA_URL =
    'https://scontent.fsgn6-1.fna.fbcdn.net/v/t1.0-1/p120x120/82162049_766525583841925_2677812650498326528_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=y6IjFeQpMDcAX-UAbzJ&_nc_ht=scontent.fsgn6-1.fna&_nc_tp=6&oh=7342e9452870e1f8a5338d61407903f3&oe=5EA6614C';

function Profile() {
    const user = useSelector((state: any) => state.authReducers);
    const {colors} = useTheme();
    const metaItems = [
        {
            type: 'Username',
            content: user.username || '',
        },
        {
            type: 'Email',
            content: user.email || '',
        },
        {
            type: 'Phone',
            content: user.phone || '',
        },
        {
            type: 'Date of Birth',
            content: user.date_of_birth || '',
        },
        {
            type: 'Address',
            content: user.address || '',
        },
        {
            type: 'Account Type',
            content: user.account_type || '',
        },
    ];

    return (
        <Page loading={false} styles={{...styles.container}}>
            <View style={{alignItems: 'center'}}>
                <Avatar.Image
                    size={100}
                    source={{uri: AVA_URL}}
                    style={{marginTop: 100, marginBottom: 20}}
                />
                <Text style={{...styles.name, color: colors.text}}>
                    {user.username}
                </Text>
                <Text style={{...styles.location, color: colors.text}}>
                    Ho Chi Minh, Vietnam
                </Text>
            </View>
            <View style={styles.itemsContainer}>
                <ProfileForm metaFormBuilder={metaItems} />
            </View>
        </Page>
    );
}
export default React.memo(Profile);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fbfbfc',
        flex: 1,
        width,
    },
    itemsContainer: {
        marginTop: 20,
        height: '100%',
    },
    location: {
        color: '#2b2e4a',
        fontSize: 14,
        fontWeight: '200',
    },
    name: {
        color: '#00879C',
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 5,
    },
});
