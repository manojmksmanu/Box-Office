import React from 'react'
// import { TitleWrapper } from './Title.styled'
import { Appbar } from './show/AppBar'

const Title = () => {
  return (
    <>
    <Appbar/>
    <h1 className='text-center mt-6 text-blue-700 font-bold '>Box Office</h1>
    <h3 className='text-center mt-3 mb-2 '> Are you looking for a movie or an actor ?</h3>
    </>
    // <TitleWrapper className='mt-10'>
   
  
    //   </TitleWrapper>
  )
}

export default Title
