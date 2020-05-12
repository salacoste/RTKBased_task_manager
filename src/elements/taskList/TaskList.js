import React, {Fragment} from 'react'
import {ListGroup, ListGroupItem} from 'shards-react'

import _ from 'lodash'
import {v1 as uuid} from 'uuid'

import '@fortawesome/fontawesome-free/css/all.css'
import './TaskList.scss'

import data from '@/features/fakeData/data'

import convert from '@/features/convertcsv.json'


export default ({editMode, setEditMode})=> {

const category = _.uniqBy(convert, "Category name")[3]["Category name"]
const list = convert.filter(el=>{
    return el["Category name"] === category
})

console.log(list)

    const ElList = () => {
        return list.map(el=> {
            return (
                // <ListGroupItem key={el.id}>
                //     {el.desc} <i className="fas fa-check float-right align-middle"></i> <i className="fas fa-times float-right align-middle"></i>
                // </ListGroupItem>

                <ListGroupItem key={uuid()}>
                    <b>{el["Field name"]}</b>, {el["Field description"]} <i className="fas fa-check float-right align-middle"></i> <i className="fas fa-times float-right align-middle"></i>
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