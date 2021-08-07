import React, { useState, useContext } from "react";
import UseSocket from "../../Hooks/UseSocket";
import styles from "./Home.module.css";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import SocketContext from "../../Context/SocketContext";
import { useHistory } from "react-router-dom";
import Welcome from "../../Components/Welcome/Welcome";
export const Home = () => {
  const [username, setUsername] = useState("");
  const [group, setGroup] = useState("JavaSript");
  const socket = useContext(SocketContext);
  const history = useHistory();
  const joinGroupSubmitHandler = (e) => {
    socket.emit("joinGroup", { username, group });
    history.push({
      pathname: "/chat",
      state: { username, group },
    });
    console.log(group, username);
  };

  // const [setGroup,setUsername,joinGroupSubmitHandler] =UseSocket()
  const [open, setOpen] = useState(false);

  const handleCard = () => {
    setOpen(true);
    setGroup("myGroup");
  };
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Paper>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />

          <Button
            onClick={joinGroupSubmitHandler}
            varient="contained"
            color="primary"
          >
            Join Stream
          </Button>
        </Paper>
      </Modal>
      
      <div className={styles.home}>
         <Welcome/>
      </div>
    </>
  );
};
