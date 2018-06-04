import { combineReducers } from 'redux'

import language from './language'
import user from "./user";

const reducer = combineReducers({
    language,
    user,
});

export default reducer
