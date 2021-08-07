import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SocketContext from "../../Context/SocketContext";

const Stream = () => {
  const [groupUsers, setGroupUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  // const group= props.location.state.group
  // const username= props.location.state.username
  const socket = useContext(SocketContext);
  useEffect(() => {
    //Get group and users
    socket.on("groupUsers", ({ group, users }) => {
      outputUsers(users);
    });

    socket.on("message", (message) => {
      outputMessage(message);
    });
  });

  const outputUsers = (users) => {
    setGroupUsers(users);
  };
  const outputMessage = (message) => {
    let newMessages = messages;
    let finalMessages = newMessages.concat(message);
    setMessages(finalMessages);
  };
  const chatMessageSubmitHandler = (e) => {
    e.preventDefault();
    console.log(message);
    socket.emit("chatMessage", message);
  };

  //   const handleExit = ({ username, socketId, group }) => {
  //     socket.emit("userLeft", { username, socketId, group });
  //   };
  //   console.log(messages);
  return (
    <ChatCont>
      <>
        <div className="chat-sidebar">
          {/* <h3>
            <i className="fas fa-comments"></i> Group Name:{" "}
          </h3>
          <h2 id="roon-name">{"My group"}</h2>
          <h3>
            <i className="fas fa-users"></i> Users
          </h3> */}
          {/* <ul id="users">
            {groupUsers.map((user) => (
              <>
                <li>{user.username}</li>
                <button onClick={() => handleExit(user)}>Exit</button>
              </>
            ))}
          </ul> */}
        </div>
        <div className="chat-nessages">
          {messages.map((message) => (
            <div>
              <div>
                {message.username} sent on {message.time}
              </div>
              <div>{message.text}</div>
              <br></br>
            </div>
          ))}
        </div>
        <ChatInput className="chat-forn-container">
          <form id="chat-form" onSubmit={chatMessageSubmitHandler}>
            <input
              id="msg"
              type="text"
              placeholder="Enter Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn">
              <i className="fa fa-paper-plane"></i>
              Send
            </button>
          </form>
        </ChatInput>
      </>
    </ChatCont>
  );
};

export default Stream;

//styled-components

const ChatCont = styled.div`
  width: 95%auto;
  height: 90%;
  border: 1px solid black;
`;

const ChatInput = styled.div`
  width: 100%;
  height: 10%;
  border: 1px solid black;
  position: relative;
  top: 90%;
  form {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    input {
      width: 80%;
      height: 60%;
      border-radius: 30px;
    }
    button {
      width: 9%;
      height: 78%;
      border-radius: 50%;
    }
  }
`;
