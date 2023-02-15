import React from 'react'

import { CastList } from './Cast.styled';

const Cast = ({ cast }) => {
  return (
    <CastList>
      {cast.map(({ person, character, voice }, id) => (
        <div key={id} className="cast-item">
          <div className='pic-wrapper'>
            <img
              src={person.image ? person.image.medium : "https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg"}
              alt="cast-person"
            />
          </div>
          <div className='actor'>
            <span>
                <span className='bold'>{person.name} </span> | {character.name} {voice ? '| Voice' : ''}
            </span>
          </div>
        </div>
      ))}
  </CastList>
  );
};

export default Cast
