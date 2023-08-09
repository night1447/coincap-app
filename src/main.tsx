import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import App from './App.tsx';
import ContextProvider from './components/ContextProvider/ContextProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ContextProvider>
        <App />
    </ContextProvider>,
);
