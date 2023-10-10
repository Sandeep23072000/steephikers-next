import React from 'react'
import styles from '../../styles/Blog/BlogRightSidebar.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoPinterest } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { FaRss } from "react-icons/fa";
import BlogStandardRightSidebarCol3 from './BlogStandardRightSidebarCol3';
const BlogStandardRightSidebar = () => {
    const [newsletterEmail, setNewsletterEmail] = React.useState("");
    const handleNewsletterEmailChange = (e) => {
        setNewsletterEmail(e.target.value);
    };
    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        console.log(newsletterEmail);

        setNewsletterEmail("");
    };

    return (
        <>

            <section className='' style={{ paddingTop: '70px' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div>
                                <div className={styles.standard_about_section}>
                                    <a>Greece</a>
                                    <h3>10 Classic Summer Vacations </h3>
                                    <span>Planet</span>
                                </div>
                                <div className={styles.standard_img}>
                                    <img src='../Assets/Blog_standard_rightsidebar1.jpg' />
                                </div>
                                <div className={styles.standard_footer_section}>
                                    <div className={styles.standard_footer_paragraph}>
                                        <p>Lorem ipsum dolor sit amet, no elitr tation delicata cum, mei in causae deseruisse. Has eruditi singulis principes
                                            ad, eam fuisset voluptua ea, pro ceteros adipisci in. Sed tempor adversarium ad, eum ne facete delectus. Viris maiorum
                                            lucilius eum ei. </p>
                                    </div>

                                    <div className={styles.standard_footer_button}>
                                        <span>Keep Reading...</span>
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
                            </div>

                            <div className='mt-5'>
                                <div className={styles.standard_about_section} >
                                    <a>Greece</a>
                                    <h3>10 Classic Summer Vacations </h3>
                                    <span>Planet</span>
                                </div>
                                <div className={styles.standard_img}>
                                    <img src='../Assets/Blog_standard_rightsidebar2.jpg' />
                                </div>
                                <div className={styles.standard_footer_section}>
                                    <div className={styles.standard_footer_paragraph}>
                                        <p>Lorem ipsum dolor sit amet, no elitr tation delicata cum, mei in causae deseruisse. Has eruditi singulis principes
                                            ad, eam fuisset voluptua ea, pro ceteros adipisci in. Sed tempor adversarium ad, eum ne facete delectus. Viris maiorum
                                            lucilius eum ei. </p>
                                    </div>

                                    <div className={styles.standard_footer_button}>
                                        <span>Keep Reading...</span>
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
                            </div>

                            <div className='mt-5'>
                                <div className={styles.standard_about_section}>
                                    <a>Greece</a>
                                    <h3>10 Classic Summer Vacations </h3>
                                    <span>Planet</span>
                                </div>
                                <div className={styles.standard_img}>
                                    <img src='../Assets/Blog_standard_rightsidebar3.jpg' />
                                </div>
                                <div className={styles.standard_footer_section}>
                                    <div className={styles.standard_footer_paragraph}>
                                        <p>Lorem ipsum dolor sit amet, no elitr tation delicata cum, mei in causae deseruisse. Has eruditi singulis principes
                                            ad, eam fuisset voluptua ea, pro ceteros adipisci in. Sed tempor adversarium ad, eum ne facete delectus. Viris maiorum
                                            lucilius eum ei. </p>
                                    </div>

                                    <div className={styles.standard_footer_button}>
                                        <span>Keep Reading...</span>
                                    </div>
                                </div>

                                <div className={styles.standard_footer_about}>
                                    <div className='row '>
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
                            </div>

                            <div className='mt-5'>
                                <div className={styles.standard_right_footer}>
                                    <div className={styles.standard_right_footer_about}>
                                        <span>&#10078;</span>
                                        <h5>I dislike feeling at home when I'm abroad. </h5>
                                        <p>Angel Santos </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BlogStandardRightSidebarCol3 />
                    </div>
                </div>
            </section>

        </>
    )
}

export default BlogStandardRightSidebar
