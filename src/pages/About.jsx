import React from "react";
import "./About.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';


const team = [
  {
    name: "Joris Wan der Walk",
    role: "CEO",
    image: "/images/team/joris.jpg"
  },
  {
    name: "Michely Huser",
    role: "Marketing Lead",
    image: "/images/team/michely.jpg"
  },
  {
    name: "Cristian Bscher",
    role: "Lead Engineer",
    image: "/images/team/cristian.jpg"
  }
];

const About = () => {
  return (
   <div className="about-wrapper about-page-bg">
        <Swiper
  modules={[Autoplay]}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  loop={true}
  slidesPerView={1}
  spaceBetween={10}
  className="eunolution-carousel"
>
  <SwiperSlide><img src="/images/eunolution/e1.jpg" alt="Slide 1" /></SwiperSlide>
  <SwiperSlide><img src="/images/eunolution/e2.jpg" alt="Slide 2" /></SwiperSlide>
  <SwiperSlide><img src="/images/eunolution/e3.jpg" alt="Slide 3" /></SwiperSlide>
  <SwiperSlide><img src="/images/eunolution/e4.jpg" alt="Slide 4" /></SwiperSlide>
  <SwiperSlide><img src="/images/eunolution/e5.jpg" alt="Slide 5" /></SwiperSlide>
</Swiper>
      <div className="hero-section">
        <h1 className="hero-title">ABOUT EAHORA</h1>
        <p className="hero-subtitle">
          We believe to create a great ebike starts from frame engineering design.
        </p>
        <p className="hero-quote">"I wish Eahora would stick to superior engineering design"</p>
      </div>

      <section className="story-section">
        <div className="story-image">
          <img src="/images/about/story.jpg" alt="Founding story" />
        </div>
        <div className="story-text">
          <h3>FOUNDING STORY</h3>
          <h2>We believe that building a great eBike starts with superior frame engineering and design.</h2>
          <p>
            Since 2011, we've been fully immersed in the bicycle industry — from sales and marketing to research and development. 
      Back then, young and passionate, we rode to work daily, memorizing every corner of our commute. That journey sparked a lifelong passion. 
      Eight years later, driven by a dream to reshape the electric bicycle industry, Eahora was born.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <h3>OUR MISSION</h3>
        <h2>CREATE DREAM EBIKES</h2>
        <h4>Create dream eBikes that are more affordable, diverse, and functional</h4>
        <p>
          Designing an ebike can be a complex process that involves a variety of considerations, including the materials
          and construction techniques used, the intended use of the bike, and the desired aesthetic and functional
          characteristics of the finished product. It's the most challenging process, but with careful planning and attention
          to detail, a frame that meets our standards and performs well.
          Designing an eBike is a complex process involving materials, construction, and the intended use — all while achieving 
      the right aesthetic and performance. It’s a challenge we embrace with precision and purpose to deliver the highest quality
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member, idx) => (
            <div key={idx} className="team-card">
              <img src={member.image} alt={member.name} className="team-photo" />
              <h4 className="team-name">{member.name}</h4>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
