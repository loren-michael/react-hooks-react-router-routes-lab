import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((dir) => {
      return(
        <div key={dir.name}>
          {dir.name}
          <ul>
            {dir.movies.map((mov) => {
            return(
              <li key={mov}>{mov}</li>
            )
          })}
          </ul>
        </div>
      )
    })}
  </div>;
}

export default Directors;
