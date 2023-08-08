import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import App from './App.tsx';
import store from './store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />,
        </PersistGate>
    </Provider>,
);
