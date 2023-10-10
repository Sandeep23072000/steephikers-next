/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/TravelEssentials.module.css'

const TravelEssentials = () => {
  return (
    <>
      <section>
        <div className='container-fluid' style={{ backgroundColor: "#f7f2ee" }}>
          <div className={styles.travel_essentials_head}>
            <h4 className='pt-5'>MY TRAVEL ESSENTIALS</h4>
            <h5>We are the Backpack Traveler, your favorite travel assistants!</h5>
          </div>
          <div className='d-flex justify-content-center flex-wrap pb-5'>
            <img className="img-fluid" src="../Assets/travel_ essentials1.png" alt="image2" />
            <img className="img-fluid" src="../Assets/travel_ essentials2.png" alt="image2" />
            <img className="img-fluid" src="../Assets/travel_ essentials3.png" alt="image2" />
            <img className="img-fluid" src="../Assets/travel_ essentials4.png" alt="image2" />
            <img className="img-fluid" src="../Assets/travel_ essentials5.png" alt="image2" />
          </div>
        </div>
      </section>
    </>
  )
}

export default TravelEssentials
