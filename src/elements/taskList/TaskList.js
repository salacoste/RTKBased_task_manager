import React, {Fragment} from 'react'
import {ListGroup, ListGroupItem} from 'shards-react'

import '@fortawesome/fontawesome-free/css/all.css'
import './TaskList.scss'

export default ()=> {

    return (
        <Fragment>
            <h3>
                Task List:
            </h3>
            <ListGroup >
                <ListGroupItem>
                    2
                </ListGroupItem>
                <ListGroupItem>3 <i className="fas fa-check float-right align-middle"></i> <i className="fas fa-times float-right align-middle"></i> </ListGroupItem>
                <ListGroupItem>4</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
        </Fragment>
    )
}