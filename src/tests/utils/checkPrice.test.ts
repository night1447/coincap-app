import { expect } from '@jest/globals';

import { checkPrice } from '../../utils/checkPrice.ts';

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
