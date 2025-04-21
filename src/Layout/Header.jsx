import React,{useEffect} from 'react'

const Header = ({title,shortTitle}) => {
 useEffect(() => {
  document.title=shortTitle;
 }, [shortTitle])
  return (
    <header>
       <div className="container">
         <p>{title}</p>
       </div>
    </header>
  )
}

Header.defaultProps = {
    title:"Welcome to Your Notes App!",
    shortTitle:"Personalized Notes App"
}

export default Header