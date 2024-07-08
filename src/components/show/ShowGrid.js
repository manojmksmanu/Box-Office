import React from "react";
import { useShows } from "../../misc/Custom-hooks";
import { FlexGrid } from "../styled";
import ShowCard from "./ShowCard";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


const ShowGrid = ({ data }) => {
  const [starredShows, dispatchStarred] = useShows();

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        const onStarClick = async () => {
          const token = localStorage.getItem("token");

          if (!token) {
            alert("You didn't signed in, please sign in ");
            return;
          }

          let userId;
          try {
            const decodedToken = jwtDecode(token);
            userId = decodedToken.userId; // Adjust this based on your token structure
          } catch (error) {
            console.error("Invalid token", error);
            alert("Invalid token. Please login again.");
            return;
          }

          if (isStarred) {
            // Removing the item
            dispatchStarred({ type: 'REMOVE', showId: show.id });
            console.log(show.id);

            axios.delete("http://localhost:3000/api/v1/movie/show/delete", {
              params: { // Changed to use params
                favouriteId: show.id,
                showName: show.name
              },
              headers: {
                Authorization: "Bearer " + token
              }
            }).then(() => {
              alert("Removed from favourites");
            }).catch(error => {
              console.error("There was an error making the request!", error);
              if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
              }
              alert("Failed to remove. Please try again.");
            });

          } else {
            // Adding the item
            dispatchStarred({ type: 'ADD', showId: show.id });
            console.log(show.id);
            console.log(show.name);

            axios.post("http://localhost:3000/api/v1/movie/show", {
              userId: userId,
              favouriteId: show.id,
              showName: show.name
            }, {
              headers: {
                Authorization: "Bearer " + token
              }
            }).then(() => {
              alert("Saved to the favourite");
            }).catch(error => {
              console.error("There was an error making the request!", error);
              if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
              }
              alert("Failed to save. Please try again.");
            });
          }
        };



        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : "https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg"}
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
