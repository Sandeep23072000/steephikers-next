/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/TravelTip.module.css'

const TravelTip = () => {
    return (
        <>
            <section className='mt-5' style={{ backgroundColor: "rgb(247, 242, 238)" }}>
                <div className='container-fluid'>
                    <div className='row align-items-center text-md-start text-sm-center text-center'>
                        <div className={`${styles.travel_tip_main_col1} col-12 col-sm-12 col-md-5 col-lg-5`}>
                            <img className={styles.travel_tip_main_col1_img1} src="../Assets/travel_tip_img-1.png" alt="img1" />
                            <img className={styles.travel_tip_main_col1_img2} src="../Assets/travel_tip_img-2.png" alt="img2" />
                        </div>
                        <div className='col-12 col-lg-7 col-md-7 col-sm-12'>
                            <div className={styles.travel_tip_main_col2}>
                                <h2>BEST MONEY - SAVING TRAVEL TIPS!</h2>
                                <p>
                                    <span>See how I helped real readers plan, save and <u> go on the trip of a lifetime</u> And get </span>
                                    <span className={styles.span_1}>actionable steps you can use to travel anywhere </span>
                                    <span> no matter your income or where youre from!</span>
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-12 col-md-6 col-lg-3 mt-3 mt-sm-3 mt-md-3 mt-lg-0'>
                                    <input className={styles.travel_tip_main_input} type="text" placeholder='Name' />
                                </div>
                                <div className='col-12 col-sm-12 col-md-6 col-lg-3 mt-3 mt-sm-3 mt-md-3 mt-lg-0'>
                                    <input className={styles.travel_tip_main_input} type="text" placeholder='Email' />
                                </div>
                                <div className='col-12 col-sm-12 col-md-6 col-lg-3 mt-3 mt-sm-3 mt-md-3 mt-lg-0'>
                                    <input className={styles.travel_tip_main_input} type="text" placeholder='Country' />
                                </div>
                                <div className='col-12 col-sm-12 col-md-6 col-lg-3 mt-3 mt-sm-3 mt-md-3 mt-lg-0'>
                                    <button className={styles.travel_tip_main_button} type="submit" >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TravelTip
