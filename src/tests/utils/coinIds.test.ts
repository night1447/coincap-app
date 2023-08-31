import { expect } from '@jest/globals';

import { ICoin } from '../../models';
import createCoinIds from '../../utils/createCoinIds.ts';

describe('Create coin ids test', () => {
    let items: ICoin[] = [];
    beforeEach(() => {
        items = [
            {
                count: 2,
                coinId: 'bitcoin',
            }, {
                count: 4,
                coinId: 'doggyCoin',
            }, {
                count: 10,
                coinId: 'Ethereum',
            },
        ];
    });
    test('should be return empty massive', function() {
        expect(createCoinIds([])).toEqual([]);
    });
    test('should be return correct massive', function() {
        expect(createCoinIds(items)).toEqual(['bitcoin', 'doggyCoin', 'Ethereum']);
    });
});
