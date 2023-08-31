import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import ContextProvider from './context/ContextProvider.tsx';
import router from './routing';

import './index.css';
import './reset.css';
import { ServerProvider } from './lib/ServerProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ServerProvider>
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    </ServerProvider>,
);
