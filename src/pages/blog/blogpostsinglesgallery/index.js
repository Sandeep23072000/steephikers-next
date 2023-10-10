import BlogPostSinglesGallery from '@/component/Blog/BlogPostSinglesGallery'
import BottomFooterSection from '@/component/BottomFooterSection'
import Navbar from '@/component/Navbar'
import React from 'react'

const blogpostsinglesgallery = () => {
  return (
    <>
      <Navbar/>
      <BlogPostSinglesGallery/>
      <BottomFooterSection/>
    </>
  )
}

export default blogpostsinglesgallery
