import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
import { UserLogOut } from "../../Redux/AuthReducer/AuthAction";
import {useHistory} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
   const user=useSelector((state)=> state.auth.user)
   const [show,setShow]=useState({})
 const dispatch=useDispatch()
 const history= useHistory()
   const handleLogOut=()=>{
           dispatch(UserLogOut())
          
   }
   

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
            <h5 className={styles.logo}> <span>C</span>ode <span>S</span>treamer</h5>
          <div className={styles.navbar}>
            <div className={styles.menu}>
              <Typography onClick={()=>history.push("/")} variant="h6" className={classes.title}>
                Home
              </Typography>
              <Typography variant="h6" className={classes.title}>
                Events
              </Typography>
            </div>
            <div className={styles.login}>
              {
                user? <div onMouseEnter={()=>setShow({display:"block"})} onMouseLeave={()=>setShow({})} className={styles.user}>
                  <Button color="inherit">{user?.name}</Button>
                  <div style={show} className={styles.user_profile}>
                    <Paper>
                      <h5>PROFILE</h5>
                      <h5 onClick={handleLogOut}>LOG OUT</h5>
                    </Paper>

                  </div>
                </div> :   <Button onClick={()=>history.push("/signin")} color="inherit">Login</Button>
              }
         

            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
