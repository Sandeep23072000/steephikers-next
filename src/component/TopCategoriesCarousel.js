/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/TopCategoriesCarousel.module.css'
import Carousel from 'react-multi-carousel'

const TopCategories = () => {

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

            
            

            <section className='mb-4' style={{marginTop: "5%"}}>
                <div className='container'>
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
                            <div className='row'>
                                <div className='col-12 col-sm-12 col-md-12 col-lg-6 mb-0 mb-sm-3'>
                                    <div className={`${styles.our_sponsors_carousel_col1} text-center mt-3`}>
                                        <h4>Canada</h4>
                                        <h3 className='mt-3'>The Best Cities in Europe </h3>
                                        <h5 className='mt-3'>Vacation</h5>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet, no elitr tation delicata cum, mei in causae deseruisse. Has eruditi singulis principes ad, eam fuisset voluptua ea, pro ceteros adipisci in. Sed tempor adversarium ad,</p>
                                    </div>
                                    <div className={`${styles.our_sponsors_carousel_col1_bottom} text-center mt-3`}>
                                        <h4>Keep Reading...</h4>
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 mb-3'>
                                        <img className="pe-2" width={40} src="../Assets/fb_img.svg" alt="Carouselimg1" />
                                        <img className="pe-2" width={44} src="../Assets/twitter_img.svg" alt="Carouselimg1" />
                                        <img className="pe-2" width={38} src="../Assets/pinterest_img.svg" alt="Carouselimg1" />
                                    </div>
                                </div>
                                <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                                    <div className={styles.our_sponsors_carousel_col2}>
                                        <img className="img-fluid" src="../Assets/sponsors_crsl_5.jpg" alt="Carouselimg1" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className='row'>
                                <div className='col-12 col-sm-12 col-md-12 col-lg-6 mb-0 mb-sm-3'>
                                    <div className={`${styles.our_sponsors_carousel_col1} text-center mt-3`}>
                                        <h4>italy</h4>
                                        <h3 className='mt-3'>46 Amazing Travel Pictures</h3>
                                        <h5 className='mt-3'>Vacation</h5>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet, no elitr tation delicata cum, mei in causae deseruisse. Has eruditi singulis principes ad, eam fuisset voluptua ea, pro ceteros adipisci in. Sed tempor adversarium ad,</p>
                                    </div>
                                    <div className={`${styles.our_sponsors_carousel_col1_bottom} text-center mt-3`}>
                                        <h4>Keep Reading...</h4>
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 mb-3'>
                                        <img className="pe-2" width={40} src="../Assets/fb_img.svg" alt="Carouselimg1" />
                                        <img className="pe-2" width={44} src="../Assets/twitter_img.svg" alt="Carouselimg1" />
                                        <img className="pe-2" width={38} src="../Assets/pinterest_img.svg" alt="Carouselimg1" />
                                    </div>
                                </div>
                                <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                                    <div className={styles.our_sponsors_carousel_col2}>
                                        <img className="img-fluid" src="../Assets/sponsors_crsl_1.jpg" alt="Carouselimg1" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className='row'>
                                <div className='col-12 col-sm-12 col-md-12 col-lg-6 mb-0 mb-sm-3'>
                                    <div className={`${styles.our_sponsors_carousel_col1} text-center mt-3`}>
                                        <h4>Serbia</h4>
                                        <h3 className='mt-3'>People, Nature, & Everyday Life</h3>
                                        <h5 className='mt-3'>Vacation</h5>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet, no elitr tation delicata cum, mei in causae deseruisse. Has eruditi singulis principes ad, eam fuisset voluptua ea, pro ceteros adipisci in. Sed tempor adversarium ad,</p>
                                    </div>
                                    <div className={`${styles.our_sponsors_carousel_col1_bottom} text-center mt-3`}>
                                        <h4>Keep Reading...</h4>
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 mb-3'>
                                        <img className="pe-2" width={40} src="../Assets/fb_img.svg" alt="Carouselimg1" />
                                        <img className="pe-2" width={44} src="../Assets/twitter_img.svg" alt="Carouselimg1" />
                                        <img className="pe-2" width={38} src="../Assets/pinterest_img.svg" alt="Carouselimg1" />
                                    </div>
                                </div>
                                <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                                    <div className={styles.our_sponsors_carousel_col2}>
                                        <img className="img-fluid" src="../Assets/sponsors_crsl_3.jpg" alt="Carouselimg1" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className='row'>
                                <div className='col-12 col-sm-12 col-md-12 col-lg-6 mb-0 mb-sm-3'>
                                    <div className={`${styles.our_sponsors_carousel_col1} text-center mt-3`}>
                                        <h4>Canada</h4>
                                        <h3 className='mt-3'>7 Great Books You Must Read </h3>
                                        <h5 className='mt-3'>Vacation</h5>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet, no elitr tation delicata cum, mei in causae deseruisse. Has eruditi singulis principes ad, eam fuisset voluptua ea, pro ceteros adipisci in. Sed tempor adversarium ad,</p>
                                    </div>
                                    <div className={`${styles.our_sponsors_carousel_col1_bottom} text-center mt-3`}>
                                        <h4>Keep Reading...</h4>
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 mb-3'>
                                        <img className="pe-2" width={40} src="../Assets/fb_img.svg" alt="Carouselimg1" />
                                        <img className="pe-2" width={44} src="../Assets/twitter_img.svg" alt="Carouselimg1" />
                                        <img className="pe-2" width={38} src="../Assets/pinterest_img.svg" alt="Carouselimg1" />
                                    </div>
                                </div>
                                <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                                    <div className={styles.our_sponsors_carousel_col2}>
                                        <img className="img-fluid" src="../Assets/sponsors_crsl_2.jpg" alt="Carouselimg1" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className='row'>
                                <div className='col-12 col-sm-12 col-md-12 col-lg-6 mb-0 mb-sm-3'>
                                    <div className={`${styles.our_sponsors_carousel_col1} text-center mt-3`}>
                                        <h4>United Kingdom</h4>
                                        <h3 className='mt-3'>What to Eat For Breakfast </h3>
                                        <h5 className='mt-3'>Vacation</h5>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet, no elitr tation delicata cum, mei in causae deseruisse. Has eruditi singulis principes ad, eam fuisset voluptua ea, pro ceteros adipisci in. Sed tempor adversarium ad,</p>
                                    </div>
                                    <div className={`${styles.our_sponsors_carousel_col1_bottom} text-center mt-3`}>
                                        <h4>Keep Reading...</h4>
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 mb-3'>
                                        <img className="pe-2" width={40} src="../Assets/fb_img.svg" alt="Carouselimg1" />
                                        <img className="pe-2" width={44} src="../Assets/twitter_img.svg" alt="Carouselimg1" />
                                        <img className="pe-2" width={38} src="../Assets/pinterest_img.svg" alt="Carouselimg1" />
                                    </div>
                                </div>
                                <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                                    <div className={styles.our_sponsors_carousel_col2}>
                                        <img className="img-fluid" src="../Assets/sponsors_crsl_1.jpg" alt="Carouselimg1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default TopCategories
