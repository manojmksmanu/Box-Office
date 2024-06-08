import React from 'react'
import { Outlet } from "react-router-dom";
import { NavsList } from '../Navs.styled';


const NavDuplicate = () => {

    return (
        <div>
            <div>
                <h1 className='text-center mt-6 text-blue-700 font-bold '>Box Office</h1>
                <h3 className='text-center mt-3 mb-2 '> Are you looking for a movie or an actor ?</h3>
            </div>
            <NavsList >
            </NavsList>
            <Outlet />
        </div>
    )
}

export default NavDuplicate
