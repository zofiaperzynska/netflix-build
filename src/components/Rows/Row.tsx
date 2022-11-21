import axios from "../axios";
import React, { useState, useEffect } from "react";
import { StyledRow, StyledRowPosters, StyledImage } from "./Row.styled";
import { TMDBResponse, Movie } from "../Banner/Banner";

interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const Row = (props: RowProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<TMDBResponse>(props.fetchUrl);
      setMovies(response.data.results);
      return response;
    };
    fetchData();
  }, [props.fetchUrl]);

  //   console.log(movies);

  return (
    <StyledRow>
      <h2>{props.title}</h2>
      <StyledRowPosters>
        {movies.map(
          (movie) =>
            ((props.isLargeRow && movie.backdrop_path) ||
              (!props.isLargeRow && movie.backdrop_path)) && (
              <StyledImage
                isLarge={!!props.isLargeRow}
                key={movie.id}
                src={`${base_url}${
                  props.isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </StyledRowPosters>
    </StyledRow>
  );
};

export default Row;
