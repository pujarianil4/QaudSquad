import { Button } from '@material-ui/core';
import React from 'react';
import styles from "./Welcome.module.css";
const Welcome = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>

            <h1>Find Your Perfect Online Class  </h1>
             <Button variant="contained" >Start</Button>
            </div>
            <div className={styles.image}>
                <img src="code.png" alt="" />
            </div>
        </div>
    );
};

export default Welcome;