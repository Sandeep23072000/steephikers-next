import React from 'react'
import styles  from '../styles/ArroundWorld.module.css'

const ArroundWorld = () => {
  return (
    <>
      
      <section className='mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'>
                            <div className={styles.travel_tip_col1_para1}>
                                <h2>Around the World in 10 days</h2>
                                <p>Aenean eget odio vel nulla <span>ullamcorper scelerisque</span>Vestibulum eget diam non velit aliquam fringilla. Praesent et mi turpis. Proin in felis nec vitae sed urna aliquam scelerisque. <u>Sed euismod lacus nec ultricies tincidunt.</u></p>
                            </div>
                            <div className={styles.travel_tip_col1_para1}>
                                <p><u>Vestibulum eget diam non velit aliquam fringilla</u> Praesent et mi turpis. Proin in felis nec dui efficitur.</p>
                            </div>
                            <div className={styles.travel_tip_col1_img}>
                                <img className="pe-2" width={40} src="../Assets/fb_img.svg" alt="Carouselimg1" />
                                <img className="pe-2" width={44} src="../Assets/twitter_img.svg" alt="Carouselimg1" />
                                <img className="pe-2" width={38} src="../Assets/pinterest_img.svg" alt="Carouselimg1" />
                            </div>
                        </div>

                        <div className={`col-12 col-sm-12 col-md-12 col-lg-7  ${styles.travel_tip_col2}`}>
                            <div className={styles.travel_tip_col2_img1}>
                                <img className="img-fluid" src="../Assets/travel_tip_img1.jpg" alt="img1" />
                            </div>
                            <div className={styles.travel_tip_col2_img2}>
                                <img className="img-fluid" src="../Assets/travel_tip_img2.png" alt="img2" />
                            </div>
                            <div className={styles.travel_tip_col2_img3}>
                                <img className="img-fluid" src="../Assets/travel_tip_img3.png" alt="img3" />
                            </div>
                            <div className={styles.travel_tip_col2_para}>
                                <h3>Morbi accumsan ipsum velit. nam nec tellus a odio tincidunt</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

    </>
  )
}

export default ArroundWorld
