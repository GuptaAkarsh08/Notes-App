import React , {createContext, useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css" 
import NotesProvider, {NotesContext} from "./Context/NotesProvider";


const App = () => {
  
return(
  <NotesProvider></NotesProvider>
)
}


export default App;