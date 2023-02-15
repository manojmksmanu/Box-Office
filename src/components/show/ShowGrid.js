import React from "react";
import { useShows } from "../../misc/Custom-hooks";
import { FlexGrid } from "../styled";
import ShowCard from "./ShowCard";

const ShowGrid = ({ data }) => {
  const [starredShows, dispatchStarred] = useShows();
  



  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        const onStarClick = () => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', showId: show.id });
          } else {
            dispatchStarred({ type: 'ADD', showId: show.id });
          }
        };

        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium :"https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg" }
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
