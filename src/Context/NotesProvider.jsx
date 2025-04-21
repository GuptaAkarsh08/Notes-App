import { createContext  , useState} from "react";
import {v4 as uuidv4} from "uuid";
import Notes from "../Components/Notes"
import data from "../Components/data"
import Form from "../Components/Form"
import Header from "../Layout/Header"


export const NotesContext = createContext();


const NotesProvider = () => {
    const [feedback,setFeedback] = useState([...data])

    const addNotes = (newNotes) => {
        newNotes.id = uuidv4()
        console.log(newNotes)
        setFeedback([newNotes,...feedback])
        console.log(feedback)
    }  
    const deleteNotes= (id) => {
     if(window.confirm("Are you sure you want to delete")){
      setFeedback(feedback.filter((item) => item.id !== id))
     }
    }
  
    const editNotes = (id , title , text) => {
    // console.log(title +" " + text)
    let updatedNotes = feedback.map((feed) => (feed.id === id ? {...feed,title,text}:feed))
    setFeedback(updatedNotes)
   }
  

return(
    <NotesContext.Provider value={{feedback,addNotes,deleteNotes,editNotes}}>
    <Header/>
    <Form/>
    <Notes></Notes> 
  </NotesContext.Provider>
)
}

export default NotesProvider;