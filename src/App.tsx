import { RouterProvider } from 'react-router-dom';
import router from './routing';
import { useContext, useEffect } from 'react';
import $api from './api';
import createCoinIds from './utils/createCoinIds.ts';
import context from './context';

const App = () => {
    const { coins, changeTotal } = useContext(context);
    useEffect(() => {
        if (coins.length) {
            $api.getCoins({ ids: createCoinIds(coins) }).then(items => {
                const currentSum = items.reduce((currentSum, item, index) => currentSum + +item.priceUsd * coins[index].count, 0);
                changeTotal(currentSum);
            });
        }
    }, []);
    return (<RouterProvider router={router} />);
};
export default App;
