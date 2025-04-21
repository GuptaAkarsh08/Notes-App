import React from 'react'
import {Button, Card,CardBody,CardText,CardTitle} from "reactstrap"
import {FaTimes,FaEdit} from "react-icons/fa";

const Cards = ({note,handleDelete,handleEdit}) => {
   const {id,title,text} = note; 

  return (
    <Card className='card1' >
       <CardBody>
          <div className="carddesign">
               <p>{title}</p>
               <p className='cardtext'>{text}</p>
          </div>
          <Button type="button"  className='edit' onClick={() => handleEdit(id,title,text)}><FaEdit/></Button>
          <Button type='button' className='close' onClick={() => handleDelete(id)}  >
            <FaTimes ></FaTimes>
          </Button>
       </CardBody>
    </Card>
  )
}

export default Cards