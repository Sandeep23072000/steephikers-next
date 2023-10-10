import React from 'react'
import styles from '../../styles/Blog/BlogPostSinglesStandard.module.css'
const BlogPostSinglesImgComments = () => {
  return (
    <>
      <div className={`${styles.blog_footer} 'mt-5'`}>
                <div className='row'>
                    <div className='col-lg-2'>
                        <div className={styles.blog_footer_post_img}>
                            <img src='../Assets/Blog_post_img6.png' />
                        </div>
                    </div>

                    <div className='col-lg-10'>
                        <div className={styles.blog_footer_post_about}>
                            <h2>Melissa Johanson </h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ?</p>
                            <ul className={styles.blog_footer_medialink}>
                                <li>
                                    <a><i class="bi bi-facebook"></i></a>
                                </li>
                                <li>
                                    <a><i class="bi bi-twitter"></i></a>
                                </li>
                                <li>
                                    <a><i class="bi bi-linkedin"></i></a>
                                </li>
                                <li>
                                    <a><i class="bi bi-instagram"></i></a>
                                </li>
                                <li>
                                    <a><i class="bi bi-pinterest"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default BlogPostSinglesImgComments
