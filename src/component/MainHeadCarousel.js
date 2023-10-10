/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../styles/MainHeadCarousel.module.css';

const MainHeadCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1300 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1300, min: 900 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 900, min: 700 },
            items: 3
        },
        smallmobile: {
            breakpoint: { max: 700, min: 500 },
            items: 2
        },
        extrasmallmobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <section className='mt-5'>
                

                <div className='container-fluid mt-4 mb-5'>
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
                            <div className="card" style={{ width: 'auto', margin:"0.5rem", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                <img className="card-img-top img-fluid border-0" src="../Assets/home_main_carousel_img1.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <div className={styles.main_home_carousel_body}>
                                        <a href="#">Canada</a>
                                        <h4>Villages in the Brazil</h4>
                                        <h5>ADVENTURE</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card" style={{ width: 'auto', margin:"0.5rem", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                <img className="card-img-top img-fluid border-0" src="../Assets/home_main_carousel_img2.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <div className={styles.main_home_carousel_body}>
                                        <a href="#">Brazil</a>
                                        <h4>A Guide for Budget Travel With Pets</h4>
                                        <h5>ADVENTURE</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card" style={{ width: 'auto', margin:"0.5rem", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                <img className="card-img-top img-fluid border-0" src="../Assets/home_main_carousel_img3.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <div className={styles.main_home_carousel_body}>
                                        <a href="#">United Kingdom</a>
                                        <h4>Traveler who walks around </h4>
                                        <h5>ADVENTURE</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card" style={{ width: 'auto', margin:"0.5rem", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                <img className="card-img-top img-fluid border-0" src="../Assets/home_main_carousel_img4.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <div className={styles.main_home_carousel_body}>
                                        <a href="#">Brazil</a>
                                        <h4>Explore the Finest Beaches in Italy</h4>
                                        <h5>ADVENTURE</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card" style={{ width: 'auto', margin:"0.5rem", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                <img className="card-img-top img-fluid border-0" src="../Assets/home_main_carousel_img5.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <div className={styles.main_home_carousel_body}>
                                        <a href="#">Canada</a>
                                        <h4>The 15 best Things to Do in Dublin</h4>
                                        <h5>ADVENTURE</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card" style={{ width: 'auto', margin:"0.5rem", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                <img className="card-img-top img-fluid border-0" src="../Assets/home_main_carousel_img6.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <div className={styles.main_home_carousel_body}>
                                        <a href="#">Marano di Napoli</a>
                                        <h4>Venice City Tour With River Cruise</h4>
                                        <h5>ADVENTURE</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card" style={{ width: 'auto', margin:"0.5rem", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                <img className="card-img-top img-fluid border-0" src="../Assets/home_main_carousel_img8.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <div className={styles.main_home_carousel_body}>
                                        <a href="#">Parish</a>
                                        <h4>Eating Food Tour! 😍</h4>
                                        <h5>ADVENTURE</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card" style={{ width: 'auto', margin:"0.5rem", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                <img className="card-img-top img-fluid border-0" src="../Assets/home_main_carousel_img9.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <div className={styles.main_home_carousel_body}>
                                        <a href="#">Perth</a>
                                        <h4>Top 10 Popular Sports on The World</h4>
                                        <h5>ADVENTURE</h5>
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

export default MainHeadCarousel
