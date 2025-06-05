import React from "react";
import ClientMessages from "../../modules/client-messages/ClientMessages";
import PriceCards from "../../modules/price-cards/PriceCards";
import Banner from "../../modules/banner/banner";

export default function Pricing() {
  return (
    <>
      <Banner />
      <div>
        <PriceCards />
        <ClientMessages />
      </div>
    </>
  );
}
