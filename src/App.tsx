import { RouterProvider } from 'react-router-dom';
import router from './routing';
import useTypedSelector from './hooks/useTypedSelector.ts';
import { useEffect } from 'react';
import $api from './api';
import createCoinIds from './utils/createCoinIds.ts';
import { useDispatch } from 'react-redux';
import { changeTotalAction } from './store/reducers/BriefCase/actions.ts';

const App = () => {
    const coins = useTypedSelector(state => state.briefCase.coins);
    const dispatch = useDispatch();
    useEffect(() => {
        if (coins.length) {
            $api.getCoins({ ids: createCoinIds(coins) }).then(items => {
                const currentSum = items.reduce((currentSum, item, index) => currentSum + +item.priceUsd * coins[index].count, 0);
                dispatch(changeTotalAction(currentSum));
            });
        }
    }, []);
    return (<RouterProvider router={router} />);
};
export default App;
