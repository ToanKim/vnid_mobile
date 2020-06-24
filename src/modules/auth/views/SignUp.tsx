import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, TextInput, Button} from 'react-native-paper';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import Page from 'src/components/Page';
import style from './styles';
import useAuth from 'src/hooks/useAuth';

function SignUp() {
    const navigation = useNavigation();

    function handleSignUp() {
        // register(email, password);
    }
    const {colors} = useTheme();
    const {register} = useAuth();
    const [email, setEmail] = useState('dung@gmail.com');
    const [password, setPassword] = useState('123456');

    return (
        <Page contentContainerStyle={style.container} loading={false}>
            <View style={{alignSelf: 'flex-start'}}>
                <Text style={style.title}>Register to enjoy our service!</Text>
            </View>
            <TextInput
                mode="flat"
                placeholder="Email"
                label="Email"
                value={email}
                style={style.input}
                onChangeText={setEmail}
            />
            <TextInput
                mode="flat"
                placeholder="Password"
                label="Password"
                secureTextEntry={true}
                value={password}
                style={style.input}
                onChangeText={setPassword}
            />
            {/* <Text style={style.errorText}>{authError}</Text> */}
            <Button
                mode="contained"
                labelStyle={{fontSize: 18}}
                contentStyle={style.buttonStyle}
                onPress={handleSignUp}>
                Register
            </Button>
        </Page>
    );
}

export default React.memo(SignUp);
