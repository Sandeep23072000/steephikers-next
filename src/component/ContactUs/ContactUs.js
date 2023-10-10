import React from 'react'
import styles from '../../styles/ContactUs.module.css'
import FooterSection from '../FooterSection'
const ContactUs = () => {
  return (
    <>
      <section className="" >
        <div className='container-fluid p-0'>
          <div className={styles.contact_us_section_banner}>
            <img className='img-fluid ' src='../Assets/Contact_us_topimg.jpg' />
            <p>Get In Touch</p>
          </div>
        </div>
      </section>

      <div className={styles.empty_span_inner_contactus}>
        <span className='empty_inner_col'></span>
      </div>
      
      <section className=''>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
              <div className='text-center'>
                <img className='img-fluid' src='../Assets/contact_us_img1.png'></img>
              </div>
            </div>

            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
              <div className={styles.contact_us_heading}>
                <h3>get in touch</h3>
              </div>

              <div className={styles.contact_us_paragraph}>
                <p>For all business and collaboration enquiries please contact
                  <br />
                  <span>backpacktraveler@example.com </span>
                  For any other enquiries please use the form below. ?
                  🙂
                </p>
              </div>

              <div className={styles.contact_us_form}>

                <form action="#">
                  <input style={{ marginBottom: "20px" }} className={styles.contact_name} type="name" placeholder="Name" required />
                  <input style={{ marginBottom: "20px" }} className={styles.contact_name} type="email" placeholder="Email" required />
                  <textarea style={{ marginBottom: "20px" }} className={styles.contact_name} name="message" placeholder="  Your Message . ."></textarea>
                  <input style={{ width: "22%", height: "45px" }} className={styles.contact_submit} type="submit" value="submit" class="submit" required />
                </form>

              </div>

            </div>
          </div>
        </div>
      </section>


      <section className='' style={{marginTop: "8%",  backgroundColor: "#f7f2ee", paddingBottom: "7%", paddingTop: "8%"}}>
        <div className={styles.travel_guides}>
          <h3>Our Travel Guides </h3>
          <p>Read about your favorite travel destinations & our adventures </p>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-6 col-md-4 col-lg-2'>
              <div className={styles.travel_guides_img}>
                <img src='../Assets/Travel_guides1.png'></img>

                <div className={styles.travel_guides_img_price}>
                <span>Buy for</span>
                <span>$</span>
                <span>22.00</span>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6 col-md-4 col-lg-2'>
              <div className={styles.travel_guides_img}>
                <span className={styles.travel_guides_sales}>Sale</span>
                <img src='../Assets/Travel_guides2.png'></img>

                <div className={styles.travel_guides_img_price}>
                <span>Buy for</span>
                <span> $</span>
                <del>26.00</del>
                <span className={styles.span1}>-$26.00</span>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6 col-md-4 col-lg-2'>
              <div className={styles.travel_guides_img}>
              <span className={styles.travel_guides_sales}>New</span>
                <img src='../Assets/Travel_guides3.png'></img>

                <div className={styles.travel_guides_img_price}>
                <span>Buy for</span>
                <span>$</span>
                <span>27.00</span>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6 col-md-4 col-lg-2'>
              <div className={styles.travel_guides_img}>
                <img src='../Assets/Travel_guides4.png'></img>

                <div className={styles.travel_guides_img_price}>
                <span>Buy for</span>
                <span>$</span>
                <span>28.00</span>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6 col-md-4 col-lg-2'>
              <div className={styles.travel_guides_img}>
                <img src='../Assets/Travel_guides5.png'></img>

                <div className={styles.travel_guides_img_price}>
                <span>Buy for</span>
                <span>$</span>
                <span>29.00</span>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6 col-md-4 col-lg-2'>
              <div className={styles.travel_guides_img}>
                <img src='../Assets/Travel_guides6.png'></img>

                <div className={styles.travel_guides_img_price}>
                <span>Buy for</span>
                <span>$</span>
                <span>30.00</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FooterSection />

    </>
  )
}

export default ContactUs
