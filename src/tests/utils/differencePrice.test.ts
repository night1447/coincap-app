import { IAdditionalCoin, ICurrency } from '../../models';
import getDifferencePrice, { initialState } from '../../utils/getDifferencePrice.ts';

describe('Difference price test', () => {
    let currentCoins: ICurrency[] = [];
    let coins: IAdditionalCoin[] = [];
    beforeEach(() => {
        coins = [{
            price: 6928.821,
            count: 1,
            coinId: 'bitcoin',

        }];
        currentCoins = [{
            'id': 'bitcoin',
            'rank': '1',
            'symbol': 'BTC',
            'name': 'Bitcoin',
            'supply': 17193925.000,
            'maxSupply': 21000000.000,
            'marketCapUsd': 119150835874.469,
            'volumeUsd24Hr': 2927959461.175,
            'priceUsd': 6929.821,
            'changePercent24Hr': -0.8101417214350335,
            'vwap24Hr': 7175.066,
        }];
    });
    test('should be return default state', function() {
        expect(getDifferencePrice([], [])).toBe(initialState);
    });
    test('should be return correct difference between price', function() {
        const difference = getDifferencePrice(coins, currentCoins);
        expect(+difference.value).toBe(1);
        expect(+difference.percent).toBe(0.00014);
        expect(difference.className.includes('positive')).toBe(true);
    });
    test('should be return correct difference between prices(multiplicity)', function() {
        coins.push({
            price: 987.345,
            coinId: 'doggyCoin',
            count: 10,
        });
        currentCoins.push({
            id: 'doggyCoin',
            'rank': '11',
            'symbol': 'TRX',
            'name': 'TRON',
            'supply': 65748111645.000,
            'maxSupply': null,
            'marketCapUsd': 1917190870.728,
            'volumeUsd24Hr': 97380139.3492,
            'priceUsd': 1000.345,
            'changePercent24Hr': -1.43173,
            'vwap24Hr': 0.0298,
        });
        const difference = getDifferencePrice(coins, currentCoins);
        expect(+difference.value).toBe(131);
        expect(+difference.percent).toBe(0.013);
        expect(difference.className.includes('positive')).toBe(true);
    });
    test('should be return correct negative value', function() {
        coins.push({
            price: 987.345,
            coinId: 'doggyCoin',
            count: 10,
        });
        currentCoins.push({
            id: 'doggyCoin',
            'rank': '11',
            'symbol': 'TRX',
            'name': 'TRON',
            'supply': 65748111645.000,
            'maxSupply': null,
            'marketCapUsd': 1917190870.728,
            'volumeUsd24Hr': 97380139.3492,
            'priceUsd': 498.5,
            'changePercent24Hr': -1.43173,
            'vwap24Hr': 0.0298,
        });
        const difference = getDifferencePrice(coins, currentCoins);
        expect(+difference.percent).toBeLessThan(0);
    });
});



