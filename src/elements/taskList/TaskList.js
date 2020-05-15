import React, {Fragment, } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {ListGroup, ListGroupItem} from 'shards-react'

import _ from 'lodash'
import {v1 as uuid} from 'uuid'

import '@fortawesome/fontawesome-free/css/all.css'
import './TaskList.scss'

import convert from '@features/convertcsv.json'

import {
    selectTodos, 
    removeTodo, 
    toggleComplete
} from '@features/todos/todosSlice'

import {
    selectIsEdit as select,
    toggleEdit,
    todoId
} from '@features/isEdit/isEditSlice'



export default ({editMode, setEditMode, refProp})=> {

    const todos = useSelector(selectTodos)
    const selectIsEdit = useSelector(select)
    const isEditTodoId = useSelector(todoId)


    const todo = todos.find(t => t.id === isEditTodoId) || null

    const dispatch = useDispatch()

    const category = _.uniqBy(convert, "Category name")[3]["Category name"]
    const list = convert.filter(el=>{
        return el["Category name"] === category
    })

    const removeTodoHandler = (id) => {
        dispatch(removeTodo(id))
    }

    const completeTaskHandler = (id) => {
        dispatch(toggleComplete(id))
    }

    const editTodoHandler = async (id) => {
        await dispatch(toggleEdit(id))
        console.log('111', refProp.current.value)
        await todo && (refProp.current.value = todo["Field description"])
        refProp.current.focus()
        // refProp.current.value = todo.

        
    }

    const ElList = () => {
        return todos.map((el, i)=> {
            return (


                <ListGroupItem key={uuid()} >
                    {i+1} <span  className={'w20 col-sm-8 edit'} 
                    onClick={(e)=> {
                        editTodoHandler(el.id)
                    }}
                    ><b>{el["Field name"]}</b>, {el["Field description"]}</span>
                    <span className="w20" className="col-sm-4 float-right">
                    <i className="fas fa-check align-middle pr-2" onClick={(e)=>completeTaskHandler(el.id)}></i> 
                    <i className="fas fa-times align-middle" onClick={(e)=>{removeTodoHandler(el.id)}}></i>
                    </span>
                </ListGroupItem>
            )
        })
    }

    return (
        <Fragment>
            <h3>
                Task List:
            </h3>
            <ListGroup >
                {ElList()}
            </ListGroup>
        </Fragment>
    )
}