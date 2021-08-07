import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./Navbar.module.css";
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

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
            <h5 className={styles.logo}> <span>C</span>ode <span>S</span>treamer</h5>
          <div className={styles.navbar}>
            <div className={styles.menu}>
              <Typography variant="h6" className={classes.title}>
                Home
              </Typography>
              <Typography variant="h6" className={classes.title}>
                Events
              </Typography>
            </div>
            <div className={styles.login}>
            <Button color="inherit">Login</Button>

            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
