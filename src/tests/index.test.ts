import { checkPrice } from '../utils/checkPrice.ts';
import getRoundingNumber from '../utils/getRoundingNumber.ts';
import getStylePriceDifference from '../utils/getStylePriceDifference.ts';

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

describe('Difference price test', () => {
    test('should be return neutral style', function() {
        expect(getStylePriceDifference('0').includes('neutral')).toBe(true);
    });
    test('should be return positive style', function() {
        expect(getStylePriceDifference('11').includes('positive')).toBe(true);
    });
    test('should be return negative style', function() {
        expect(getStylePriceDifference('-11').includes('negative')).toBe(true);
    });
    test('should be return neutral style with empty string', function() {
        expect(getStylePriceDifference('').includes('neutral')).toBe(true);
    });

});

