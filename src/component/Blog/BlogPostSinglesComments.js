import React from 'react'
import styles from '../../styles/Blog/BlogPostSinglesStandard.module.css'
const BlogPostSinglesComments = () => {
    return (
        <>

            
            <div className={styles.post_blog_single_heading}>
                <div className={styles.post_blog_single_heading_inner}>
                    <h3>Comments:</h3>
                </div>

                <div>
                    <div className={styles.post_blog_single_about}>
                        <div className='row'>
                            <div className='col-12 col-sm-12 col-md-2'>
                                <div className={styles.post_blog_single_img}>
                                    <img className='img-fluid ' width='96px' src='../Assets/Blog_post_img7.jpg' />
                                </div>
                            </div>
                            <div className='col-12 col-sm-12 col-md-10 mt-sm-2 mt-md-0 '>
                                <div className={styles.post_blog_single_about_inner}>
                                    <h4>Jimmy Roy </h4>
                                    <h5>September 12, 2018</h5>
                                </div>
                                <div className={styles.post_blog_single_about_parag}>
                                    <p>Lorem ipsum dolor sit amet, usu ut perfecto postulant deterruisset, libris causae volutpat at
                                        est, ius id modus laoreet urbanitas. Mel ei delenit dolores sapientem.</p>
                                </div>
                                <div className={styles.post_blog_single_about_reply}>
                                    <h5>reply...</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-5'>

                    <div className='row'>
                        <div className='col-2 text-end'>
                            <div className={styles.post_blog_arrow}>
                                <a><i class="bi bi-arrow-return-right"></i></a>
                            </div>
                        </div>
                        <div className='col-10 mt-4'>
                            <div className={styles.post_blog_single_about}>
                                <div className='row'>
                                    <div className='col-12 col-sm-12 col-md-2'>
                                        <div className={styles.post_blog_single_img}>
                                            <img className='img-fluid ' width='96px' src='../Assets/Blog_post_img8.jpg' />
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12 col-md-10 mt-sm-2 mt-md-0 '>
                                        <div className={styles.post_blog_single_about_inner}>
                                            <h4>Loretta Shelton  </h4>
                                            <h5>September 12, 2018</h5>
                                        </div>
                                        <div className={styles.post_blog_single_about_parag}>
                                            <p>Te natum nihil propriae pro. Et mei modus sanctus mnesarchum.
                                                Affert nominavi atomorum mea ut, has agam iisque impedit ut, omittam.</p>
                                        </div>
                                        <div className={styles.post_blog_single_about_reply}>
                                            <h5>reply...</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div>
                    <div className={styles.post_blog_single_about}>
                        <div className='row'>
                            <div className='col-12 col-sm-12 col-md-2'>
                                <div className={styles.post_blog_single_img}>
                                    <img className='img-fluid ' width='96px' src='../Assets/Blog_post_img9.jpg' />
                                </div>
                            </div>
                            <div className='col-12 col-sm-12 col-md-10 mt-sm-2 mt-md-0 '>
                                <div className={styles.post_blog_single_about_inner}>
                                    <h4>Myra Hunt </h4>
                                    <h5>September 12, 2018</h5>
                                </div>
                                <div className={styles.post_blog_single_about_parag}>
                                    <p>Id causae vocibus nam, sit doming senserit pericula ut. Eum sanctus labores te.</p>
                                </div>
                                <div className={styles.post_blog_single_about_reply}>
                                    <h5>reply...</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BlogPostSinglesComments
