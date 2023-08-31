import { IContext } from '../../context';
import { render } from '@testing-library/react';
import ContextProvider from '../../context/ContextProvider.tsx';
import { Bag } from '../../components/Bag/Bag.tsx';
import * as NameContext from '../../hooks/useNameContext';

describe('Bag test', () => {
    const spyInstance = jest.spyOn(NameContext, 'useNameContext');
    const jsx = <ContextProvider>
        <Bag showBag={true} onClose={() => {
        }} />
    </ContextProvider>;
    test('should be return empty title', function() {
        const state: IContext = {
            total: 0,
            coins: [],
            count: 0,
            changeTotal: () => {

            },
            removeCoin: () => {

            },
            addCoin: () => {

            },
        };
        spyInstance.mockReturnValue(state);
        const component = render(jsx);
        expect(component.getByText('Ваш портфель пуст').innerHTML).not.toEqual('');
    });
    test('should be return lists', function() {
        const noEmptyState: IContext = {
            total: 123,
            coins: [{ count: 1, coinId: '1', price: 123 }, { count: 1, coinId: '12', price: 123 }],
            count: 2,
            changeTotal: () => {
            },
            removeCoin: () => {
            },
            addCoin: () => {
            },
        };
        spyInstance.mockReturnValue(noEmptyState);

        const component = render(jsx);

        expect(component.getByRole('list')).not.toBeFalsy();
        expect(component.getByText('Стоимость портфеля').innerHTML).not.toBeFalsy();
    });
});
