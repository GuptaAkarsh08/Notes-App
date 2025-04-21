import React, { useContext } from 'react'
import Cards from './Cards'
import {Row,Col} from "reactstrap"
import { Context } from '../App'
import { NotesContext } from '../Context/NotesProvider'
 
const Notes = ({}) => {
  const {feedback,deleteNotes,editNotes} = useContext(NotesContext) 
  return (
    <div className='note'>
      <Row>
            {
                feedback.map((note) => (
                  <Col  key={note.id} md={6}>
                     <Cards note={note} handleDelete={deleteNotes} handleEdit={editNotes}></Cards>
                  </Col>
                ))
            }
      </Row>
        </div>
  )
}

export default Notes