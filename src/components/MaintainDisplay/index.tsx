import React from 'react';
import {View} from 'react-native';
import {Avatar, Title} from 'react-native-paper';

const MaintainDisplay = () => {
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Title style={{fontSize: 25, fontWeight: 'bold'}}>
                Sorry for this inconvenience. We are currently building this
                features
            </Title>
            <Avatar.Image
                size={300}
                source={require('../../assets/images/illustrator/fixing.png')}
            />
        </View>
    );
};

export default React.memo(MaintainDisplay);
