import React from 'react';

import TopVetReviews from "../TopVetReviews.js";
import HeroSection from "../HeroSection.js";
import Footer from "../Footer.js"

function Home() {
  return (
    <>
      <HeroSection />
      <TopVetReviews/>      
      <Footer />
    </>
  );
}

export default Home;