import {createSlice} from '@reduxjs/toolkit'


const isEditSlice = createSlice({
    name: 'isEdit',
    initialState: {
        status: false,
        todoId: undefined 
    },
    reducers: {
        toggleEdit: (state, {payload}) => {
            state.todoId = payload
            state.status = true
        }
    },
    extraReducers: {

    }
})



// SELECTORS
export const selectIsEdit = (state) => state.isEdit.status
export const todoId = (state) => state.isEdit.todoId


//ACTIONS
export const {toggleEdit} = isEditSlice.actions


export default isEditSlice.reducer
