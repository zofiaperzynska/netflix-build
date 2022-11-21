import React from "react";
import { HomescreenStyled } from "./HomeScreen.styled";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Row from "../Rows/Row";
import requests from "../Requests";

const HomeScreen = () => {
  return (
    <HomescreenStyled>
      <NavBar />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </HomescreenStyled>
  );
};

export default HomeScreen;
