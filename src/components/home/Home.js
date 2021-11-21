import React from "react";
import CarouselHero from "./CarouselHero";
import ContentTabs from "./ContentTabs";
import ContentAccordion from "./ContentAccordion";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <>
      <CarouselHero />
      <Container>
        <div className="main__text">
          <h1>We do YAY things</h1>
          <p>
            Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris
            eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur
            eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.
          </p>
        </div>

        <ContentAccordion />
        <ContentTabs />
      </Container>
    </>
  );
};

export default Home;
