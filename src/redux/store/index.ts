import {AsyncStorage} from 'react-native';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

import {authReducers, threadReducers} from '../reducers';

const rootReducer = combineReducers({
    authReducers,
    threadReducers,
});

const persistConfig = {
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: ['authReducers', 'threadReducers'],
    // Blacklist (Don't Save Specific Reducers)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: any = createStore(persistedReducer, applyMiddleware(thunk));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {store, persistor};

export default store;
