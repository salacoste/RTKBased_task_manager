import React, {Fragment, useState } from 'react'
import { Form, FormInput, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Button } from "shards-react";

import './Form.scss'

export default () => {
    const [text, setText] = useState('')

    const onChangeHandler = (e) => {
        setText(e.target.value)
    }

    const onClickHandler = (e) => {
        e.preventDefault()
        text && console.log(text)

        
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
            <FormGroup sm='12' lg='8'>
                <label htmlFor="#edit" className='mr-3 display-5'>Edit mode:</label>
                <InputGroup>
                    <FormInput placeholder="Edit the task" onChange = {onChangeHandler} value={text}/>
                    <InputGroupAddon type="append">
                    <Button theme="secondary" onClick={onClickHandler}>Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}