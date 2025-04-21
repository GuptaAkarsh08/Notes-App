import React , {useState , useContext} from 'react'
import {FaFile,FaArrowRight} from "react-icons/fa"
import { Context } from '../App';
import { NotesContext } from '../Context/NotesProvider';

const Form = ({handleAdd}) => {
  const [title,setTitle] = useState("");
  const [text,setText] = useState("");

  const {addNotes} = useContext(NotesContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleTextChange = (e) => {
    setTitle(e.target.value)
  }
   const newfeedback = {
    title:title,
    text:text,
   }
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addNotes(newfeedback)
  }

  return (
    <form className="form1" onSubmit={handleSubmit}>
      <div className='input-group1'>
        <p className='formtext1'>~ To keep in Mind ~</p>
        <input type="text" value={title} onChange={handleTextChange} className='styletext' placeholder='Give Your Note A Title' name="" id="title"/>
        <br />
        <input type="text" name="" onChange={handleChange} value={text} className='styletext1' placeholder='Write Your Note Here' id="notes"/>
      </div>
      <button type="submit" className='button1'>
        <span>Add Note <FaArrowRight className='icon'/></span>
      </button>
    </form>
  )
}

export default Form