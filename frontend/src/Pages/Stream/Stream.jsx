import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SocketContext from "../../Context/SocketContext";
import SendIcon from "@material-ui/icons/Send";
const Stream = () => {
  const [groupUsers, setGroupUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  let [doubt, setDoubt] = useState(false);
  let [mistake, setMistake] = useState(false);
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
        <MessagesCont className="chat-nessages">
          {messages.map((message) => (
            <Message style={{ backgroundColor: `${doubt ? "blue" : mistake ? "red" : ""}` }}>
              <UserName>{message.username}: </UserName> <Msg>{message.text}</Msg> <Time>{message.time}</Time>
              {/* sent on */}
              {/* <div></div> */}
            </Message>
          ))}
        </MessagesCont>
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
              <SendIcon color="primary" fontSize="small" />
            </button>
          </form>
        </ChatInput>
      </>
      <BtnCont>
        <button onClick={() => setDoubt(!doubt)} style={{ backgroundColor: `${doubt ? "blue" : ""}` }}>
          Doubt
        </button>
        <button onClick={() => setMistake(!mistake)} style={{ backgroundColor: `${mistake ? "red" : ""}` }}>
          Mistake
        </button>
      </BtnCont>
    </ChatCont>
  );
};

export default Stream;

//styled-components

const ChatCont = styled.div`
  width: 95%auto;
  height: 90%;
  box-shadow: 0px 0px 20px #5050509f;
  border-radius: 20px;
  padding: 10px;
`;

const ChatInput = styled.div`
  width: 100%;
  height: 10%;
  border-top: 1px solid lightgray;
  form {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    flex-direction: row;
    background-color: transparent;
    input {
      width: 80%;
      height: 60%;
      border-radius: 30px;
      outline: none;
      border: 3px solid gray;
      padding-left: 10px;
    }
    button {
      width: 9%;
      height: 78%;
      border: 3px solid gray;
      outline: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background-color: gray;
        * {
          color: white;
        }
      }
    }
  }
`;

const MessagesCont = styled.div`
  width: 100%;
  height: 90%;
  overflow: overlay;
`;

const Message = styled.div`
  width: 98%;
  min-height: 40px;
  border: 1px solid gray;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
`;

const UserName = styled.div`
  width: 120px;
  margin-left: 10px;
  font-size: 14px;
`;

const Msg = styled.div`
  font-size: 14px;
  width: 280px;
  margin-left: 15px;
`;
const Time = styled.div`
  width: 50px;
  margin-right: 5px;
  color: gray;
  font-size: 10px;
`;

const BtnCont = styled.div`
  width: 60%;
  height: 50px;
  margin: auto;
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    width: 40%;
    height: 70%;
    border-radius: 10px;
    border: 1px solid gray;
  }
`;
