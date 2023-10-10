import React from 'react'
import styles from '../../styles/Blog/BlogPostSinglesGallery.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlogPostSinglesComments from './BlogPostSinglesComments';
import BlogPostSinglesPostComment from './BlogPostSinglesPostComment';
import BlogPostSinglesBestStoryCarousel from './BlogPostSinglesBestStoryCarousel';
import BlogStandardRightSidebarCol3 from './BlogStandardRightSidebarCol3';
import BlogPostSinglesImgComments from './BlogPostSinglesImgComments';
const BlogPostSinglesGallery = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1300 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1300, min: 900 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 900, min: 700 },
            items: 1
        },
        smallmobile: {
            breakpoint: { max: 700, min: 500 },
            items: 1
        },
        extrasmallmobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1
        }
    };
    return (
        <>

            <section className='mt-5 mb-2 '>
                <div className={styles.blog_gallery}>
                    <div className={styles.blog_gallery_logo}>
                        <img src='../Assets/Blog_post_logo.png' />
                    </div>
                </div>


                <section >
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-9 '>
                                <div className={styles.blog_list_section22}>
                                    <div>
                                        <section className='mt-'>


                                            <div className='container mt- mb-'>
                                                <Carousel responsive={responsive}
                                                    swipeable={true}
                                                    autoPlay={true}
                                                    transitionDuration={2000}
                                                    draggable={true}
                                                    infinite={true}
                                                    loop={true}
                                                    customTransition="transform 1s ease-in-out"
                                                >
                                                    <div>
                                                        <div className="card" style={{ width: '99%', margin: "0.5rem", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                                            <img className="card-img-top img-fluid border-0" src="../Assets/Blog_gallery1.jpg" alt="Card image cap" />

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card" style={{ width: '99%', margin: "0.5rem", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                                            <img className="card-img-top img-fluid border-0" src="../Assets/Blog_gallery2.jpg" alt="Card image cap" />

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card" style={{ width: '99%', margin: "0.5rem", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                                            <img className="card-img-top img-fluid border-0" src="../Assets/Blog_gallery3.jpg" alt="Card image cap" />

                                                        </div>
                                                    </div>


                                                </Carousel>
                                            </div>
                                        </section>
                                    </div>

                                    <div className={styles.blog_list_section2}>
                                        <div className={styles.blog_gallery_heading}>
                                            <a>Brazil</a>
                                            <h3>Reasons to Travel While You’re Young </h3>
                                            <span>Lifestyle</span>
                                        </div>

                                        <div className={styles.blog_gallery_paragraph}>
                                            <p>
                                                <span className={styles.span1}>L</span>orem ipsum dolor sit amet, adhuc iriure dissentias est in, est ne diam graece
                                                tincidunt. Sit et liber minimum tacimates, sea no doctus fastidii. An molestiae definiebas
                                                mel. Quo everti vituperata et, quo cu omnis maiorum. At soluta fierenti laboramus eum.Nam at
                                                dicant deterruisset. Nam at nulla choro denique, cum quando definitionem. Sea te nisl splendide,
                                                odio timeam an vim. Quas brute aliquam id per, et natum vocent eripuit sea. No mea feugiat nusquam
                                                ocurreret usu ad alter dicant.<span>Ad aliquip dolorem scribentur, partem libris pri, </span>ad sea
                                                verear postulant conceptam. Sed appellantur interpretaris cu, meis possit melius ut sed. Ex suas definiebas
                                                est, id his dicunt torquatos. Id euismod mentitum dissentiet duo, aeterno eripuit. Comprehensam, principes
                                                dissentiet est id. Primis eripuit ei vis, ne vis nibh delenit electram duo. At pri elitr utinam tempor, purto
                                                facilis vim ut.
                                            </p>

                                            <p>
                                                Mediocrem reprimique an vim, veniam tibique omittantur duo ut, agam graeci in vim. Quot appetere patrioque te mea, animal
                                                aliquip te pri. Ad vis animal ceteros percipitur, eos tollit civibus percipitur no. Posse definiebas dissentiunt mel ea, nam
                                                ferri utroque invenire an. Ius te iuvaret offendit pertinax, his verear deseruisse ex. Illud elitr eam eu. Id usu putant commune,
                                                stet primis expetenda cu vel. Mea ipsum homero apeirian te. Accumsan similique instructior ad pro, te purto dicit qui. Per eu unum
                                                persius, mei tantas postea in. Te his labores singulis, eum ei urbanitas adversarium. Ut quo numquam honestatis, qui populo percipit
                                                intellegat ea. Pri laudem tractatos hendrerit an.
                                            </p>

                                            <p>
                                                Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta scriptorem dissentiet, cu vel sensibus cotidieque.
                                                Ne per malorum vivendum principes, congue imperdiet cu vel. Sit cu stet autem eligendi, eros reprimique mel id, no pri tation
                                                altera. At soluta fierent laboramus eum.Nam at dicant deterruisset. Nam at nulla choro denique, et cum quando. Et est eius pertinax,
                                                duo falli noster alienum et.
                                            </p>

                                            <div className={styles.blog_gallery_paragraph4}>
                                                <div className={styles.blog_gallery_about1}>
                                                    <a>
                                                        With all that fear, it’s much easier to stay at home in our comfort
                                                        <br />
                                                        zones than to break out and travel.
                                                    </a>
                                                </div>
                                            </div>
                                            <p>
                                                Pri laudem tractatos hendrerit an. Mediocrem reprimique an vim, veniam tibique omittantur duo ut, agam graeci in vim. Quot appetere patrioque te mea,
                                                animal aliquip te pri. Ad vis animal ceteros percipitur, eos tollit civibus percipitur no. Posse definiebas dissentiunt mel ea, nam ferri utroque invenire
                                                an. Ius te iuvaret offendit pertinax, his verear deseruisse ex. Illud elitr eam eu. Id usu putant commune, stet primis expetenda cu vel. Mea ipsum homero
                                                apeirian te. Accumsan similique instructior ad pro, te purto dicit qui. Per eu unum persius, mei tantas postea in. Te his labores singulis, eum ei urbanitas
                                                adversarium. Ut quo numquam honestatis, qui populo percipit intellegat ea.
                                            </p>

                                            <div className={styles.standard_footer_paragraph7}>
                                                <p>
                                                    Learn more in related article:<a className='' style={{ color: "black", textDecoration: "none" }}>Staying with a local family on Bali</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-5'>
                                        <div className='row'>
                                            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                                <div className={styles.blog_post_singles_gallery_img}>
                                                    <img src='../Assets/Blog_post_img2.jpg' />
                                                    <h2>“The Professional Hobo”</h2>
                                                </div>
                                            </div>

                                            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                                <div className={styles.blog_post_singles_gallery_img}>
                                                    <img src='../Assets/Blog_post_img3.jpg' />
                                                    <h2>“Never Ending Footsteps”</h2>
                                                </div>
                                            </div>
                                            <div className={styles.blog_post_gallery_img_about}>
                                                <p>
                                                    Quot appetere patrioque te mea, animal aliquip te pri. Ad vis animal ceteros percipitur, eos tollit civibus percipitur no.
                                                    Posse definiebas dissentiunt mel ea, nam ferri utroque invenire an. Ius te iuvaret offendit pertinax, his verear deseruisse
                                                    ex. Illud elitr eam eu. Id usu putant commune, stet primis expetenda cu vel. Mea ipsum homero apeirian te. Accumsan similique
                                                    instructior ad pro, te purto dicit qui. Mediocrem reprimique an vim, veniam tibique omittantur duo ut, agam graeci in vim. An
                                                    sententiae disputando eos. Delicata voluptaria referrentur mel eu. Forensibus disputationi an eam. Sea ex delectus dignissim
                                                    gloriatur, quem suas per ea. In solum menandri cum.
                                                </p>
                                            </div>

                                            <div className={styles.blog_gallery_button}>
                                                <a><i class="bi bi-bookmark"></i></a>
                                                <h4 className='' style={{ paddingRight: "5px", paddingLeft: "3px" }}>explore</h4>
                                                <h4 className='' style={{ paddingRight: "5px" }}>travel</h4>
                                                <h4 className='' style={{ paddingRight: "5px" }}>vacation</h4>

                                                <div className={styles.blog_galley_like}>
                                                    <a><i class="bi bi-heart"></i></a>
                                                    <span>20</span>
                                                </div>

                                                <div className={styles.blog_gallery_msg}>
                                                    <a><i class="bi bi-chat"></i></a>
                                                    <span>3</span>
                                                </div>
                                            </div>

                                            <div className={styles.blog_gallery_footer_about}>
                                                <div className='row'>
                                                    <div className='col-12  col-sm-12 col-md-4'>
                                                        <div className={styles.blog_gallery_footer_about1}>
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
                                                        <div className={styles.blog_gallery_footer_about_date}>
                                                            <span>October 1, 2018 </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.blog_gallery_navigation}>
                                                <div className={styles.blog_gallery_navigation_inner}>
                                                    <div className={styles.blog_gallery_navigation_img}>
                                                        <a>
                                                            <img src='../Assets/Blog_post_img4.jpg' />

                                                        </a>
                                                    </div>
                                                    <h5>previous post</h5>
                                                </div>

                                                <div className={styles.blog_gallery_navigation_inner2}>

                                                    <h5>next post</h5>
                                                    <div className={styles.blog_gallery_navigation_img}>
                                                        <a>
                                                            <img src='../Assets/Blog_post_img5.jpg' />

                                                        </a>
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
                            <BlogStandardRightSidebarCol3 />
                        </div>

                    </div>
                </section>
                <BlogPostSinglesBestStoryCarousel />

            </section>

        </>
    )
}

export default BlogPostSinglesGallery
