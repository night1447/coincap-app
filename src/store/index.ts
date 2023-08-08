import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
            serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
        })],

    })
;
export default store;
