/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../../styles/AboutUs.module.css'
import { Margarine } from 'next/font/google'

import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import TravelTip from '../TravelTip';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FooterSection from '../FooterSection';

const AboutUs = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 4
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
      <section className="" style={{ marginTop: "5px" }}>
        <div className='container-fluid p-0'>
          <div className={styles.about_us_section_banner}>
            <img className='img-fluid ' src='../Assets/About_us_section_banner_img.jpg' />
            <p>About Me</p>
          </div>
        </div>
      </section>

      <section className='mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className={styles.about_main_section}>
                <h1>
                  Hi!I’m Melissa:)
                  <br />
                  Let’s go travel
                </h1>
              </div>

              <div className={styles.empty_span_inner}>
                <span className='empty_inner_col'></span>
              </div>

              <div className={styles.about_us_paragraph}>
                <p>Lorem Ipsum Nam nec tellus a odio tincidunt auctor. Proin gravida nibh vel velit auctor aliquet. Bendum auctor,
                  nisi elit consequat ipsum, nec sagittis sem nibh id elit. <u>Duis sed odio sit amet nibh</u>   vulputate </p>
              </div>

              <div className={styles.empty_span_inner}>
                <span className='empty_inner_col'></span>
              </div>

              <div className={styles.about_us_paragraph}>
                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor Class aptent taciti sociosqu ad litora torquen ? 😎</p>
              </div>

              <div className={styles.empty_span_inner}>
                <span className='empty_inner_col'></span>
              </div>

              <div className={styles.about_us_paragraph}>
                <p>Want to know more? Read our <span>Most asked questions</span></p>
              </div>

              <div className={styles.empty_span_inner}>
                <span className='empty_inner_col'></span>
              </div>

              <div className=''>
                <img className="pe-2" width={40} src="../Assets/fb_img.svg" alt="Carouselimg1" />
                <img className="pe-2" width={44} src="../Assets/twitter_img.svg" alt="Carouselimg1" />
                <img className="pe-2" width={38} src="../Assets/pinterest_img.svg" alt="Carouselimg1" />
              </div>

            </div>

            <section className='col-lg-6'>
              <div className={styles.about_main_section2}>
                <div className={styles.about_main_section_back}>
                  <div className={styles.about_us_img}>
                    <img src='../Assets/About_us_section_img1.jpg'></img>

                     <img className={styles.about_video_img} src='../Assets/About_us_video_img.png'></img> 


                  </div>
                </div>
                <div className={styles.empty_span_inner}>
                  <span className='empty_inner_col'></span>
                </div>

                <div className='row'>
                  <div className='col-2'>
                    <div className={styles.about_us_paragraph2}>
                      <div className={styles.about_us_img2}>
                        <img className='w-60 h-49' src='../Assets/About_us_section_img2.png'></img>
                      </div>
                    </div>
                  </div>
                  <div className='col-10'>
                    <div className={styles.about_us_img_section2}>
                      <h2>Morbi accumsan ipsum velit. nam nec tellus a odio tincidunt auctor a ornare odio.</h2>
                    </div>
                  </div>
                </div>
              </div>

            </section>
          </div>
        </div>
      </section>

      <TravelTip />

      <div className='container mt-4 mb-5'>
        <div className={styles.about_carousel_top}>
          <div className={styles.about_carousel_heading}>
            <h2>WHAT READERS SAY ABOUT me </h2>
          </div>
          <div className={styles.about_carousel_paragraph}>
            <p>See how I’ve helped others save money and plan trips of their lifetime </p>
          </div>
        </div>
        <Carousel responsive={responsive}
          swipeable={true}
          autoPlay={true}
          transitionDuration={2000}
          draggable={true}
          infinite={true}
          loop={true}
          customTransition="transform 1s ease-in-out"
          removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile", "smallmobile", "extrasmallmobile"]}
        >
          <div>
            <div className="card" style={{ width: 'auto', margin: "0.5rem", border: '1px solid #f2f2f2', borderTop: 'none' }}>
              <img className="card-img-top img-fluid border-0" src="../Assets/About_us_carousel1.jpg" alt="Card image cap" />
              <div className="card-body">
                <div className={styles.main_home_carousel_body}>
                  <p>Morbi aliquet tempus tempor. Nunc vitae semper mauris. Nam sollicitudin risus dui, molestie congue massa ultricies eu. Duis pharetra, ligula in molestie congue mgravida. <span>– Sara & Tom</span></p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card" style={{ width: 'auto', margin: "0.5rem", border: '1px solid #f2f2f2', borderTop: 'none' }}>
              <img className="card-img-top img-fluid border-0" src="../Assets/About_us_carousel2.jpg" alt="Card image cap" />
              <div className="card-body">
                <div className={styles.main_home_carousel_body}>
                  <p>Fusce ornare neque libero. Duis nec pellentesque tortor, ornare dignissim felis. Mauris et ipsum cursus, sodales leo vitae, varius eros. Curabitur in congue nibh. <span>— Adriana B</span></p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card" style={{ width: 'auto', margin: "0.5rem", border: '1px solid #f2f2f2', borderTop: 'none' }}>
              <img className="card-img-top img-fluid border-0" src="../Assets/About_us_carousel3.jpg" alt="Card image cap" />
              <div className="card-body">
                <div className={styles.main_home_carousel_body}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in sem auctor, lacinia massa ac, elementum lorem, vestibulum mattis.<span>- Erica </span></p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card" style={{ width: 'auto', margin: "0.5rem", border: '1px solid #f2f2f2', borderTop: 'none' }}>
              <img className="card-img-top img-fluid border-0" src="../Assets/About_us_carousel4.jpg" alt="Card image cap" />
              <div className="card-body">
                <div className={styles.main_home_carousel_body}>
                  <p>Aenean eget nulla sagittis justo cursus porta at vitae tellus. Cras suscipit interdum sapien, ut consectetur libero volutpat sit amet. Sed dictum efficitur neque vitae placerat. Fusce gravida ultricies metus non luctus, vestibulum vel. <span>- Laetitia C</span></p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>

        <div className={styles.empty_span_inner}>
                <span className='empty_inner_col'></span>
              </div>

              <div className=''>
                <div className={styles.about_section_link}>
                  <p>(For more testimonials <span>visit this page</span>)</p>
                </div>
              </div>

      </div>
    </>
  )
}

export default AboutUs
