import React from 'react'
import { Events } from '../Components/Events/Events'
import styles from "./Home.module.css"

export const Home = () => {
    return (
        <div className={styles.home}>
            <main>
                <div>
                    Coding Classes Live Online
                </div>
                <div>Find the perfect Coding class for you available live online</div>
                <button>Create Room Now</button>
            </main>
            <Events/>
        </div>
    )
}
