import React, { useEffect, useReducer } from "react";

import { useParams } from "react-router-dom";
import Cast from "../components/show/Cast";
import Details from "../components/show/Details";
import Seasons from "../components/show/Seasons";
import ShowMainData from "../components/show/ShowMainData";
import apiGet from "../misc/Fechconfig";
import { InfoBlock, ShowPageWrapper } from "./Show.styled";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH-SUCCESS": {
      return { isLoading: false, error: null, show: action.show };
    }
    case "FETCH-FAILED": {
      return { ...prevState, isLoading: false, error: action.error };
    }

    default:
      return prevState;
  }
};
const initialState = {
  show: null,
  isLoading: true,
  error: null,
};
const Show = () => {
  const { id } = useParams();
  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  //   const [show, setShow] = useState(null);
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [error, serError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        setTimeout(() => {
          if (isMounted) {
            dispatch({ type: "FETCH-SUCCESS", show: results });

            // setShow(results);
            // setIsLoading(false);
          }
        }, 500);
      })
      .catch((err) => {
        if (isMounted) {
          dispatch({ type: "FETCH-FAILED", error: err.message });
          //   serError(err.message);
          //   setIsLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);
  console.log("show", show);

  if (isLoading) {
    return <div> Data is being loaded</div>;
  }
  if (error) {
    return <div>Error occure:{error}</div>;
  }
  return <ShowPageWrapper>
<ShowMainData image={show.image} name={show.name} rating={show.rating} summary={show.summary}
tags={show.genres} />

  <InfoBlock>
    <h2>
     Details
    </h2>
    <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
</InfoBlock>
<InfoBlock>
    <h2>
  Seasons
    </h2>
    <Seasons seasons={show._embedded.seasons} />
    </InfoBlock>
<InfoBlock>
   
    <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
        </InfoBlock>

  </ShowPageWrapper>;
};

export default Show;
