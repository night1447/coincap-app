import getCurrency from '../../utils/getCurrency.ts';
import { expect } from '@jest/globals';

describe('Currency test', () => {
    test('should be return currency', function() {
        expect(getCurrency()).toBe('$');
    });
});
