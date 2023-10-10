/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/BackPackTraveler.module.css';
const BackPackTraveler = () => {
    return (
        <>
            <section className='mt-5'>
                <div className='container'>

                    <div className={styles.backpacktraveler_heading}>
                        <h2><span>#</span>BACKPACKTRAVELER</h2>
                        <p>Tag your photos #thatbackbacker to get featured on our<span> community feed.</span></p>
                    </div>
                </div>
            </section>

            <section className='mt-5'>
                <div className='container'>
                    <div className='row' >
                        <div className={`${styles.img_container} col-lg-3 col-12 col-sm-6 col-md-4 position-relative`}>
                            <a href='#' >
                                <img className='img-fluid' style={{ marginBottom: "1%", }} src="../Assets/Bagpacktravel1.jpg" />
                            </a>
                            <div className={`${styles.img_content} position-absolute`}>
                                <p>@BACKPACKTRAVELER_MIKADO</p>
                                <span>We travel not to escape life,
                                    but for life not to escape us.👜</span>
                            </div>
                        </div>

                        <div className={`${styles.img_container} col-lg-3 col-12 col-sm-6 col-md-4 position-relative`}>
                            <a href='#'>
                                <img className='img-fluid' style={{ marginBottom: "1%", }} src="../Assets/Bag_pack_travel2.jpg" />
                            </a>
                            <div className={`${styles.img_content} position-absolute`}>
                                <p>@BACKPACKTRAVELER_MIKADO</p>
                                <span>Learn the rules like a pro so you can break them like an artist.</span>
                            </div>
                        </div>

                        <div className={`${styles.img_container} col-lg-3 col-12 col-sm-6 col-md-4 position-relative`}>
                            <a href='#'>
                                <img className='img-fluid' style={{ marginBottom: "1%", }} src="../Assets/Bag_pack_travel3.jpg" />
                            </a>
                            <div className={`${styles.img_content} position-absolute`}>
                                <p>@BACKPACKTRAVELER_MIKADO</p>
                                <span>All my troubles wash away in the water. 😄</span>
                            </div>
                        </div>

                        <div className={`${styles.img_container} col-lg-3 col-12 col-sm-6 col-md-4  py-md-0 position-relative`}>
                            <a href='#'>
                                <img className='img-fluid' style={{ marginBottom: "1%", }} src="../Assets/Bag_pack_travel4.jpg" />
                            </a>
                            <div className={`${styles.img_content} position-absolute`}>
                                <p>@BACKPACKTRAVELER_MIKADO</p>
                                <span>Today’s good mood is sponsored by coffee 😊</span>
                            </div>
                        </div>

                        <div className={`${styles.img_container} col-lg-3 col-12 col-sm-6 col-md-4  py-md-0 position-relative`}>
                            <a href='#'>
                                <img className='img-fluid' style={{ marginBottom: "1%", }} src="../Assets/Bag_pack_travel5.jpg" />
                            </a>
                            <div className={`${styles.img_content} position-absolute`}>
                                <p>@BACKPACKTRAVELER_MIKADO</p>
                                <span>Architecture tends to consume everything else, it has become ones entire life.🏯</span>
                            </div>
                        </div>

                        <div className={`${styles.img_container} col-lg-3 col-12 col-sm-6 col-md-4  py-md-0 position-relative`}>
                            <a href='#'>
                                <img className='img-fluid' style={{ marginBottom: "1%", }} src="../Assets/Bag_pack_travel77.jpg" />
                            </a>
                            <div className={`${styles.img_content} position-absolute`}>
                                <p>@BACKPACKTRAVELER_MIKADO</p>
                                <span>Thank you, husband, for the adventure you bring to my life. 2 years. 2 furious.🔥</span>
                            </div>
                        </div>

                        <div className={`${styles.img_container} col-lg-3 col-12 col-sm-6 col-md-4  py-md-0 position-relative`}>
                            <a href='#'>
                                <img className='img-fluid' style={{ marginBottom: "1%", }} src="../Assets/Bag_pack._travel7.jpg" />
                            </a>
                            <div className={`${styles.img_content} position-absolute`}>
                                <p>@BACKPACKTRAVELER_MIKADO</p>
                                <span>Summer always feels like it’s over before it even starts.☀️</span>
                            </div>
                        </div>

                        <div className={`${styles.img_container} col-lg-3 col-12 col-sm-6 col-md-4  py-md-0 position-relative`}>
                            <a href='#'>
                                <img className='img-fluid' style={{ marginBottom: "1%", }} src="../Assets/Bag_pack_travel8.jpg" />
                            </a>
                            <div className={`${styles.img_content} position-absolute`}>
                                <p>@BACKPACKTRAVELER_MIKADO</p>
                                <span>I love the feeling of the fresh air on my face and the wind blowing through my hair....</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default BackPackTraveler;
