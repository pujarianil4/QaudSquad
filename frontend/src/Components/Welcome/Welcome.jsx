import { Button} from '@material-ui/core';
import React, { useState } from 'react';
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import styles from "./Welcome.module.css";
import TextField from '@material-ui/core/TextField';
const Welcome = () => {
const [show,setShow]=useState(false)
    return (
        <>
        <Modal 
            open={show}
            onClose={() => setShow(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Paper className={styles.model_form}>
               
                <form action="#">
                <TextField id="outlined-basic" label="Title" fullWidth variant="outlined" />
                {/* <input list="browsers" name="browser" id="browser">
               <datalist id="browsers">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist> */}
                 
                 <input list="category"  name="Category" placeholder="Category e.g FrondEnd,BackEnd"/>
                 <datalist id="category"> 
                 <option value="FrontEnd"/>
                 <option value="BackEnd"/>
                 <option value="DSA"/>
                 <option value="JavaScript"/>
                 </datalist>
                 <input list="level"  name="level" placeholder="Level e.g Begginner"/>
                 <datalist id="level"> 
                 <option value="Bigginner"/>
                 <option value="Medium"/>
                 <option value="Advance"/>
              
                 </datalist>

                  <textarea rows="10" cols="75"  placeholder="Description"/>
                </form>
            </Paper>

        </Modal>
        <div className={styles.container}>
            <div className={styles.title}>

            <h1>Find Your Perfect Online Class  </h1>
             <Button onClick={()=>setShow(true)} variant="contained" >Start</Button>
            </div>
            <div className={styles.image}>
                <img src="code.png" alt="" />
            </div>
        </div>
        </>
    );
};

export default Welcome;
