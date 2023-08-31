import getRoundingNumber from '../../utils/getRoundingNumber.ts';

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
