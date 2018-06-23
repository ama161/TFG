export const UPDATE = 'UPDATE';

export function updateLanguage(language) {
    return {
        type: UPDATE,
        payload: language
    }
}