import React from 'react'
import styles from '../../styles/Blog/BlogPostSinglesStandard.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const BlogPostSinglesBestStoryCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1300 },
            items: 6
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
            <section className='mt-1'>

                <div className='row' style={{ borderTop: "1px solid #f3f3f3", padding: "40px 0" }}>

                    <div className='col-2'>
                        <div className={styles.blog_post_about_carousel}>
                            <h5>Instagram</h5>
                            <h4>Best Stories this week</h4>
                        </div>
                    </div>

                    <div className='col-10'>

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
                                <div className="card" style={{ width: 'auto', margin: "0px", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                    <img className="card-img-top img-fluid " src="../Assets/Blog_post_img10.jpg" />

                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: 'auto', margin: "0px", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                    <img className="card-img-top img-fluid border-0" src="../Assets/Blog_post_img11.jpg" alt="Card image cap" />

                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: 'auto', margin: "0px", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                    <img className="card-img-top img-fluid border-0" src="../Assets/Blog_post_img12.jpg" alt="Card image cap" />

                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: 'auto', margin: "0px", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                    <img className="card-img-top img-fluid border-0" src="../Assets/Blog_post_img13.jpg" alt="Card image cap" />

                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: 'auto', margin: "0px", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                    <img className="card-img-top img-fluid border-0" src="../Assets/Blog_post_img14.jpg" alt="Card image cap" />

                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: 'auto', margin: "0px", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                    <img className="card-img-top img-fluid border-0" src="../Assets/Blog_post_img15.jpg" alt="Card image cap" />

                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: 'auto', margin: "0px", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                    <img className="card-img-top img-fluid border-0" src="../Assets/Blog_post_img16.jpg" alt="Card image cap" />

                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: 'auto', margin: "0px", border: '1px solid #f2f2f2', borderTop: 'none' }}>
                                    <img className="card-img-top img-fluid border-0" src="../Assets/Blog_post_img17.jpg" alt="Card image cap" />

                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>

            </section>
        </>
    )
}

export default BlogPostSinglesBestStoryCarousel
