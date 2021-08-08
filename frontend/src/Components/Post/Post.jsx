import { Button, Paper } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Post.module.css";
import { Link, useHistory } from "react-router-dom";

const Post = ({ item }) => {
  const { category, description, level, startFrom, title, user, twitchUserName, _id } = item;
  const [author, setAuthor] = useState("");
  const history = useHistory();
  console.log(_id);
  function findUser(user) {
    axios
      .get(`http://localhost:2244/users/${user}`)
      .then((res) => {
        // console.log(res.data.post)
        setAuthor(res.data.post);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleJoin = () => {
    history.push(`/room/${user}`);
  };

  useEffect(() => {
    findUser(user);
  }, []);

  return (
    <Link style={{ textDecoration: "none" }} to={`/videostream/${_id}`}>
      <div>
        <Paper className={styles.post}>
          <div className={styles.userinfo}>
            <div className={styles.user}>
              <div className={styles.avatar}>A</div>
              <div className={styles.userName}>
                <h2>{author.name}</h2>
                <p>{level}</p>
              </div>
            </div>
            <div className={styles.live}>
              <h4>
                <span>Live</span>
                {` At ${startFrom}`}
              </h4>
            </div>
          </div>
          <div className={styles.description}>
            <h1>{title}</h1>
            <h3>
              Category: <span>{category}</span>
            </h3>

            <p>{description}</p>
            <img
              src="https://images.unsplash.com/photo-1529603992250-a55acb77d146?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnQlMjBlbmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <Button onClick={handleJoin} className={styles.button} variant="contained" color="primary">
            Join Event
          </Button>
        </Paper>
      </div>
    </Link>
  );
};

export default Post;
