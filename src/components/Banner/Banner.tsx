import React, { useState, useEffect } from "react";
import {
  StyledBanner,
  StyledBannerContents,
  StyledBannerTitle,
  StyledButtonsDiv,
  StyledButton,
  BannerDescription,
  FadeBottom,
} from "./Banner.styled";
import axios from "../axios";
import requests from "../Requests";

export interface Movie {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface TMDBResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const Banner = () => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<TMDBResponse>(
        requests.fetchNetflixOriginals
      );
      console.log(response);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    };
    fetchData();
  }, []);

  console.log(movie);

  const truncate = (string: string, n: number) => {
    return string?.length > n ? string.slice(0, n - 1) + "..." : string;
  };

  return (
    <StyledBanner
      url={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
    >
      <StyledBannerContents>
        <StyledBannerTitle>
          {movie?.name || movie?.original_name}
        </StyledBannerTitle>
        <StyledButtonsDiv>
          <StyledButton>Play</StyledButton>
          <StyledButton>My List</StyledButton>
        </StyledButtonsDiv>
        <BannerDescription>
          {truncate(movie?.overview || "This is the description", 150)}
        </BannerDescription>
      </StyledBannerContents>
      <FadeBottom />
    </StyledBanner>
  );
};

export default Banner;
