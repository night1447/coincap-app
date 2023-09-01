const addLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
};
const getLocalStorage = (key: string) => localStorage.getItem(key);

export { getLocalStorage, addLocalStorage };
