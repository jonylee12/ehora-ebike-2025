import React from 'react';
import Carousel from "../components/Carousel";
import FeaturedProducts from "../components/FeaturedProducts";
import { featuredProducts } from '../data/products';
import VideoHighlight from '../components/VideoHighlight';
import Testimonials from '../components/Testimonials';




const Home = () => {
  return (
    <main>
      <Carousel />
      <FeaturedProducts products={featuredProducts} />
      <section className="featured-section"></section>
      <VideoHighlight />
      <Testimonials />
    </main>
  );
};

export default Home;
