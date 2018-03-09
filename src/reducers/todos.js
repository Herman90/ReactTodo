import { Reducer } from 'redux';

let todoCounter = 1;

const todos: Reducer<[]> = function (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
            text: action.text,
            completed: false,
            id: todoCounter++
        }
      ];
    case 'TOGGLE_TODO':
      const index = action.index;
      return [
        ...state.slice(0, index),
        {...state[index], completed: !state[index].completed},
        ...state.slice(index + 1)
      ];
    default:
      return state
  }
}

export default todos;