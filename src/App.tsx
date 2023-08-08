import { RouterProvider } from 'react-router-dom';
import index from './routing';
import useTypedSelector from './hooks/useTypedSelector.ts';
import { useEffect } from 'react';
import $api from './api';
import createIds from './utils/createIds.ts';
import { useDispatch } from 'react-redux';
import { changeTotalAction } from './store/reducers/BriefCase/actions.ts';

const App = () => {
    const coins = useTypedSelector(state => state.briefCase.coins);
    const dispatch = useDispatch();
    useEffect(() => {
        if (coins.length) {
            $api.getCoins({ ids: createIds(coins) }).then(items => {
                const currentSum = items.reduce((currentSum, item, index) => currentSum + +item.priceUsd * coins[index].count, 0);
                dispatch(changeTotalAction(currentSum));
            });
        }
    }, []);
    return (<RouterProvider router={index} />);
};
export default App;
