import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoPinterest } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { FaRss } from "react-icons/fa";
import styles from '../../styles/Blog/BlogRightSidebar.module.css'

const BlogStandardRightSidebarCol3 = () => {
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
        
            <div className='col-lg-3 ' style={{ paddingLeft: "25px", paddingRight: '25px' }}>
                <div>
                    <div className={styles.standard_right_img}>
                        <img src='../Assets/Blog_standard_rightsidebar4.png' />
                    </div>
                </div>

                <div className={`${styles.footer_section_title_start}`}>
                    <span className={styles.footer_section_title}></span>
                    <h6>WHERE WE ARE NOW</h6>
                    <div>
                        <a href="backpacktraveler.qodeinteractive.com">
                            <img src="../Assets/Footer_Section_img.png" /></a>
                    </div>
                </div>

                <div className={`${styles.footer_section_title_start} mt-2`}>
                    <span className={styles.footer_section_title}></span>
                    <h6>INSTAGRAM</h6>
                    <div className="row">
                        <div className={`${styles.standard_right_img2} col-6 mt-3 py-0 pe-1`}>
                            <img src='../Assets/Bagpacktravel1.jpg' />
                            <div className={`${styles.fa_brands} d-flex align-items-center justify-content-center`}> <FaInstagram /> </div>
                        </div>

                        <div className={`${styles.standard_right_img2} col-6  mt-3 py-0 ps-1`}>
                            <img src='../Assets/Bag_pack_travel2.jpg' />
                            <div className={`${styles.fa_brands} d-flex align-items-center justify-content-center`}> <FaInstagram /> </div>
                        </div>

                        <div className={`${styles.standard_right_img2} col-6 mt-2 py-0 pe-1`}>
                            <img src='../Assets/Bag_pack_travel3.jpg' />
                            <div className={`${styles.fa_brands} d-flex align-items-center justify-content-center`}> <FaInstagram /> </div>
                        </div>

                        <div className={`${styles.standard_right_img2} col-6  mt-2 py-0 ps-1`}>
                            <img src='../Assets/Bag_pack_travel4.jpg' />
                            <div className={`${styles.fa_brands} d-flex align-items-center justify-content-center`}> <FaInstagram /> </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.footer_section_title_start}`}>
                    <span className={styles.footer_section_title}></span>
                    <h6>FOLLOW US</h6>

                    <div className="row d-flex">
                        <div className="col-4">
                            <a href="" className={styles.social_media_name} >
                                <span className={styles.fa_brands1}> <FaInstagram /> </span>
                                <h3 className={styles.media_name}>INSTAGRAM</h3>
                            </a>
                        </div>

                        <div className="col-4">
                            <a href="" className={styles.social_media_name} >
                                <span className={styles.fa_brands1}> <FaFacebookF /> </span>
                                <h3 className={styles.media_name}>FACEBOOK</h3>
                            </a>
                        </div>

                        <div className="col-4">
                            <a href="" className={styles.social_media_name} >
                                <span className={styles.fa_brands1}> <AiOutlineTwitter /> </span>
                                <h3 className={styles.media_name}>TWITTER</h3>
                            </a>
                        </div>

                        <div className="col-4">
                            <a href="" className={styles.social_media_name} >
                                <span className={styles.fa_brands1}> <BiLogoPinterest /> </span>
                                <h3 className={styles.media_name}>PINTEREST</h3>
                            </a>
                        </div>

                        <div className="col-4">
                            <a href="" className={styles.social_media_name} >
                                <span className={styles.fa_brands1}> <AiFillYoutube /> </span>
                                <h3 className={styles.media_name}>YOUTUBE</h3>
                            </a>
                        </div>

                        <div className="col-4">
                            <a href="" className={styles.social_media_name} >
                                <span className={styles.fa_brands1}> <FaRss /> </span>
                                <h3 className={styles.media_name}>RSS</h3>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={`${styles.standard_right_img4} mt-3`}>
                    <img src='../Assets/Blog_standard_rightsidebar5.jpg' />
                </div>

                <div className={`${styles.footer_section_title_start}`}>
                    <span className={styles.footer_section_title}></span>
                    <h6>Latest post</h6>

                    <div className='row mt-3'>
                        <div className={`${styles.standard_right_img3} col-4 mt-2`}>
                            <img src='../Assets/Blog_standard_rightsidebar6.jpg' />
                        </div>
                        <div className={`${styles.standard_right_img_about4} col-8 mt-2`}>
                            <h5>10 Classic Summer Vacations</h5>
                        </div>

                        <div className={`${styles.standard_right_img3} col-4 mt-2`}>
                            <img src='../Assets/Blog_standard_rightsidebar7.jpg' />
                        </div>
                        <div className={`${styles.standard_right_img_about4} col-8 mt-2`}>
                            <h5>Wild Village Family Camps</h5>
                        </div>

                        <div className={`${styles.standard_right_img3} col-4 mt-2 mt-2`}>
                            <img src='../Assets/Blog_standard_rightsidebar8.jpg' />
                        </div>
                        <div className={`${styles.standard_right_img_about4} col-8 mt-2`}>
                            <h5>10 Classic Summer Vacations</h5>
                        </div>

                        <div className={`${styles.standard_right_img3} col-4 mt-2`}>
                            <img src='../Assets/Blog_standard_rightsidebar9.jpg' />
                        </div>
                        <div className={`${styles.standard_right_img_about4} col-8 mt-2`}>
                            <h5>10 Classic Summer Vacations</h5>
                        </div>
                    </div>
                </div>

                <div className={`${styles.footer_section_title_start} mt-5`}>
                    <span className={`${styles.footer_section_title} `}></span>
                    <h6>NEWSLETTER</h6>

                    <form className={`${styles.form_section_input1} d-flex flex-column align-items-center `} onSubmit={handleNewsletterSubmit}>
                        <div className="row align-items-center w-100 mt-3">
                            <input type="email" className={`${styles.form_control_input} form-control w-100`} name="email" id="email"
                                placeholder="Email Address" value={newsletterEmail} required onChange={handleNewsletterEmailChange} />
                        </div>
                        <input className={`${styles.btn_text_center} w-100`} type="submit" value="SUBSCRIBE" />
                    </form>
                </div>

                <div className={`${styles.footer_section_title_start} mt-5`}>
                    <span className={styles.footer_section_title}></span>
                    <h6>Categories</h6>

                    <ul>
                        <li className={styles.categories_items}>
                            <p>Adventure</p>
                        </li>
                        <li className={styles.categories_items}>
                            <p>Destination</p>
                        </li>
                        <li className={styles.categories_items}>
                            <p>Explore</p>
                        </li>
                        <li className={styles.categories_items}>
                            <p>Inspire</p>
                        </li>
                        <li className={styles.categories_items}>
                            <p>Lifestyle</p>
                        </li>
                        <li className={styles.categories_items}>
                            <p>Moments</p>
                        </li>
                        <li className={styles.categories_items}>
                            <p>Planet</p>
                        </li>
                        <li className={styles.categories_items}>
                            <p>Tourism</p>
                        </li>
                        <li className={styles.categories_items}>
                            <p>Tourist Tours</p>
                        </li>
                        <li className={styles.categories_items}>
                            <p>Travel Guides</p>
                        </li>
                        <li className={styles.categories_items}>
                            <p>Travellife</p>
                        </li>
                        <li className={styles.categories_items}>
                            <p>Vacation</p>
                        </li>
                        <li className={styles.categories_items}>
                            <p>Visiting</p>
                        </li>
                        <li className={styles.categories_items}>
                            <p>Wanderlust</p>
                        </li>
                        <li className={styles.categories_items}>
                            <p>World</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default BlogStandardRightSidebarCol3
