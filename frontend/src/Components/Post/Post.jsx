import { Button, Paper } from "@material-ui/core";
import React from "react";
import styles from "./Post.module.css";
const Post = () => {
  return (
    <div>
      <Paper className={styles.post}>
        <div className={styles.userinfo}>
          <div className={styles.user}>
            <div className={styles.avatar}>A</div>
            <div className={styles.userName}>
              <h2>Anil Pujari</h2>
              <p>Begginner</p>
            </div>
          </div>
          <div className={styles.live}>
            <h4>
              <span>Live</span> at 2:00 PM
            </h4>
          </div>
        </div>
        <div  className={styles.description}>
          <h1>Learning React ans Redux</h1>
          <h3>
           Category:  <span>FrontEnd</span>
          </h3>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad qui
           
          </p>
          <img
            src="https://images.unsplash.com/photo-1529603992250-a55acb77d146?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnQlMjBlbmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <Button className={styles.button} variant="contained" color="primary">Join Event</Button>
      </Paper>
    </div>
  );
};

export default Post;
