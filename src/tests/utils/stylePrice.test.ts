import getStylePriceDifference from '../../utils/getStylePriceDifference.ts';
import { expect } from '@jest/globals';

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
