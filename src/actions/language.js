export const setLanguage = (item) => {
    console.log('item ', item);
    return {
        type: 'set',
        item
    }
}