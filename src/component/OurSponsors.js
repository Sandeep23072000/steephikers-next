/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Carousel from 'react-multi-carousel'
import styles from '../styles/OurSponsors.module.css'

const OurSponsors = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 9
        },
        desktop: {
            breakpoint: { max: 3000, min: 1300 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1300, min: 1000 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 1000, min: 768 },
            items: 4
        },
        smallmobile: {
            breakpoint: { max: 768, min: 500 },
            items: 3
        },
        extrasmallmobile: {
            breakpoint: { max: 500, min: 0 },
            items: 2
        }
    };
    return (
        <>
            <section className='mt-5'>
                <div className='container'>
                    <div className={styles.our_sponsors_head}>
                        <h3>Our Sponsors</h3>
                    </div>
                </div>
            </section>
            <section className='mt-3 mb-5'>
                <div className='container'>
                    <Carousel responsive={responsive}
                        swipeable={true}
                        autoPlay={true}
                        transitionDuration={2000}
                        draggable={true}
                        infinite={true}
                        loop={true}
                        removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile", "smallmobile", "extrasmallmobile"]}
                        keyBoardControl={true}
                        customTransition="transform 1s ease-in-out"
                    >
                        <div>
                            <img className="img-fluid" src="../Assets/sponsor-1.png" alt="img-1" />
                        </div>
                        <div>
                            <img className="img-fluid" src="../Assets/sponsor-2.png" alt="img-2" />
                        </div>
                        <div>
                            <img className="img-fluid" src="../Assets/sponsor-3.png" alt="img-3" />
                        </div>
                        <div>
                            <img className="img-fluid" src="../Assets/sponsor-4.png" alt="img-4" />
                        </div>
                        <div>
                            <img className="img-fluid" src="../Assets/sponsor-5.png" alt="img-5" />
                        </div>
                        <div>
                            <img className="img-fluid" src="../Assets/sponsor-6.png" alt="img-6" />
                        </div>
                        <div>
                            <img className="img-fluid" src="../Assets/sponsor-7.png" alt="img-7" />
                        </div>
                        <div>
                            <img className="img-fluid" src="../Assets/sponsor-8.png" alt="img-8" />
                        </div>
                        <div>
                            <img className="img-fluid" src="../Assets/sponsor-9.png" alt="img-9" />
                        </div>
                        <div>
                            <img className="img-fluid" src="../Assets/sponsor-10.png" alt="img-10" />
                        </div>
                    </Carousel>
                </div >
            </section >
        </>
    )
}

export default OurSponsors
