import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { Simulate } from 'react-dom/test-utils';
import { createMemoryHistory, MemoryHistory } from 'history';

import { ICurrency } from '../../models';
import { Coin } from '../../components/Coins/Coin/Coin';

import click = Simulate.click;

describe('Routing test', () => {
    const coin: ICurrency = {
        changePercent24Hr: 0,
        marketCapUsd: 0,
        maxSupply: 0,
        name: '',
        priceUsd: 0,
        rank: '',
        supply: 0,
        symbol: '',
        volumeUsd24Hr: 0,
        vwap24Hr: 0,
        id: 'test',
    };
    let history: MemoryHistory;
    beforeEach(() => {
        history = createMemoryHistory();
    });

    test('should be correct routing onClick', function() {
        const test = render(
            <Router location={history.location} navigator={history}>
                <table>
                    <tbody>
                    <Coin coin={coin} onChange={() => {
                    }} />
                    </tbody>
                </table>
            </Router>);
        click(test.getByTestId('coin'));
        expect(history.location.pathname.search(`${coin.id}`)).not.toEqual(-1);
    });
});
