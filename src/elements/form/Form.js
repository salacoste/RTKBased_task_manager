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
        <Form inline>
            <FormGroup sm='12'>
                <label htmlFor="#task" className='mr-3'>Task</label>
                <InputGroup>
                    <FormInput placeholder="enter new task" onChange = {onChangeHandler} value={text}/>
                    <InputGroupAddon type="append">
                    <Button theme="secondary" onClick={onClickHandler}>Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}