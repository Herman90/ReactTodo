import { combineReducers, Reducer } from 'redux';

import todos from './todos';

let reducer: Reducer<{}> = combineReducers({
  todos
});

export default reducer;