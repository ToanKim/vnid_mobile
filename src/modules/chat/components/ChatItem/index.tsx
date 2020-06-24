import React from 'react';
import {StyleSheet} from 'react-native';
import {List, Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {IThread} from '../../service';
interface IProps {
    fontStyle?: any;
    data: IThread;
}

export default function ThreadItem(props: IProps) {
    const {data} = props;
    const {lastMessage, nicknames, friendImageUrl} = data;
    const navigation = useNavigation();
    return (
        <List.Item
            title={nicknames}
            description={lastMessage}
            titleStyle={styles.title}
            descriptionStyle={styles.description}
            onPress={() => navigation.navigate('Thread')}
            left={() => (
                <Avatar.Image
                    style={styles.avatarContainer}
                    size={60}
                    source={{uri: friendImageUrl}}
                />
            )}
            style={styles.container}
        />
    );
}

ThreadItem.navigationOptions = {
    headerTransparent: true,
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 25,
        borderBottomWidth: 1.7,
        borderBottomColor: 'rgba(173,170,177,0.3)',
    },
    avatarContainer: {
        marginRight: 15,
    },
    title: {
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 5,
    },
    description: {
        fontSize: 15,
    },
});
