import briefCaseReducer from './BriefCase/reducers.ts';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const config = {
    key: 'root',
    storage: storage,
};
const rootReducer = persistReducer(config, combineReducers({
    briefCase: briefCaseReducer,
}));
export default rootReducer;

export type rootReducerType = ReturnType<typeof rootReducer>;
