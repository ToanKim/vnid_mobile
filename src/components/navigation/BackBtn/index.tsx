import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Title} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface IProps {
    title: string;
}

const BackBtn = (props: IProps) => {
    const {title = 'Title'} = props;
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
                marginLeft: 20,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            <Icon name="chevron-left" size={20} style={{marginRight: 10}} />
            <Title>{title}</Title>
        </TouchableOpacity>
    );
};

export default React.memo(BackBtn);
