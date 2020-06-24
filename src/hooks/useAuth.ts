import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    signInSuccess,
    signInError,
    signOutSuccess,
    signOutError,
} from 'src/redux/actions/auth';
import {AsyncStorage} from 'react-native';
import {clearMessage} from 'src/redux/actions/chat';
import {authorize, refresh, revoke} from 'react-native-app-auth';
import jwt_decode from 'jwt-decode';
import {authConfig} from 'src/constants';

const useAuth = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const user = useSelector((state: any) => state.authReducers);
    const dispatch = useDispatch();
    console.log(user.isAuth);
    const handleLogin = async () => {
        try {
            setLoading(true);
            const response = await authorize(authConfig);
            const {accessToken, refreshToken} = response;
            await AsyncStorage.multiSet([
                ['accessToken', accessToken],
                ['refreshToken', refreshToken === null ? '' : refreshToken], // Offline Access is not checked
            ]);
            const decoded: Object = jwt_decode(accessToken);
            const randomGen = Math.floor(Math.random() * 6) + 1;
            dispatch(signInSuccess({...decoded, sub: decoded.sub + randomGen}));
            setLoading(false);
        } catch (error) {
            console.error('error: ', error);
            dispatch(signInError());
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            setLoading(true);
            const accessToken = await AsyncStorage.getItem('accessToken');
            console.log('token: ', accessToken);
            await revoke(authConfig, {
                tokenToRevoke: accessToken || '',
                includeBasicAuth: true,
                sendClientId: true,
            });
            await AsyncStorage.multiSet([
                ['accessToken', ''],
                ['refreshToken', ''],
            ]);

            dispatch(signOutSuccess());
            dispatch(clearMessage());
            setLoading(false);
        } catch (error) {
            console.error(error);
            dispatch(signOutError());
        } finally {
            setLoading(false);
        }
    };

    const handleRefreshToken = async () => {
        try {
            const refreshToken = await AsyncStorage.getItem('refreshToken');
            if (refreshToken !== '' && refreshToken !== null) {
                const response = await refresh(authConfig, {refreshToken});
                await AsyncStorage.multiSet([
                    ['accessToken', response.accessToken],
                    [
                        'refreshToken',
                        response.refreshToken === null
                            ? ''
                            : response.refreshToken,
                    ],
                ]);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const isLoggedIn = async () => {
        const accessToken = await AsyncStorage.getItem('accessToken');
        return accessToken === null || accessToken === '' ? false : true;
    };

    useEffect(() => {
        //TODO access to local storage to get user's data
    }, []);

    return {
        isLoading,
        handleLogin,
        handleLogout,
        handleRefreshToken,
        isLoggedIn,
        user,
    };
};

export default useAuth;
