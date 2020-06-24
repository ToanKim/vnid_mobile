import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface IProps {
    name: string;
    action: () => void;
    fontStyle?: any;
    haveDetailScreen?: boolean;
}

export default function MenuItem(props: IProps) {
    const {haveDetailScreen = false} = props;
    return (
        <TouchableOpacity onPress={props.action}>
            <View style={styles.container}>
                <Text style={{...props.fontStyle}}>{props.name}</Text>
                {haveDetailScreen && <Icon name="chevron-right" size={20} />}
            </View>
        </TouchableOpacity>
    );
}

MenuItem.navigationOptions = {
    headerTransparent: true,
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        width: '100%',
    },
});
