import React from 'react'
import styles from '../../styles/Blog/BlogPostSinglesCustom.module.css'
import BlogPostSinglesComments from './BlogPostSinglesComments'
import BlogPostSinglesPostComment from './BlogPostSinglesPostComment'
import BlogPostSinglesBestStoryCarousel from './BlogPostSinglesBestStoryCarousel'

import BlogPostSinglesImgComments from './BlogPostSinglesImgComments'
const BlogPostSinglesCustom = () => {
    return (
        <>
            <section>
                <div className='container-fluid'>
                    <div className={styles.blog_custom}>
                        <div className={styles.blog_custom_img}>
                            <img src='../Assets/Blog_customimg1.jpg' />
                        </div>

                        <div className={styles.blog_custom_img_about}>
                            <h6>Italy</h6>
                            <h2>46 Amazing Travel Pictures </h2>
                            <h1>Vacation</h1>

                        </div>
                        <div className={`${styles.blog_custom_img_main_about} container`}>
                            <div className={styles.blog_custom_img_about2}>
                                <p>
                                    <span className={styles.span1}>L</span>orem ipsum dolor sit amet, adhuc iriure dissentias est in, est ne diam graece tincidunt.
                                    Sit et liber minimum tacimates, sea no doctus fastidii.<u>An molestiae definiebas mel. Quo everti vituperata et, quo cu omnis maiorum.
                                        At soluta fierent</u> laboramus eum.Nam at dicant deterruisset. Nam at nulla choro denique, et cum quando definitionem. Sea te nisl splendide,
                                    odio timeam an vim. Quas brute aliquam id per, et natum vocent eripuit sea. No mea feugiat nusquam ocurreret. Usu ad nominavi scripserit comprehensam,
                                    principes dissentiet est id. Primis eripuit ei vis, ne vis nibh delenit electram duo.
                                    <span>Ad aliquip dolorem scribentur, partem libris pri, </span>ad sea
                                    verear postulant conceptam. Sed appellantur interpretaris cu, meis possit melius ut sed. Ex suas definiebas
                                    est, id his dicunt torquatos. Id euismod mentitum dissentiet duo, aeterno eripuit. Comprehensam, principes
                                    dissentiet est id. Primis eripuit ei vis, ne vis nibh delenit electram duo. At pri elitr utinam tempor, purto
                                    facilis vim ut.
                                </p>
                                <p>
                                    Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta scriptorem dissentiet, cu vel sensibus cotidieque. Ne per malorum vivendum principes,
                                    congue imperdiet cu vel. Sit cu stet autem eligendi, eros reprimique mel id, no pri tation altera. At soluta fierent laboramus eum.Nam at dicant deterruisset. Nam at
                                    nulla choro denique, et cum quando. Eu scaevola vituperatoribus voluptaria.
                                </p>
                                <div className={styles.blog_custom_middle_about}>
                                    <div className={styles.blog_custom_middle_about_inner}>
                                        <a>
                                            With all that fear, it’s much easier to stay at home in our comfort
                                            <br />
                                            zones than to break out and travel.
                                        </a>
                                    </div>
                                </div>
                                <p>
                                    Mediocrem reprimique an vim, veniam tibique omittantur duo ut, agam graeci in vim. Quot appetere patrioque te mea, animal aliquip te pri. Ad vis animal ceteros percipitur,
                                    eos tollit civibus percipitur no. Posse definiebas dissentiunt mel ea, nam ferri utroque invenire an. Ius te iuvaret offendit pertinax, his verear deseruisse ex. Illud elitr
                                    eam eu. Id usu putant commune, stet primis expetenda cu vel. Mea ipsum homero apeirian te. Accumsan similique instructior ad pro, te purto dicit qui. Qui ex putent suavitate
                                    adolescens, his possim tamquam fuisset et. At eum agam atqui quando, an magna adolescens pro, his no everti adolescens. Cibo simul no vel, te civibus recteque cum, tale assum
                                    iudico cu cum. Equidem impedit officiis quo te. Illud partem sententiae mel eu, euripidis urbanitas et sit.
                                </p>

                                <div className={styles.blog_custom_middle_about_bottom}>
                                    <p>
                                        Learn more in related article:<a className='' style={{ color: "black", textDecoration: "none" }}>Staying with a local family on Bali</a>
                                    </p>
                                </div>



                                <div className='mt-5'>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                            <div className={styles.blog_custom_post_img}>
                                                <img src='../Assets/Blog_customimg2.jpg' />
                                                <h2>“The Professional Hobo”</h2>
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                            <div className={styles.blog_custom_post_img}>
                                                <img src='../Assets/Blog_customimg3.jpg' />
                                                <h2>“Never Ending Footsteps”</h2>
                                            </div>
                                        </div>

                                        <div className={styles.blog_custom_post_about}>
                                            <p>
                                                Quot appetere patrioque te mea, animal aliquip te pri. Ad vis animal ceteros percipitur, eos tollit civibus percipitur no.
                                                Posse definiebas dissentiunt mel ea, nam ferri utroque invenire an. Ius te iuvaret offendit pertinax, his verear deseruisse
                                                ex. Illud elitr eam eu. Id usu putant commune, stet primis expetenda cu vel. Mea ipsum homero apeirian te. Accumsan similique
                                                instructior ad pro, te purto dicit qui. Mediocrem reprimique an vim, veniam tibique omittantur duo ut, agam graeci in vim. An
                                                sententiae disputando eos. Delicata voluptaria referrentur mel eu. Forensibus disputationi an eam. Sea ex delectus dignissim
                                                gloriatur, quem suas per ea. In solum menandri cum.
                                            </p>
                                        </div>

                                        <div className={styles.blog_custom_post_button}>
                                            <a><i class="bi bi-bookmark"></i></a>
                                            <h2 className='' style={{ paddingRight: "5px", paddingLeft: "3px" }}>explore</h2>
                                            <h2 className='' style={{ paddingRight: "5px" }}>travel</h2>
                                            <h2 className='' style={{ paddingRight: "5px" }}>vacation</h2>

                                            <div className={styles.blog_post_like}>
                                                <a><i class="bi bi-heart"></i></a>
                                                <a>20</a>
                                            </div>

                                            <div className={styles.blog_post_msg}>
                                                <a><i class="bi bi-chat"></i></a>
                                                <a>3</a>
                                            </div>
                                        </div>

                                        <div className={styles.standard_footer_about}>
                                            <div className='row'>
                                                <div className='col-12  col-sm-12 col-md-4'>
                                                    <div className={styles.standard_footer_about1}>
                                                        <p>Melissa Johanson </p>
                                                    </div>
                                                </div>
                                                <div className='col-12  col-sm-12 col-md-4'>
                                                    <div className="text-center">
                                                        <div className=''>
                                                            <img className="pe-2" width={35} src="../Assets/fb_img.svg" alt="Carouselimg1" />
                                                            <img className="pe-2" width={35} src="../Assets/twitter_img.svg" alt="Carouselimg1" />
                                                            <img className="pe-2" width={35} src="../Assets/pinterest_img.svg" alt="Carouselimg1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-12  col-sm-12 col-md-4'>
                                                    <div className={styles.standard_footer_about_date}>
                                                        <span>October 1, 2018 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.blog_post_navigation}>
                                            <div className={styles.blog_post_navigation_inner}>

                                            </div>

                                            <div className={styles.blog_post_navigation_inner2}>

                                                <h5>next post</h5>
                                                <div className={styles.blog_post_navigation_img}>
                                                    <a>
                                                        <img src='../Assets/Blog_post_img5.jpg' />

                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <BlogPostSinglesImgComments />
                                <BlogPostSinglesComments />
                                <BlogPostSinglesPostComment />
                            </div>
                        </div>
                    </div>
                </div>
                <BlogPostSinglesBestStoryCarousel />
            </section>
        </>
    )
}

export default BlogPostSinglesCustom
