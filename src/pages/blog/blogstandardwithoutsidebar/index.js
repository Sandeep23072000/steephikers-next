import React from 'react'
import BlogStandardWithoutSidebar from '@/component/Blog/BlogStandardWithoutSidebar'
import Navbar from '@/component/Navbar'
import FooterSection from '@/component/FooterSection'
const blogsidebarwithoutsidebar = () => {
  return (
    <>
    <Navbar/>
    <BlogStandardWithoutSidebar/>
    <FooterSection/>
    </>
  )
}

export default blogsidebarwithoutsidebar
