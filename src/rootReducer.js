import { combineReducers } from 'redux';

import user from './reducers/user';
import loading from './reducers/loading';

const appReducer = combineReducers({
    user,
    loading,
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;