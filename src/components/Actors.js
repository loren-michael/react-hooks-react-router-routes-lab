import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => {
        return(
          <div key={actor.name}>
            {actor.name}
            <ul>
              {actor.movies.map((mov) => {
                return <li key={mov}>{mov}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Actors;
