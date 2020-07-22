import {createStore, combineReducers, compose} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import counterReducer from './counter';

const sensitiveStorage = createSensitiveStorage({
  keychainService: 'myKeychain',
  sharedPreferencesName: 'mySharedPrefs',
});

const counterPersistConfig = {
  key: 'counter',
  storage: AsyncStorage,
};

// TODO: Uncomment this section to use persist secure storage
// const tokenPersistConfig = {
//   key: "token",
//   storage: sensitiveStorage
// };

const rootReducer = combineReducers({
  counter: persistReducer(counterPersistConfig, counterReducer),
});

let composeEnhancers = compose;

if(__DEV__){
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configStore;
