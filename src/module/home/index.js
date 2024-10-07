import React from "react";
import "./home.scss";

import ScrollToTop from "../../components/Scrolltotop";

import Herobanner from "./homepagecomponents/herobanner";
import Carchangersection from "./homepagecomponents/CarchangerSection";
import Minihighlightsection from "./homepagecomponents/Minihighlightssections";
import BigLoveSection from "./homepagecomponents/BigLoveSection";

export default function Home() {
  return (
    <div style={{ margin: "100px 0 0 0" }}>
      <ScrollToTop />

      {/* <------------------------ Homepage Component ------------------------> */}
      <Herobanner />
      <Carchangersection />
      <Minihighlightsection />
      <BigLoveSection />
    </div>
  );
}
