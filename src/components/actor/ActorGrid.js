import React from 'react'
import { FlexGrid } from '../styled';
import ActorCard from './ActorCard';
const ActorGrid = ({data}) => {
    return (
        <>
        <FlexGrid>
              {data.map(( {person} ) => (
           <ActorCard
           key={person.id}
           name={person.name}
           country={person.country ? person.country.name:null}
           birthday={person.birthday}
           deathday={person.deathday?person.deathday:'Alive'}
           gender={person.gender}
           image={person.image ? person.image.medium : "https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg"} 
         />
         ))}
         </FlexGrid>
         </>
       );
}

export default ActorGrid
