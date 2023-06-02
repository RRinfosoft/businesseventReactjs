import { Link } from "react-router-dom"
import './Header.css'
export const logo="Event-logo.png"

const navitem=[
    {
        menu:"Home",
        path:"/"
    },

    {
        menu:"About",
        path:"/about"
    },
    {
        menu:"Speakers",
        path:"/speakers"
    },
    
    {
        menu:"Events",
        path:"/blog"
    },


    {
        menu:"Blog",
        path:"/blog"
    },

    {
        menu:"Contacts",
        path:"/contacts"
    },
  
   
   
]

const navitemFun =(item)=>{
    return(
        <Link className="nav-menu" to={item.path}> <span className="nav-menu Link nav-links nav-item">{item.menu}</span></Link>

    )
}

export const mainMenufun =navitem.map(navitemFun)