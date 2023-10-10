import React from 'react'
import styles from '../../styles/Blog/BlogCustom.module.css'
const BlogCustom  = () => {
  return (
    <>
      
      <section className='mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12 mt-5'>
                    <div className={styles.blog_custom_img}>
                        <img src='../Assets/blog_custom1.jpg' />
                            <div className={styles.blog_custom_date}>
                                <a>September 5, 2018 </a>
                            </div>
                    </div>

                    <div className={styles.blog_img_about}>
                        <h4>A Weekend Guide to Austria </h4>
                        <span>Tourist Tours</span>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12 col-12 mt-5'>
                    <div className={styles.blog_custom_img}>
                        <img src='../Assets/blog_custom2.jpg' />
                        <div className={styles.blog_custom_date}>
                                <a>September 5, 2018 </a>
                            </div>
                    </div>

                    <div className={styles.blog_img_about}>
                        <h4>The Top Climbing Tours  </h4>
                        <span>Tourist Tours</span>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12 col-12 mt-5'>
                    <div className={styles.blog_custom_img}>
                        <img src='../Assets/blog_custom3.jpg'/>
                        <div className={styles.blog_custom_date}>
                                <a>September 5, 2018 </a>
                            </div>
                    </div>

                    <div className={styles.blog_img_about}>
                        <h4>The Complete Travel Guide 😍 </h4>
                        <span>Tourist Tours</span>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12 col-12 mt-5'>
                    <div className={styles.blog_custom_img}>
                        <img src='../Assets/blog_custom4.jpg'/>
                        <div className={styles.blog_custom_date}>
                                <a>September 5, 2018 </a>
                            </div>
                    </div>

                    <div className={styles.blog_img_about}>
                        <h4>A Guide To Best Markets </h4>
                        <span>Tourist Tours</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </>
  )
}

export default BlogCustom 
