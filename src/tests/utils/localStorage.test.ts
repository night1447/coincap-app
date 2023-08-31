import { expect } from '@jest/globals';

import { addLocalStorage, getLocalStorage } from '../../utils/localStorage.ts';

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
