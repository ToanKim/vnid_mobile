import React from 'react';
import AppRoute from 'src/routes';
import {store} from 'src/redux/store';
import {Provider} from 'react-redux';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    // roundness: 12,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgba(58,73,224, 0.7)',
        accent: '#f1c40f',
        onBackground: 'rgba(58,73,224, 0.06)',
        text: '#2C2E3D',
    },
};

const App = () => {
    return (
        <>
            <PaperProvider theme={theme}>
                <Provider store={store}>
                    <AppRoute />
                </Provider>
            </PaperProvider>
        </>
    );
};

export default App;
