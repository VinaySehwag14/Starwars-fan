import React from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <React.Fragment>
      <section>
        <button
        // onClick={fetchMoviesHandler}
        >
          Fetch Movies
        </button>
      </section>
      <section>
        <MoviesList
        //  movies={movies}
        />
      </section>
    </React.Fragment>
  );
}

export default App;
