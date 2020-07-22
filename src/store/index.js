import {createStore, combineReducers} from 'redux';
import counterReducer from './counter';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const configStore = () => {
  return createStore(rootReducer);
};

export default configStore;
