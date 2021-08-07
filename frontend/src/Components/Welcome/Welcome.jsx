import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import styles from "./Welcome.module.css";
import TextField from '@material-ui/core/TextField';
import {useDispatch,useSelector} from "react-redux"
import {GetLiveCardsApi,PostLiveCardsApi} from "../../Redux/AuthReducer/AuthAction"
const Welcome = () => {
    const user=useSelector((state)=>state.auth.user)
    let init={
        title: "",
        description: "",
        user: user?._id,
        category: "",
        startFrom : "",
        level: "",
        twitchUserName: user?.twitch ,
        imageURL:""   
    }
    const dispatch= useDispatch()
    const [input,setInput]=useState(init)
const [show,setShow]=useState(false)

    const handleInput=(e)=>{
        const {name,value}=e.target

        let data={
            ...input,
            [name]:value
        }
        setInput(data)
        console.log(data);
    }

    const handleModel=()=>{
          if(user){
              setShow(true)
          }else{
              alert("User not Logged In !")
          }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(PostLiveCardsApi(input))
    }

    React.useEffect(()=>{
        dispatch(GetLiveCardsApi())
    })


    return (
        <>
        <Modal 
            open={show}
            onClose={() => setShow(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Paper className={styles.model_form}>
               
                <form action="#" >
               <input onChange={handleInput} type="text" name="title" placeholder="Title" />
     
                 <input onChange={handleInput} list="category"  name="category" placeholder="Category e.g FrondEnd,BackEnd"/>
                 <datalist id="category"> 
                 <option value="FrontEnd"/>
                 <option value="BackEnd"/>
                 <option value="DSA"/>
                 <option value="JavaScript"/>
                 </datalist>
                 <input onChange={handleInput} list="level"  name="level" placeholder="Level e.g Begginner"/>
                 <datalist id="level"> 
                 <option value="Bigginner"/>
                 <option value="Medium"/>
                 <option value="Advance"/>
              
                 </datalist>

                 <input onChange={handleInput} type="text" name="imageURL" placeholder="Post Image URL" />
                 <input onChange={handleInput} type="time" name="startFrom" />

                  <textarea onChange={handleInput} rows="10" style={{width:"100%"}}  name="description" placeholder="Description"/>

                  <Button onClick={handleSubmit} fullWidth variant="contained" color="primary">POST</Button>
                </form>
            </Paper>

        </Modal>
        <div className={styles.container}>
            <div className={styles.title}>

            <h1>Find Your Perfect Online Class  </h1>
             <Button onClick={()=>handleModel()} variant="contained" >Go Live</Button>
            </div>
            <div className={styles.image}>
            <img src="Programming1.gif" autoPlay></img>
            </div>
        </div>
     
    </>
  );
};

export default Welcome;
