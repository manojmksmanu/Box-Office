import React from 'react'
import { Star } from '../styled';
import { MainDataWrapper,Headline,TagList } from './ShowMainData.styled';
const ShowMainData = ({ name, rating, summary, tags, image }) => {
    return (
    <MainDataWrapper>
        <img src={image ? image.original :"https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg"} alt="show-cover" />
        <div className='text-side'>
           <Headline>
            <h1>{name}</h1>
            <div>
              <Star active />
              <span>{rating.average || 'N/A'}</span>
            </div>
            </Headline>
          <div className='summary' dangerouslySetInnerHTML={{ __html: summary }} />
  
          <div>
            Tags:{' '}
            <TagList>
              {tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
          </TagList>
          </div>
        </div>
        </MainDataWrapper>
    );
  };
  export default ShowMainData;
