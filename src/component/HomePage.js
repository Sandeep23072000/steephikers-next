import React from 'react'
import MainHeadCarousel from './MainHeadCarousel'
import TravelEssentials from './TravelEssentials'
import TopCategoriesCarousel from './TopCategoriesCarousel'
import OurSponsors from './OurSponsors'
import BackPackTraveler from './BackPackTraveler'
import TravelTip from './TravelTip'
import Navbar from './Navbar'
import FooterSection from './FooterSection'
import ArroundWorld from './ArroundWorld'
import MainHeadSection from './MainHeadSection'
import TopCategories from './TopCategories'



const HomePage = () => {
  return (
    <>
      <Navbar />
      <MainHeadSection />
      <MainHeadCarousel />
      <TravelEssentials />
      <BackPackTraveler />
      <ArroundWorld />
      <TravelTip />
      <TopCategories/>
      <TopCategoriesCarousel />
      <OurSponsors />
      <FooterSection />
     
    </>
  )
}

export default HomePage
