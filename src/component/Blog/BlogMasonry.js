import React from 'react'
import styles from '../../styles/Blog/BlogMasonry.module.css'
const BlogMasonry = () => {
  return (
    <>
    <section className='mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-4'>
                    <div className={styles.blog_col_1}>
                        <img src='../Assets/Blog_Masonry1.jpg'></img>
                        <div className={styles.blog_about_section}>
                            <a>Nashik</a>
                            <h4>The History of the Eiffel Tower </h4>
                            <span>Tourism</span>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-4'>
                    <div className={styles.blog_col_2}>
                        <img src='../Assets/Blog_Masonry2.jpg'></img>
                        <div className={styles.blog_about_section_2}>
                            <a>Canada</a>
                            <h4>Beautiful Countryside 😍 </h4>
                            <span>Tourism</span>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit ipsum </p>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-4'>
                    <div className={styles.blog_col_1}>
                        <img src='../Assets/Blog_Masonry3.jpg'></img>
                        <div className={styles.blog_about_section}>
                            <a>Nashik</a>
                            <h4>Planning the Perfect 3-Day Trip to Madrid  </h4>
                            <span>Tourism</span>
                            <p>roin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit ipsum </p>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-4'>
                    <div className={styles.blog_col_2}>
                        <img src='../Assets/Blog_Masonry4.jpg'></img>
                        <div className={styles.blog_about_section_2}>
                            <a>Canada</a>
                            <h4>Meet Our Travel Specialists </h4>
                            <span>Tourism</span>
                            
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-4'>
                    <div className={styles.blog_col_1}>
                        <img src='../Assets/Blog_Masonry5.jpg'></img>
                        <div className={styles.blog_about_section}>
                            <a>Nashik</a>
                            <h4>Easter Weekend Adventure in Maribor 2018 </h4>
                            <span>Tourism</span>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-4'>
                    <div className={styles.blog_col_2}>
                        <img src='../Assets/Blog_Masonry6.jpg'></img>
                        <div className={styles.blog_about_section_2}>
                            <a>Canada</a>
                            <h4>Pets and International Travel </h4>
                            <span>Tourism</span>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
      
    </>
  )
}

export default BlogMasonry







          