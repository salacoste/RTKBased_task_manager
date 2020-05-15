import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

import todosReducer from '@features/todos/todosSlice'
import isEditReducer from '@features/isEdit/isEditSlice'



export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    isEdit: isEditReducer,
  },
});
