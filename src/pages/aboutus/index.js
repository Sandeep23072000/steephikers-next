import React from 'react'
import styles from '../../styles/AboutUs.module.css'
import Navbar from '../../component/Navbar'
import AboutUs from '../../component/AboutUs/AboutUs'
import FooterSection from '@/component/FooterSection'

const About_Us = () => {
  return (
    <>
     <Navbar />
     <AboutUs />
     <FooterSection />
      
    </>
  )
}

export default About_Us
