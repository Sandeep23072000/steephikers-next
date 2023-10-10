
import React from 'react'
import styles from '../styles/MainHeadSection.module.css'

const MainHeadSection = () => {
  return (
    <>
      
      <section className='mt-5'>
      <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-6 col-md-6 col-lg-4 d-sm-none d-md-block d-none'>
                            <div className='d-flex justify-content-evenly'>
                                <div className={styles.main_home_carousel_head}>
                                    <img className='img-fluid' src="../Assets/home-img-1.png" alt="homeImg1" />
                                    <h4>Get Inspired</h4>
                                </div>
                                <div className={styles.main_home_carousel_head}>
                                    <img className='img-fluid' src="../Assets/home-img-2.png" alt="homeImg2" />
                                    <h4>My Books</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-6 col-lg-4 d-sm-none d-md-block d-none text-center'>
                            <div className={styles.main_home_carousel_head}>
                                <img className='img-fluid' width="170" src="../Assets/logo2.png" alt="logo" />
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 d-md-none d-sm-none d-lg-block d-none'>
                            <div className='d-flex justify-content-evenly'>
                                <div className={styles.main_home_carousel_head}>
                                    <img className='img-fluid' src="../Assets/home-img-3.png" alt="homeImg3" />
                                    <h4>Travel Guides</h4>
                                </div>
                                <div className={styles.main_home_carousel_head}>
                                    <img className='img-fluid' src="../Assets/home-img-4.png" alt="homeImg4" />
                                    <h4>About Me</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </section>

    </>
  )
}

export default MainHeadSection
