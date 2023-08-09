import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import ContextProvider from './components/ContextProvider/ContextProvider.tsx';
import router from './routing';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>,
);
