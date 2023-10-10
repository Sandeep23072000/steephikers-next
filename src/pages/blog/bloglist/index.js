import BlogList from '@/component/Blog/BlogList'
import FooterSection from '@/component/FooterSection'
import MainHeadSection from '@/component/MainHeadSection'
import Navbar from '@/component/Navbar'
import React from 'react'

const blogList = () => {
  return (
    <>

    <Navbar />
    <MainHeadSection/>
    <BlogList />
    <FooterSection />
    </>
  )
}

export default blogList
