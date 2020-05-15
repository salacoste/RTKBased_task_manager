import React, {Fragment, useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Form, FormInput, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Button } from "shards-react";

import {selectIsEdit as select, todoId} from '@features/isEdit/isEditSlice'

import {selectTodos} from '@features/todos/todosSlice'

import './Form.scss'

export default ({refProp, editTodo, setEditTodo}) => {
    const [text, setText] = useState('')
    const [editText, setEditText] = useState('')

    const selectIsEdit = useSelector(select)
    const isEditTodoId = useSelector(todoId)
    const todos = useSelector(selectTodos)



    useEffect(()=>{
        const todo = todos.find(t => t.id === isEditTodoId) || null
    }, [todos])

    const onChangeHandler = (e) => {
        setText(e.target.value)
    }

    const onClickHandler = (e) => {
        e.preventDefault()
        text && console.log(text)

        
    }

    const onChangeEditHandler = (e) => {

        setEditText(e.target.value)
    }

    const onClickEditHandler = (e) => {
        e.preventDefault()

    }


    return (
        <Form >
            <FormGroup sm='12' lg='8'>
                <label htmlFor="#task" className='mr-3 display-5'>Task</label>
                <InputGroup>
                    <FormInput placeholder="enter new task" onChange = {onChangeHandler} value={text}/>
                    <InputGroupAddon type="append">
                    <Button theme="secondary" onClick={onClickHandler}>Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
            <FormGroup sm='12' lg='8' style={{display: !selectIsEdit && 'none'}}>
                <label htmlFor="#edit" className='mr-3 display-5'>Edit mode:</label>
                <InputGroup>
                    <FormInput placeholder="Edit the task" onChange = {onChangeEditHandler} value={editText} innerRef={refProp}/>
                    <InputGroupAddon type="append">
                    <Button theme="secondary" onClick={onClickEditHandler}>Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}