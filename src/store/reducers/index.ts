import briefCaseReducer from './BriefCase/reducers.ts';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    briefCase: briefCaseReducer,
});
export default rootReducer;

export type rootReducerType = ReturnType<typeof rootReducer>;
