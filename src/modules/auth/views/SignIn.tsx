import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, TextInput, Button} from 'react-native-paper';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import Page from 'src/components/Page';
import style from './styles';
import useAuth from 'src/hooks/useAuth';

function SignIn() {
    const navigation = useNavigation();

    function handleSignin() {
        // login(email, password);
    }
    const {colors} = useTheme();
    const {login} = useAuth();
    const [email, setEmail] = useState('dung@gmail.com');
    const [password, setPassword] = useState('123456');

    return (
        <Page contentContainerStyle={style.container} loading={false}>
            <View style={{alignSelf: 'flex-start'}}>
                <Text style={style.title}>Glad to see you!</Text>
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
                onPress={handleSignin}>
                Login
            </Button>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{marginVertical: 10, fontSize: 15}}>
                    New user?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                    <Text style={{...style.linkText, color: colors.primary}}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
            {/* <Text style={style.normalText}>or</Text>
                <Icon.Button
                    name="google"
                    backgroundColor="#3b5998"
                    style={style.socialButton}>
                    <Text style={{fontSize: 18, color: '#fff'}}>
                        Login with Google
                    </Text>
                </Icon.Button> */}
        </Page>
    );
}

export default React.memo(SignIn);
