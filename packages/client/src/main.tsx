import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import ContextProvider from './context/ContextProvider';
import { ServerProvider } from './lib/ServerProvider';
import router from './routing';

import './index.css';
import './reset.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ServerProvider>
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    </ServerProvider>,
);
