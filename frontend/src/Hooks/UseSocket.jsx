
import React, { useContext, useState } from 'react'
import SocketContext from "../Context/SocketContext"
import { useHistory } from 'react-router-dom';

const UseSocket = () => {
    const [username,setUsername]=useState("")
    const [group,setGroup] = useState("")
    const socket =useContext(SocketContext)
    const history =useHistory()
    const joinGroupSubmitHandler=(e)=>{
     
        socket.emit("joinGroup",{username,group})
        history.push({
            pathname:"/chat",
            state:{username,group}
        })

        console.log(group,username);
    }

    return [setUsername,setGroup,joinGroupSubmitHandler]
};

export default UseSocket;