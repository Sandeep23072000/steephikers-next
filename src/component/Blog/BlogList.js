import React from 'react'
import styles from '../../styles/Blog/BlogList.module.css'
const BlogList = () => {
  return (
    <>

      <section className='' style={{ paddingTop: '70px' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div>
                <div className={styles.standard_img}>
                  <img src='../Assets/Blog_list_img1.jpg' />
                </div>
                <div className={styles.blog_list_section1}>
                  <div className={styles.standard_about_section}>
                    <a>India</a>
                    <h3>7 Perfect Day Trips </h3>
                    <span>World</span>
                  </div>

                  <div className={styles.standard_footer_section}>
                    <div className={styles.standard_footer_paragraph}>
                      <p>
                        Version of<span style={{color:'orangered'}}> Lorem Ipsum.</span>Proin gravida nibh vel velit auctor aliquet. 
                        Aenean sollicituuis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. 
                      <span style={{textDecoration:"underline"}}> Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</span> 
                       Proin gravida nibh vel velit auctor aliquet. Aenean sollicituuis bibendum auctor, nisi elit consequat ipsum.Pertinacia 
                      forensibus at sit, qui latine pertinax
                      </p>
                    </div>

                    <div className={styles.standard_footer_button}>
                      <span>Keep Reading...</span>
                    </div>

                    <div className={styles.standard_footer_about_medialink}>
                      <div className='text-center mt-4 mb-5'>
                        <img className="pe-2" width={35} src="../Assets/fb_img.svg" alt="Carouselimg1" />
                        <img className="pe-2" width={35} src="../Assets/twitter_img.svg" alt="Carouselimg1" />
                        <img className="pe-2" width={35} src="../Assets/pinterest_img.svg" alt="Carouselimg1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-5'>
                <div className='row'>
                  <div className='col-12 col-sm-12 col-md-4'>
                    <div className={styles.blog_list_section2}>
                      <div className={styles.blog_list_img_section}>
                      <img src='../Assets/Blog_list_img2.jpg' />
                      </div>
                      <div className={styles.blog_list_img_about_section}>
                        <div className={styles.blog_list_img_about}>
                          <a>Italy</a>
                          <h4>46 Amazing Travel Pictures </h4>
                          <span>Vacation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-sm-12 col-md-4'>
                    <div className={styles.blog_list_section2}>
                      <div className={styles.blog_list_img_section}>
                      <img src='../Assets/Blog_list_img3.jpg' />
                      </div>
                      <div className={styles.blog_list_img_about_section}>
                        <div className={styles.blog_list_img_about}>
                          <a>Canada</a>
                          <h4>7 Great Books You Must Read </h4>
                          <span>Vacation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-sm-12 col-md-4'>
                    <div className={styles.blog_list_section2}>
                      <div className={styles.blog_list_img_section}>
                      <img src='../Assets/Blog_list_img4.jpg' />
                      </div>
                      <div className={styles.blog_list_img_about_section}>
                        <div className={styles.blog_list_img_about}>
                          <a>Serbia</a>
                          <h4>People, Nature, & Everyday Life </h4>
                          <span>Vacation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-sm-12 col-md-4'>
                    <div className={styles.blog_list_section2}>
                      <div className={styles.blog_list_img_section}>
                      <img src='../Assets/Blog_list_img5.jpg' />
                      </div>
                      <div className={styles.blog_list_img_about_section}>
                        <div className={styles.blog_list_img_about}>
                          <a>United Kingdom</a>
                          <h4>What to Eat For Breakfast </h4>
                          <span>Vacation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-sm-12 col-md-4'>
                    <div className={styles.blog_list_section2}>
                      <div className={styles.blog_list_img_section}>
                      <img src='../Assets/Blog_list_img6.jpg' />
                      </div>
                      <div className={styles.blog_list_img_about_section}>
                        <div className={styles.blog_list_img_about}>
                          <a>Canada</a>
                          <h4>The Best Cities in Europe </h4>
                          <span>Vacation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-sm-12 col-md-4'>
                    <div className={styles.blog_list_section2}>
                      <div className={styles.blog_list_img_section}>
                      <img src='../Assets/Blog_list_img7.jpg' />
                      </div>
                      <div className={styles.blog_list_img_about_section}>
                        <div className={styles.blog_list_img_about}>
                          <a>Canada</a>
                          <h4>The Most Beautiful River Cities </h4>
                          <span>Vacation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-sm-12 col-md-4'>
                    <div className={styles.blog_list_section2}>
                      <div className={styles.blog_list_img_section}>
                      <img src='../Assets/Blog_list_img8.jpg' />
                      </div>
                      <div className={styles.blog_list_img_about_section}>
                        <div className={styles.blog_list_img_about}>
                          <a>Canada</a>
                          <h4>Best Nightclubs in San Francisco </h4>
                          <span>Vacation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-sm-12 col-md-4'>
                    <div className={styles.blog_list_section2}>
                      <div className={styles.blog_list_img_section}>
                      <img src='../Assets/Blog_list_img9.jpg' />
                      </div>
                      <div className={styles.blog_list_img_about_section}>
                        <div className={styles.blog_list_img_about}>
                          <a>Canada</a>
                          <h4>The Top Monterrey Climbing Tours </h4>
                          <span>Vacation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-sm-12 col-md-4'>
                    <div className={styles.blog_list_section2}>
                      <div className={styles.blog_list_img_section}>
                      <img src='../Assets/Blog_list_img10.jpg' />
                      </div>
                      <div className={styles.blog_list_img_about_section}>
                        <div className={styles.blog_list_img_about}>
                          <a>Canada</a>
                          <h4>10 Places to Travel With Your Dog </h4>
                          <span>Vacation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className='col-lg-3'>
              <div>
                <div className={styles.standard_about_section2}>
                  <ul className={styles.standard_about_section2_bloglist}>
                      <li>
                        <div className={styles.standard_about_section2_bloglist_about}>
                          <div className={styles.standard_about_section2_bloglist_about2}>
                          <h5>46 Amazing Travel Pictures </h5>
                          <span>Vacation</span>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className={styles.standard_about_section2_bloglist_about}>
                          <div className={styles.standard_about_section2_bloglist_about2}>
                          <h5>7 Great Books You Must Read </h5>
                          <span>Vacation</span>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className={styles.standard_about_section2_bloglist_about}>
                          <div className={styles.standard_about_section2_bloglist_about2}>
                          <h5>People, Nature, & Everyday Life </h5>
                          <span>Vacation</span>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className={styles.standard_about_section2_bloglist_about}>
                          <div className={styles.standard_about_section2_bloglist_about2}>
                          <h5>What to Eat For Breakfast </h5>
                          <span>Vacation</span>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className={styles.standard_about_section2_bloglist_about}>
                          <div className={styles.standard_about_section2_bloglist_about2}>
                          <h5>The Best Cities in Europe </h5>
                          <span>Vacation</span>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className={styles.standard_about_section2_bloglist_about}>
                          <div className={styles.standard_about_section2_bloglist_about2}>
                          <h5>The Most Beautiful River Cities </h5>
                          <span>Vacation</span>
                          </div>
                        </div>
                      </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default BlogList
