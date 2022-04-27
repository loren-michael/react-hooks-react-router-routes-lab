import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((mov) => {
        return (
          <div key={mov.title}>
            <h4>{mov.title}</h4>
            <p>{mov.time} minutes</p>
            <ul>
              {mov.genres.map((genre, index) => {
                return <li key={index}>{genre}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Movies;
