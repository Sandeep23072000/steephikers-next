/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/FooterSection.module.css'

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoPinterest } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { FaRss } from "react-icons/fa";
const FooterSection = () => {
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

            <section className={styles.footer_section} >
                <div className="container">
                    <div className="row row-gap-5 ">
                        <div className={`${styles.footer_section_title_start} col-lg-4 col-md-12 col-sm-12 col-12  `}>
                            <span className={styles.footer_section_title}></span>
                            <h6>WHERE WE ARE NOW</h6>
                            <div>
                                <a href="backpacktraveler.qodeinteractive.com">
                                    <img src="../Assets/Footer_Section_img.png" /></a>
                            </div>
                        </div>

                        <div className={`${styles.footer_section_title_start} col-lg-4 col-md-12 col-sm-12 col-12 `}>
                            <span className={styles.footer_section_title}></span>
                            <h6>FOLLOW US</h6>

                            <div className="row d-flex">
                                <div className="col-4">
                                    <a href="" className={styles.social_media_name} >
                                        <span className={styles.fa_brands}> <FaInstagram /> </span>
                                        <h3 className={styles.media_name}>INSTAGRAM</h3>
                                    </a>
                                </div>

                                <div className="col-4">
                                    <a href="" className={styles.social_media_name} >
                                        <span className={styles.fa_brands}> <FaFacebookF /> </span>
                                        <h3 className={styles.media_name}>FACEBOOK</h3>
                                    </a>
                                </div>

                                <div className="col-4">
                                    <a href="" className={styles.social_media_name} >
                                        <span className={styles.fa_brands}> <AiOutlineTwitter /> </span>
                                        <h3 className={styles.media_name}>TWITTER</h3>
                                    </a>
                                </div>

                                <div className="col-4">
                                    <a href="" className={styles.social_media_name} >
                                        <span className={styles.fa_brands}> <BiLogoPinterest /> </span>
                                        <h3 className={styles.media_name}>PINTEREST</h3>
                                    </a>
                                </div>

                                <div className="col-4">
                                    <a href="" className={styles.social_media_name} >
                                        <span className={styles.fa_brands}> <AiFillYoutube /> </span>
                                        <h3 className={styles.media_name}>YOUTUBE</h3>
                                    </a>
                                </div>

                                <div className="col-4">
                                    <a href="" className={styles.social_media_name} >
                                        <span className={styles.fa_brands}> <FaRss /> </span>
                                        <h3 className={styles.media_name}>RSS</h3>
                                    </a>
                                </div>


                            </div>
                        </div>


                        <div className={`${styles.footer_section_title_start} col-lg-4 col-md-12 col-sm-12 col-12`}>
                            <span className={styles.footer_section_title}></span>
                            <h6>NEWSLETTER</h6>

                            <form className="d-flex flex-column align-items-center" onSubmit={handleNewsletterSubmit}>
                                <div className="row align-items-center w-75">
                                    <input type="email" className={`${styles.form_control_input} form-control w-100`} name="email" id="email"
                                        placeholder="Email Address" value={newsletterEmail} required onChange={handleNewsletterEmailChange} />
                                </div>
                                <input className={`${styles.btn_text_center} w-75`} type="submit" value="SUBSCRIBE" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.end_footer_section}>
                <div className='container'>
                    <div className={`${styles.footer_row} row`}>
                        <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
                            <div className={`${styles.end_footer_about}  text-lg-start text-center`}>
                                <p>© 2018 Qode Interactive, All Rights Reserved</p>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-sm-12 col-12'>
                            <div className={styles.end_footer_menu}>
                                <ul className={`${styles.end_footer_menu_about} flex-wrap justify-content-center justify-content-lg-end`}>
                                    <li className=''>Lifestyle</li>
                                    <li className=''>Moments</li>
                                    <li className=''>Adventure</li>
                                    <li className=''>Explore</li>
                                    <li className=''>Vacation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FooterSection
