const bodyScroll = {
    lock() {
        document.body.style.overflow = 'hidden';
    },
    unlock() {
        document.body.style.overflow = '';
    }
}
export default bodyScroll;
