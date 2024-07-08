import React from 'react'
import { Outlet, useLocation} from "react-router-dom";
import { LinkStyled, NavsList } from './Navs.styled';
import Title from './Title';
const LINKS = [
    {
        to:'/dashboard',text:'Dashboard'
    },
    {
        to:'/starred',text:'Favourite'
    }
]

const Navs = () => {
  const location = useLocation();
  return (
    <div>
<Title/>

      <NavsList >
        
      {
        LINKS.map(item => (<li key={item.to}> <LinkStyled to ={item.to} className={item.to===location.pathname?'active':''}>{item.text} </LinkStyled> </li>)) 
      } </NavsList>
        <Outlet/> 
    </div>
  )
}

export default Navs
