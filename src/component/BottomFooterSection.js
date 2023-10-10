import React from 'react'
import styles from '../styles/FooterSection.module.css'
const BottomFooterSection = () => {
  return (
    <>
      <section className={styles.end_footer_section}>
                <div className='container'>
                    <div className={`${styles.footer_row} row`}>
                        <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
                            <div className={`${styles.end_footer_about}  text-lg-start text-center`}>
                                <p>© 2018 Qode Interactive, All Rights Reserved</p>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-sm-12 col-12'>
                            <div className={styles.end_footer_menu}>
                                <ul className={`${styles.end_footer_menu_about} flex-wrap justify-content-center justify-content-lg-end`}>
                                    <li className=''>Lifestyle</li>
                                    <li className=''>Moments</li>
                                    <li className=''>Adventure</li>
                                    <li className=''>Explore</li>
                                    <li className=''>Vacation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default BottomFooterSection
