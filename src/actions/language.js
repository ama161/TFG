export const UPDATE = 'UPDATE';

export function updateLanguage(language) {
    localStorage.setItem('language', language);
    
    return {
        type: UPDATE,
        payload: language
    }
}