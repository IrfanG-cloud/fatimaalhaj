import React from "react";
import Hero from "./components/Hero";
import Checkproduct from "./components/Checkproduct";
import Promotions from "./components/Promotions";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <Promotions />
      <Checkproduct />
      <Newsletter />
    </div>
  )
}
