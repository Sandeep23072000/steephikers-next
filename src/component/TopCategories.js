import React from 'react'
import styles from '../styles/TopCategories.module.css'

const TopCategories = () => {
  return (
    <>
      <section>
                <div className='container'>
                    <div className={styles.top_categories_head}>
                        <h4 className='pt-5'>Top Categories</h4>
                        <h5 className='pt-0 mt-0'>We are That Backpacker, Melissa and Johnatan (that’s us!)</h5>
                    </div>
                    <div className='d-flex justify-content-evenly flex-wrap pb-5'>
                        <div className={styles.top_categories_box}>
                            <img className="img-fluid" src="../Assets/category1.png" alt="image2" />
                            <h4>Beaches</h4>
                            <h5>4 Destinations</h5>
                        </div>
                        <div className={styles.top_categories_box}>
                            <img className="img-fluid" src="../Assets/category2.png" alt="image2" />
                            <h4>Beaches</h4>
                            <h5>4 Destinations</h5>
                        </div>
                        <div className={styles.top_categories_box}>
                            <img className="img-fluid" src="../Assets/category3.png" alt="image2" />
                            <h4>Beaches</h4>
                            <h5>4 Destinations</h5>
                        </div>
                        <div className={styles.top_categories_box}>
                            <img className="img-fluid" src="../Assets/category4.png" alt="image2" />
                            <h4>Beaches</h4>
                            <h5>4 Destinations</h5>
                        </div>
                        <div className={styles.top_categories_box}>
                            <img className="img-fluid" src="../Assets/category5.png" alt="image2" />
                            <h4>Beaches</h4>
                            <h5>4 Destinations</h5>
                        </div>
                        <div className={styles.top_categories_box}>
                            <img className="img-fluid" src="../Assets/category6.png" alt="image2" />
                            <h4>Beaches</h4>
                            <h5>4 Destinations</h5>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default TopCategories
