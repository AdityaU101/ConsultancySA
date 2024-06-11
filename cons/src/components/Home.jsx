import React from 'react'
import { useState, useEffect } from "react";
import { Navigation } from './navigation'
import { Header } from './header'
import { Features } from './features'
import { About } from './about'
import { Testimonials } from './testimonials'
import { Services } from './services'
import { Team } from './Team'
import JsonData from "../data/data.json";


const Home = () => {
    const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
    </div>
  )
}

export default Home