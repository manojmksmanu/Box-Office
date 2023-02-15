import React from 'react'
import { StyledActorCard } from './ActorCard.styled'

function ActorCard({image,name,gender,country,birthday,deathday}) {
  return ( 
<StyledActorCard>
<div className='img-wrapper'>
  <img src={image} alt=""  />
</div>
<h1>
  {name} {gender? `(${gender})` :null }
</h1>
<p>
  {country}
</p>
{birthday? <p>Born{birthday}</p> :null }

<p> {deathday}</p>
</StyledActorCard>
  )
}

export default ActorCard