import React from "react";
import PaginationBasic from "./PaginationBasic";
import Cards from "./Cards";
import Container from "react-bootstrap/Container";

const News = () => {
  return (
    <>
      <Container>
        <h1>News</h1>
        <PaginationBasic />
        <Cards />
        <PaginationBasic />
      </Container>
    </>
  );
};

export default News;
