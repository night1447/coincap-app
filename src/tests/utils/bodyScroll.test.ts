import bodyScroll from '../../utils/bodyScroll.ts';

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
