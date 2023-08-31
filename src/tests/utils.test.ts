import { checkPrice } from '../utils/checkPrice';
import getRoundingNumber from '../utils/getRoundingNumber';
import getStylePriceDifference from '../utils/getStylePriceDifference';
import getDifferencePrice, { initialState } from '../utils/getDifferencePrice';
import { IAdditionalCoin, ICoin, ICurrency } from '../models';
import createCoinIds from '../utils/createCoinIds';
import getCurrency from '../utils/getCurrency';
import { addLocalStorage, getLocalStorage } from '../utils/localStorage';
import bodyScroll from '../utils/bodyScroll.ts';

describe('Check price test', () => {
    test('should return the same value', function() {
        expect(checkPrice(12.15)).toBe(12.15);
    });
    test('should return rounding value', function() {
        expect(checkPrice(12.15126573523)).toBe(12.151266);
    });
    test('should return precision value', function() {
        expect(checkPrice(0.0000252)).toBe(0.0000252);
    });

});
describe('Rounding test', () => {
    test('should be return the same value', function() {
        expect(getRoundingNumber(10.05)).toBe(10.05);
    });
    test('should be return rounding value', function() {
        expect(getRoundingNumber(10.000006)).toBe(10.000001);
    });
    test('should be return current fractal rounding value', function() {
        expect(getRoundingNumber(10.07, 1)).toBe(10.1);
    });
});

describe('Style price test', () => {
    test('should be return neutral style', function() {
        expect(getStylePriceDifference('0').includes('neutral')).toBe(true);
    });
    test('should be return positive style', function() {
        expect(getStylePriceDifference('11').includes('positive')).toBe(true);
    });
    test('should be return negative style', function() {
        expect(getStylePriceDifference('-11').includes('negative')).toBe(true);
    });
    test('should be return neutral style, when empty string', function() {
        expect(getStylePriceDifference('').includes('neutral')).toBe(true);
    });

});

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

describe('Currency test', () => {
    test('should be return currency', function() {
        expect(getCurrency()).toBe('$');
    });
});

describe('LocalStorage test', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem');
    test('should be setItem in storage', function() {
        addLocalStorage('test', 'test');
        expect(setItemSpy).toHaveBeenCalledWith('test', 'test');
    });
    test('should be correct call getLocalStorage', function() {
        getLocalStorage('test');
        expect(getItemSpy).toHaveBeenCalledWith('test');
    });
    test('should be correct return value from storage', function() {
        addLocalStorage('test', 'test');
        expect(getLocalStorage('test')).toEqual('test');
    });
    test('should be return null if key is empty', function() {
        expect(getLocalStorage('')).toBeNull();
    });
});


describe('Body scroll test', () => {
    test('should be lock body scroll', function() {
        bodyScroll.lock();
        expect(document.body.style.overflow).toEqual('hidden');
    });
    test('should be unlock body scroll', function() {
        bodyScroll.lock();
        expect(document.body.style.overflow).toEqual('hidden');
        bodyScroll.unlock();
        expect(document.body.style.overflow).toEqual('');
    });
});
