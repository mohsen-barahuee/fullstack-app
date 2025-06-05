import React from "react";
import About from "../../modules/about/About";
import OurProjects from "../../modules/our-projects/OurProjects";
import OureService from "../../modules/our-service/OureService";
import CurrentNews from "../../modules/current-news/CurrentNews";
import ClientMessages from "../../modules/client-messages/ClientMessages";
import Header from "../../modules/header/Header";




export default function Home() {


    
  
  return (
    <>
      <Header />
      <About />
      <OurProjects />
      <OureService />
      <CurrentNews />
      <ClientMessages />
    </>
  );
}
