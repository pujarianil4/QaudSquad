import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import styles from "./Welcome.module.css";
const Welcome = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Modal
        open={show}
        onClose={() => setShow(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Paper>
          <form action="#"></form>
        </Paper>
      </Modal>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Find Your Perfect Online Class </h1>
          <Button onClick={() => setShow(true)} variant="contained">
            Start
          </Button>
        </div>
        <div className={styles.image}>
          {/* <img src="code.png" alt="" /> */}
          <img src="Programming1.gif" autoPlay></img>
        </div>
      </div>
    </>
  );
};

export default Welcome;
