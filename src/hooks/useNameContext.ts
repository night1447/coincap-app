import { useContext } from 'react';
import context from '../context';

const useNameContext = () => {
    const currentContext = useContext(context);
    if (!currentContext) {
        throw new Error('CoinContext must be using within CoinProvider');
    }
    return currentContext;
};
export default useNameContext;
