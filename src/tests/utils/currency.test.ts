import { expect } from '@jest/globals';

import getCurrency from '../../utils/getCurrency.ts';

describe('Currency test', () => {
    test('should be return currency', function() {
        expect(getCurrency()).toBe('$');
    });
});
