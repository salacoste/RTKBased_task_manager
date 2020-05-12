import React, {Fragment, useState} from 'react'
import logo from '../../logo.svg'
import {Counter} from '../../features/counter/Counter'
import Form from '@/elements/form/Form'
import TaskList from '@/elements/taskList/TaskList'

import {Col, Row, Container} from 'shards-react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'


const MainPage = () => {

  const [editMode, setEditMode] = useState(false)

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
          <Form editMode= {editMode} setEditMode = {setEditMode} />
        </Col>
      </Row>
        <Row className='mt-5'>
          <Col sm={{size: 10, offset:1 }} >
            <TaskList editMode= {editMode} setEditMode = {setEditMode}/>
          </Col>
        </Row>
    </Container>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <Counter />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <span>
  //         <span>Learn </span>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           React
  //         </a>
  //         <span>, </span>
  //         <a
  //           className="App-link"
  //           href="https://redux.js.org/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Redux
  //         </a>
  //         <span>, </span>
  //         <a
  //           className="App-link"
  //           href="https://redux-toolkit.js.org/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Redux Toolkit
  //         </a>
  //         ,<span> and </span>
  //         <a
  //           className="App-link"
  //           href="https://react-redux.js.org/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           React Redux
  //         </a>
  //       </span>
  //     </header>
  //   </div>
  // );

}

MainPage.propTypes = {
}

export default MainPage