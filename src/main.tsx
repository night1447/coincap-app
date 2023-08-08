import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import { RouterProvider } from 'react-router-dom';
import index from './routing';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={index} />,
    </Provider>,
);
