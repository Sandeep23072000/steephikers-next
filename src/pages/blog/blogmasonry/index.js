import React from 'react'
import BlogMasonry from '@/component/Blog/BlogMasonry'
import Navbar from '@/component/Navbar'
import FooterSection from '@/component/FooterSection'

const blogmasonry = () => {
  return (
    <div>
      <Navbar/>
      <BlogMasonry/>
      <FooterSection/>
    </div>
  )
}

export default blogmasonry
