import { render } from '@testing-library/react';
import { expect } from '@jest/globals';

import { Difference } from '../../components/Difference/Difference';
import ContextProvider from '../../context/ContextProvider';
import * as NameContext from '../../hooks/useNameContext';
import { IContext } from '../../context';

describe('Difference test', function() {
    beforeEach(() => {
        jest.mock('react', () => {
            return {
                ...jest.requireActual('react'),
                useContext: jest.fn().mockReturnValue({
                    coins: [],
                }),
            };
        });
    });
    test('should be create Difference with empty coins', function() {
        const component = render(<Difference />);
        expect(component).toMatchSnapshot();

    });
    test('should be create Difference with no empty coins', function() {
        const spyInstance = jest.spyOn(NameContext, 'useNameContext');
        const context: IContext = {
            total: 1000,
            coins: [],
            count: 0,
            changeTotal: () => {

            },
            removeCoin: () => {

            },
            addCoin: () => {

            },
        };
        spyInstance.mockReturnValue(context);
        const component = render(
            <ContextProvider>
                <Difference />
            </ContextProvider>);
        const item = component.getByTestId('total');
        expect(item.innerHTML.includes('1000')).toEqual(true);
    });
});
