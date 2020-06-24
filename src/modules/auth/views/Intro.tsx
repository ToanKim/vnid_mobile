import React from 'react';
import {Text, Button} from 'react-native-paper';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Page from 'src/components/Page';
import style from './styles';
import useAuth from 'src/hooks/useAuth';

function Intro() {
    const {handleLogin} = useAuth();

    return (
        <Page loading={false} contentContainerStyle={style.container}>
            <View style={{alignSelf: 'flex-start'}}>
                <Text style={style.title}>Glad to see you!</Text>
            </View>
            <Button
                mode="contained"
                labelStyle={{fontSize: 18}}
                contentStyle={style.buttonStyle}
                onPress={handleLogin}>
                Login
            </Button>
        </Page>
    );
}

export default React.memo(Intro);
