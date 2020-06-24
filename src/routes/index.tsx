import * as React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from 'src/modules/home/views';
import SettingScreen from 'src/modules/settings/views';
import SignIn from 'src/modules/auth/views/SignIn';
import SignUp from 'src/modules/auth/views/SignUp';
import SearchScreen from 'src/modules/search/views';
import ProfileScreen from 'src/modules/profile/view';
import MaintainScreen from 'src/modules/Error/Views/Maintain';
import Intro from 'src/modules/auth/views/Intro';
import ChatScreen from 'src/modules/chat/views/Thread';
import MessengerScreen from 'src/modules/chat/views/ThreadList';
import PackageDetail from 'src/modules/detail/views/package';
import useAuth from 'src/hooks/useAuth';
import BackBtn from 'src/components/navigation/BackBtn';

const Tab = createMaterialBottomTabNavigator();
const AuthStack = createStackNavigator();
const SearchStack = createStackNavigator();
const SettingStack = createStackNavigator();
const MessengerStack = createStackNavigator();
const HomeStack = createStackNavigator();

const AuthRoute = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Intro"
                component={Intro}
                options={{header: () => null, headerTransparent: true}}
            />
        </AuthStack.Navigator>
    );
};

const MessengerRoute = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            // keyboardVerticalOffset={Platform.select({ios: 20, android: 78})}
            style={{
                backgroundColor: '#fbfbfc',
                flex: 1,
            }}>
            <MessengerStack.Navigator>
                <MessengerStack.Screen
                    name="ThreadList"
                    component={MessengerScreen}
                    options={{
                        headerTitle: '',
                        headerTransparent: true,
                    }}
                />
                <MessengerStack.Screen
                    name="Thread"
                    component={ChatScreen}
                    options={{
                        headerLeft: () => <BackBtn title="" />,
                    }}
                />
            </MessengerStack.Navigator>
        </KeyboardAvoidingView>
    );
};

const HomeRoute = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerTitle: '', headerTransparent: true}}
            />
            <HomeStack.Screen
                name="PackageDetail"
                component={PackageDetail}
                options={{
                    headerLeft: () => <BackBtn title="Package Detail" />,
                    headerTitle: '',
                }}
            />
        </HomeStack.Navigator>
    );
};

const SearchRoute = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen
                name="Search"
                component={SearchScreen}
                options={{headerTitle: '', headerTransparent: true}}
            />
            <SearchStack.Screen
                name="PackageDetail"
                component={PackageDetail}
                options={{
                    headerLeft: () => <BackBtn title="Package Detail" />,
                    headerTitle: '',
                }}
            />
        </SearchStack.Navigator>
    );
};

const MainRoute = () => {
    const {colors} = useTheme();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor={colors.primary}
            inactiveColor="#2C2E3D"
            keyboardHidesNavigationBar={Platform.OS === 'ios' ? false : true}
            barStyle={{backgroundColor: '#fff'}}>
            <Tab.Screen
                name="Home"
                component={HomeRoute}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon name="home" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchRoute}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon name="search" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Messenger"
                component={MessengerRoute}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon name="comments" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingRoute}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon name="cog" color={color} size={22} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const SettingRoute = () => {
    return (
        <SettingStack.Navigator>
            <SettingStack.Screen
                name="Settings"
                component={SettingScreen}
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                }}
            />
            <SettingStack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerLeft: () => <BackBtn title="Profile" />,
                    headerTransparent: true,
                    header: () => null,
                }}
            />
            <SettingStack.Screen
                name="Maintain"
                component={MaintainScreen}
                options={{
                    headerTransparent: true,
                    header: () => null,
                }}
            />
        </SettingStack.Navigator>
    );
};

const AppRoute = () => {
    const {user} = useAuth();
    return (
        <NavigationContainer>
            <AuthStack.Navigator>
                {user.isAuth ? (
                    <AuthStack.Screen
                        name="MainRoute"
                        component={MainRoute}
                        options={{headerTransparent: true, header: () => null}}
                    />
                ) : (
                    <AuthStack.Screen
                        name="AuthRoute"
                        component={AuthRoute}
                        options={{headerTransparent: true, header: () => null}}
                    />
                )}
            </AuthStack.Navigator>
        </NavigationContainer>
    );
};

export default AppRoute;
