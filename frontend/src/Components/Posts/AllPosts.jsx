import { Grid } from '@material-ui/core';
import React from 'react';
import Post from '../Post/Post';
import styles from "./AllPosts.module.css"
const AllPosts = () => {
   
    return (
        <div className={styles.container}>
            <div className={styles.filter} >
             <select name="" id="">
                 <option value="">---Filter By Category---</option>
             </select>
             <select name="" id="">
                 <option value="">---Filter By Level---</option>
             </select>
            </div>
            <div className={styles.all_posts}>
                    <Post/>
                    <Post/>
            </div>
        </div>
    );
};

export default AllPosts;