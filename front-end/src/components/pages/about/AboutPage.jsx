import React, { useState } from "react";
import About from "../../modules/about/About";
import ClientMessages from "../../modules/client-messages/ClientMessages";
import OurTeam from "../../modules/our-team/OurTeam";
import Banner from "../../modules/banner/banner";
import Loading from "../../modules/loading/Loading";

export default function AboutPage() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {

    setLoading(false)
  }, 1000);


   if (loading) {
      return <Loading />
    }
  


  return (
    <div>
      <Banner />
      <About />
      <OurTeam />
      <ClientMessages />
    </div>
  );
}
