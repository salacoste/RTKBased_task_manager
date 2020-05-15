import {createSlice} from '@reduxjs/toolkit'

import csv from '@/features/convertcsv.json'

import {v4 as uuid} from 'uuid'
import _ from 'lodash'

const arrayToObject = (array) =>
   array.reduce((obj, item) => {
     obj[item.id] = item
     return obj
   }, {})

const todos = csv.map((el)=> {
    return {
        id: uuid(),
        "Field name": el["Field name"],
        "Field description": el["Field description"],
        "Category name": el["Category name"],
        "Category description": el["Category description"],
        isComplete: false
    }
})
// console.log('10', todos)
// console.log('10', arrayToObject(todos))


const todosSlice = createSlice({
    name: 'todos',
    initialState: todos,
    reducers: {
        remove: (state, {payload} ) => {
            console.log('REMOVE actions is proceeding', payload, state)
            const todo = state.find(todo => todo.id === payload)
            // state[payload.id]
            _.remove(state,(el) =>{
                return el.id === payload
            })
            
        },
        toggleComplete: (state, {payload}) => {
            const todo = state.find(todo => todo.id === payload)
            todo.isComplete = true
            console.log(`TOGGLE action is proceeding with ${todo.id} and isComplete ${todo.isComplete}` )
        }
    },
    extraReducers: {

    }
})


// ACTIONS
export const removeTodo = todosSlice.actions.remove;
export const {toggleComplete} = todosSlice.actions



// ASYNS THUNK BASED DISPATCHES

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const changeAsync = props => dispatch => {
    setTimeout(() => {
      dispatch(removeTodo(props));
    }, 1000);
  };


// SELECTORS
export const selectTodos = state => state.todos;



export default todosSlice.reducer