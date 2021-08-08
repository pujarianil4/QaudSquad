import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Post from "../Post/Post";
import styles from "./AllPosts.module.css";
const AllPosts = () => {
   const cards = useSelector(state => state.auth.liveCards)
   
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
                   {cards.length>0&&cards?.map(item => (
                       <Post  item={item}/>
                   ))}
            </div>
        </div>
    );
};

export default AllPosts;
