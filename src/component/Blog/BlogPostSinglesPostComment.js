import React from 'react'
import styles from '../../styles/Blog/BlogPostSinglesStandard.module.css'
const BlogPostSinglesPostComment = () => {
    return (
        <>
            <div className={styles.post_blog_single_contact}>
                <div className={styles.post_blog_single_contact_inner}>
                    <h3>post a comment </h3>
                </div>

                <div className={styles.contact_us_form}>

                    <form action="#">
                        <textarea style={{ marginBottom: "20px" }} className={styles.contact_name_textarea} name="message" placeholder="  Your comment..."></textarea>
                        <input style={{ marginBottom: "20px" }} className={styles.contact_name_input} type="name" placeholder="Your Name" required />
                        <input style={{ marginBottom: "20px" }} className={styles.contact_name_input} type="email" placeholder="Your Email" required />
                        <input style={{ marginBottom: "20px", marginRight: "0px" }} className={styles.contact_name_input} type="websit" placeholder="Websit" required />
                        <p>
                            <input className={styles.checkbox_submit} type="checkbox" value="yes" required />
                            <span style={{ marginLeft: "5px" }}>Save my name, email, and website in this browser for the next time I comment.</span>
                        </p>
                        <input style={{ width: "100px", height: "45px" }} className={styles.contact_submit_input} type="submit" value="submit" class="submit" required />
                    </form>

                </div>
            </div>
        </>
    )
}

export default BlogPostSinglesPostComment
