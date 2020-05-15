import React, {Fragment, useState, useRef} from 'react'
import logo from '../../logo.svg'
import {Counter} from '../../features/counter/Counter'
import Form from '@/elements/form/Form'
import TaskList from '@/elements/taskList/TaskList'

import {Col, Row, Container} from 'shards-react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'


const MainPage = () => {

  const [editTodo, setEditTodo] = useState(false)
  const inputRef = useRef(null)

  return (
    <Container fluid>
      <Row>
        <Col className='col-sm-12 text-center mt-5'>
          <h1>
            ToDo Task Manager
          </h1>
          <p>
            This is React/RTK based task manager which was developed as test usage of RTK.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={{size: 10, offset:1 }}>
          <Form editTodo= {editTodo} setEditTodo = {setEditTodo} refProp = {inputRef}/>
        </Col>
      </Row>
        <Row className='mt-5'>
          <Col sm={{size: 10, offset:1 }} >
            <TaskList editTodo= {editTodo} setEditTodo = {setEditTodo} refProp = {inputRef}/>
          </Col>
        </Row>
    </Container>
  )
}

MainPage.propTypes = {
}

export default MainPage