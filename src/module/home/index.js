import React from 'react'
import "./home.scss"


import Herobanner from './homepagecomponents/herobanner';
import SecondSection from './homepagecomponents/secondsection';
import ScrollToTop from '../../components/Scrolltotop';



export default function Home() {
  return (
    <div style={{ margin: "100px 0 0 0" }}>
      <ScrollToTop />

      {/* Homepage Component */}
      <Herobanner />
      <SecondSection />
    </div>
  )
}
