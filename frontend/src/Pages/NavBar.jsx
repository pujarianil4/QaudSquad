import React from 'react'
import styles from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navMain}>
                <h4>Code Streamer</h4>
                <div>About us</div>
                <div>Events</div>
            </div>
            <div className={styles.navOther}>
                <div>Sign in</div>
                <div>Register</div>
            </div>
        </div>
    )
}
