/* eslint-disable jsx-a11y/aria-proptypes */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'

import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoPinterest } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Link from 'next/link'
import { useRouter } from 'next/router';

const closedDrawerStyle = {
  transform: "translateX(100%)",
  // visibility: "hidden",
  visibility: "visible",
}

const openedDrawerStyle = {
  visibility: "visible",
  transform: "translateX(0%)",
}

const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname); 
  const [drawerStyle, setDrawerStyle] = useState(closedDrawerStyle);

  const handleOffcanvasDrawerOpen = () => {
    setDrawerStyle(openedDrawerStyle);
  };
  const handleOffcanvasDrawerClose = () => {
    setDrawerStyle(closedDrawerStyle);
  };

  return (
    <>

      <nav className={`${styles.nav_item_link_12} navbar navbar-expand-lg align-items-stretch p-0`} >
        <div className="container">
          <li className={`${styles.home_nav_menubar} nav-item dropdown align-self-stretch`} style={{ whiteSpace: "nowrap" }}>
            <a className={`${styles.nav_link}`} href="#" role="" data-bs-toggle="" aria-expanded=""> <img
              src="../Assets/Nav_bar_img1.png" />
              <span>DESTINATION</span>
            </a>
            <ul className={`${styles.home_nav_list} ${styles.home_nav_dropdown} dropdown-menu`} >
              <li><a href="#">UK</a></li>
              <li><a href="#">Australia</a></li>
              <li><a href="#">Italy</a></li>
              <li><a href="#">Spain</a></li>
              <li><a href="#">Serbia</a></li>
              <li><a href="#">Brazil</a></li>
              <li><a href="#">Peru</a></li>
              <li><a href="#">India</a></li>
            </ul>
          </li>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
            aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className={`${styles.nav_item_menubar} container-fluid collapse navbar-collapse align-self-stretch`} id="navbarScroll">
            <ul className={`${styles.nav_bar_content} align-items-stretch navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll col-8 justify-content-center`}>
              <li className={`${styles.home_nav_menubar} nav-item dropdown`}>
                <a className={`${styles.nav_link_menubar1} home-nav-dropdown-toggle dropdown-toggl`} aria-current="page" href="#"><span>HOME</span></a>
                <ul className={`${styles.home_nav_list} ${styles.home_nav_dropdown} dropdown-menu`} >
                  <li className={router.pathname ==="/" ? styles.active_url : ""}><Link href="/">Provence</Link></li>
                  <li><a href="#">Madeira</a></li>
                  <li><a href="#">Andalusia</a></li>
                  <li><a href="#">Antigua</a></li>
                  <li><a href="#">Baleares</a></li>
                  <li><a href="#">Trentino</a></li>
                  <li><a href="#">Cordoba</a></li>
                  <li><a href="#">Siracusa</a></li>
                  <li><a href="#">Malaga</a></li>
                  <li><a href="#">Landing</a></li>
                </ul>
              </li>

              <li className={`${styles.home_nav_menubar} nav-item dropdown`}>
                <a className={`${styles.nav_link_menubar1} home-nav-dropdown-toggle dropdown-toggl`} aria-current="page" href="#">PAGES</a>
                <ul className={`${styles.home_nav_list} ${styles.home_nav_dropdown} dropdown-menu`} >
                  <li><a href="#">Who We Are</a></li>
                  <li className={router.pathname ==="/aboutus" ? styles.active_url : ""}> <Link href="/aboutus">About Me </Link></li>
                  <li><a href="#">Destination Map</a></li>
                  <li className={router.pathname ==="/contactus" ? styles.active_url : ""}> <Link href="/contactus">Get In Touch</Link></li>
                  <li><a href="#">FAQ Page</a></li>
                </ul>
              </li>

              <li className={`${styles.home_nav_menubar} nav-item dropdown`}>
                <i className={`${styles.fa_star}`}><AiFillStar /></i>
                <a className={`${styles.nav_link_menubar1} home-nav-dropdown-toggle dropdown-toggl`} aria-current="page" href="#">TRAVEL</a>
                <ul className={`${styles.home_nav_list} ${styles.home_nav_dropdown} dropdown-menu`} >
                  <li><a href="#">List</a></li>
                  <li><a href="#">Map</a></li>
                  <li><a href="#">Categories</a></li>
                  <li><a href="#">Slider</a></li>
                  <li className={`${styles.home_nav_menubar_inner} nav-item dropdown`}>
                    <a className={`${styles.nav_link_menubar_inner} home-nav-dropdown-toggle dropdown-toggl`} aria-current="page" href="#">Singles<i style={{fontSize:'14px'}} class="bi bi-chevron-right"></i> </a>
                    <ul className={`${styles.home_nav_list_inner} ${styles.home_nav_dropdown} dropdown-menu`} >
                      <li><a href="#">Single Standard</a></li>
                      <li><a href="#">Single Gallery</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className={`${styles.home_nav_menubar} nav-item dropdown`}>
                <a className={`${styles.nav_link_menubar1} home-nav-dropdown-toggle dropdown-toggl`} aria-current="page" href="#">BLOG</a>
                <ul className={`${styles.home_nav_list} ${styles.home_nav_dropdown} dropdown-menu`} >
                  <li className={router.pathname ==="/blog/bloglist" ? styles.active_url : ""}><Link href="/blog/bloglist">Blog List </Link></li>
                  <li className={router.pathname ==="/blog/blogcarousel" ? styles.active_url : ""}><Link href="/blog/blogcarousel">Blog Carousel</Link></li>
                  <li className={router.pathname ==="/blog/blogslider" ? styles.active_url : ""}><Link href="/blog/blogslider">Blog Slider</Link></li>
                  <li className={router.pathname ==="/blog/blogmasonry" ? styles.active_url : ""}><Link href="/blog/blogmasonry">Blog Masonry</Link></li>
                  <li className={router.pathname ==="/blog/blogalternating" ? styles.active_url : ""}><Link href="/blog/blogalternating">Blog Alternating</Link></li>
                  <li className={router.pathname ==="/blog/blogcustom" ? styles.active_url : ""}><Link href="/blog/blogcustom">Blog Custom</Link></li>
                  <li className={`${styles.home_nav_menubar_inner} nav-item dropdown`}>
                    <a className={`${styles.nav_link_menubar_inner} home-nav-dropdown-toggle dropdown-toggl`} aria-current="page" href="#">Standard<i style={{fontSize:'14px'}} class="bi bi-chevron-right"></i> </a>
                    <ul className={`${styles.home_nav_list_inner} ${styles.home_nav_dropdown} dropdown-menu`} >
                      <li className={router.pathname ==="/blog/blogstandardrightsidebar" ? styles.active_url : ""}><Link href="/blog/blogstandardrightsidebar">Right Sidebar</Link></li>
                      <li className={router.pathname ==="/blog/blogstandardwithoutsidebar" ? styles.active_url : ""}><Link href="/blog/blogstandardwithoutsidebar">Without Slidebar</Link></li>
                    </ul>
                  </li>
                  <li className={`${styles.home_nav_menubar_inner} nav-item dropdown`}>
                    <a className={`${styles.nav_link_menubar_inner} home-nav-dropdown-toggle dropdown-toggl`} aria-current="page" href="#">Post Singles<i style={{fontSize:'14px'}} class="bi bi-chevron-right"></i> </a>
                    <ul className={`${styles.home_nav_list_inner} ${styles.home_nav_dropdown} dropdown-menu`} >
                      <li className={router.pathname ==="/blog/blogpostsinglesstandard" ? styles.active_url : ""}><Link href="/blog/blogpostsinglesstandard">Standard</Link></li>
                      <li className={router.pathname ==="/blog/blogpostsinglescustom" ? styles.active_url : ""}><i className={`${styles.fa_star1}`}><AiFillStar /></i><Link href="/blog/blogpostsinglescustom">Custom</Link></li>
                      <li className={router.pathname ==="/blog/blogpostsinglesgallery" ? styles.active_url : ""}><Link href="/blog/blogpostsinglesgallery">Gallery</Link></li>
                      <li className={router.pathname ==="/blog/blogpostsingleslink" ? styles.active_url : ""}><Link href="/blog/blogpostsingleslink">Link</Link></li>
                      <li className={router.pathname ==="/blog/blogpostsinglesquote" ? styles.active_url : ""}><Link href="/blog/blogpostsinglesquote">Quote</Link></li>
                      <li className={router.pathname ==="/blog/blogpostsinglesaudio" ? styles.active_url : ""}><Link href="/blog/blogpostsinglesaudio">Audio</Link></li>
                      <li className={router.pathname ==="/blog/blogpostsinglesvideo" ? styles.active_url : ""}><Link href="/blog/blogpostsinglesvideo">Video</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className={`${styles.home_nav_menubar} nav-item dropdown`}>
                <a className={`${styles.nav_link_menubar1} home-nav-dropdown-toggle dropdown-toggl`} aria-current="page" href="#">SHOP</a>
                <ul className={`${styles.home_nav_list} ${styles.home_nav_dropdown} dropdown-menu`} >
                  <li><a href="#">Shop List</a></li>
                  <li><a href="#">Product Single</a></li>
                  <li className={`${styles.home_nav_menubar_inner} nav-item dropdown`}>
                    <a className={`${styles.nav_link_menubar_inner} home-nav-dropdown-toggle dropdown-toggl`} aria-current="page" href="#">Shop Pages</a>
                    <ul className={`${styles.home_nav_list_inner} ${styles.home_nav_dropdown} dropdown-menu`} >
                      <li><a href="#">Cart</a></li>
                      <li><a href="#">Checkout</a></li>
                      <li><a href="#">My Account</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>



            <div className={styles.social_links}>

              <a href="#"><FaInstagram /></a>
              <a href="#"><AiOutlineTwitter /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><BiLogoPinterest /></a>
              <a href="#"><AiFillYoutube /></a>
              <a href="#"><i>|</i></a>
            </div>


            <div className={`${styles.input_wrapper}`}>
              <button className={`${styles.search_icon}`} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px"
                  width="25px">
                  <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#959595"
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z">
                  </path>
                  <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#959595"
                    d="M22 22L20 20"></path>
                </svg>
              </button>
              <input placeholder="search.." className={`${styles.search_input}`} name="text" type="text" />
            </div>

          </div>
        </div>
      </nav>




      <div className="container-fluid">
        <nav className={`${styles.nav_item_link_13} navbar bg-body-tertiary fixed-top `}>
          <div className="d-flex justify-content-between mx-3 w-100">
            <a className={`${styles.navbar_brand_1} navbar-brand `} href="#"><img class="img-fluid"
              src="../Assets/Nav_bar_banner_img1.png" /></a>
            <button className="navbar-toggler p-0 m-0 border-0" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" onClick={handleOffcanvasDrawerOpen}>
              <span className="navbar-toggler-icon"></span>
            </button>

          </div>

          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" style={drawerStyle}
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header justify-content-end">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleOffcanvasDrawerClose}></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                <div className="accordion accordion-flush" id="accordionFlushExample2">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne2" aria-expanded="false"
                        aria-controls="flush-collapseOne"> <span>HOME</span>
                      </button>
                    </h2>
                    <div id="flush-collapseOne2" className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample2">
                      <li><a class="dropdown-item" href="#"><span>Provence</span></a></li>
                      <li><a class="dropdown-item" href="#">Madeira</a></li>
                      <li><a class="dropdown-item" href="#">Andalusia</a></li>
                      <li><a class="dropdown-item" href="#">Antigua</a></li>
                      <li><a class="dropdown-item" href="#">Baleares</a></li>
                      <li><a class="dropdown-item" href="#">Trentino</a></li>
                      <li><a class="dropdown-item" href="#">Cordoba</a></li>
                      <li><a class="dropdown-item" href="#">Siracusa</a></li>
                      <li><a class="dropdown-item" href="#">Malaga</a></li>
                      <li><a class="dropdown-item" href="#">Landing</a></li>
                    </div>

                  </div>
                </div>

                <div className="accordion accordion-flush" id="accordionFlushExample3">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne3" aria-expanded="false"
                        aria-controls="flush-collapseOne">PAGES
                      </button>
                    </h2>
                    <div id="flush-collapseOne3" className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample3">
                      <li><a class="dropdown-item" href="#">Who We Are</a></li>
                      <li><a class="dropdown-item" href="#">About Me</a></li>
                      <li><a class="dropdown-item" href="#">Destination Map</a></li>
                      <li><a class="dropdown-item" href="#">Get In Touch</a></li>
                      <li><a class="dropdown-item" href="#">FAQ Page</a></li>
                    </div>

                  </div>
                </div>

                <div className="accordion accordion-flush" id="accordionFlushExample4">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne4" aria-expanded="false"
                        aria-controls="flush-collapseOne">TRAVEL
                      </button>
                    </h2>
                    <div id="flush-collapseOne4" className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample4">
                      <li><a class="dropdown-item" href="#">List</a></li>
                      <li><a class="dropdown-item" href="#">Map</a></li>
                      <li><a class="dropdown-item" href="#">Categories</a></li>
                      <li><a class="dropdown-item" href="#">Slider</a></li>
                      <div className="accordion accordion-flush" id="accordionFlushExample5">
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne5" aria-expanded="false"
                              aria-controls="flush-collapseOne"> SINGLES
                            </button>
                          </h2>
                          <div id="flush-collapseOne5" className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample5">
                            <li><a class="dropdown-item" href="#">List</a></li>
                            <li><a class="dropdown-item" href="#">Map</a></li>
                            <li><a class="dropdown-item" href="#">Categories</a></li>
                            <li><a class="dropdown-item" href="#">Slider</a></li>

                          </div>

                        </div>
                      </div>

                    </div>

                  </div>
                </div>


                <div className="accordion accordion-flush" id="accordionFlushExample6">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne6" aria-expanded="false"
                        aria-controls="flush-collapseOne">BLOG
                      </button>
                    </h2>
                    <div id="flush-collapseOne6" className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample6">
                      <li><a class="dropdown-item" href="#">Blog List</a></li>
                      <li><a class="dropdown-item" href="#">Blog Carousel</a></li>
                      <li><a class="dropdown-item" href="#">Blog Slider</a></li>
                      <li><a class="dropdown-item" href="#">Blog Masonry</a></li>
                      <li><a class="dropdown-item" href="#">Blog Alternating</a></li>
                      <li><a class="dropdown-item" href="#">Blog Custom</a></li>
                      <div className="accordion accordion-flush" id="accordionFlushExample7">
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne7" aria-expanded="false"
                              aria-controls="flush-collapseOne"> STANDARD
                            </button>
                          </h2>
                          <div id="flush-collapseOne7" className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample7">
                            <li><a class="dropdown-item" href="#">List</a></li>
                            <li><a class="dropdown-item" href="#">Right Slidebar</a></li>
                            <li><a class="dropdown-item" href="#">Without Slidebar</a></li>

                          </div>
                          <div className="accordion accordion-flush" id="accordionFlushExample8">
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseOne8" aria-expanded="false"
                                  aria-controls="flush-collapseOne"> Post Singles
                                </button>
                              </h2>
                              <div id="flush-collapseOne8" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample8">
                                <li><a class="dropdown-item" href="#">Standard</a></li>
                                <li><a class="dropdown-item" href="#">Custom </a></li>
                                <li><a class="dropdown-item" href="#">Gallery</a></li>
                                <li><a class="dropdown-item" href="#">Link</a></li>
                                <li><a class="dropdown-item" href="#">Quote</a></li>
                                <li><a class="dropdown-item" href="#">Audio</a></li>
                                <li><a class="dropdown-item" href="#">Video</a></li>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                <div className="accordion accordion-flush" id="accordionFlushExample9">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne9" aria-expanded="false"
                        aria-controls="flush-collapseOne"> SHOP
                      </button>
                    </h2>
                    <div id="flush-collapseOne9" className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample9">
                      <li><a class="dropdown-item" href="#">Shop List</a></li>
                      <li><a class="dropdown-item" href="#">Product Single</a></li>
                      <div className="accordion accordion-flush" id="accordionFlushExample10">
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne10" aria-expanded="false"
                              aria-controls="flush-collapseOne"> SHOPPAGES
                            </button>
                          </h2>
                          <div id="flush-collapseOne10" className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample10">
                            <li><a class="dropdown-item" href="#">List</a></li>
                            <li><a class="dropdown-item" href="#">Cart</a></li>
                            <li><a class="dropdown-item" href="#">Checkout</a></li>
                            <li><a class="dropdown-item" href="#">MyAccount</a></li>
                          </div>

                        </div>
                      </div>

                    </div>

                  </div>
                </div>

              </ul>
            </div>

          </div>
        </nav>
      </div>




    </>
  )
}

export default Navbar;

