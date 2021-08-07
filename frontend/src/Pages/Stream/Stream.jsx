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
  let [color, setColor] = useState([]);
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
    // console.log(message);
    socket.emit("chatMessage", message);
    if (doubt) {
      let p = {
        message: message,
        color: "#99ffff",
      };
      setColor([...color, p]);
    } else if (mistake) {
      let p = {
        message: message,
        color: "  #99ff99",
      };
      setColor([...color, p]);
    }
    setDoubt(false);
    setMistake(false);
    setMessage("");
  };
  console.log(color);

  //   const handleExit = ({ username, socketId, group }) => {
  //     socket.emit("userLeft", { username, socketId, group });
  //   };
  //   console.log(messages);

  return (
    <ChatCont>
      <>
        {/* <div className="chat-sidebar"></div> */}
        <MessagesCont className="chat-nessages">
          {messages.map((message, i) => (
            <Message color={color.map((item, i) => (item.message == message.text ? item.color : ""))} key={i + 1}>
              <UserName>{message.username}: </UserName> <Msg>{message.text}</Msg> <Time>{message.time}</Time>
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
        <button onClick={() => setDoubt(!doubt)} style={{ backgroundColor: `${doubt ? "#99ffff" : ""}` }}>
          Question
        </button>
        <button onClick={() => setMistake(!mistake)} style={{ backgroundColor: `${mistake ? "#99ff99" : ""}` }}>
          Suggestion
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
  box-shadow: 0px 0px 20px #0e72ed6c;
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
    input {
      width: 90%;
      height: 80%;
      border-radius: 30px;
      outline: none;
      border: 2px solid #0e72ed;
      padding-left: 10px;
      background-color: white;
    }
    button {
      width: 9%;
      height: 78%;
      border: 2px solid #0e72ed;
      outline: none;
      border-radius: 50%;
      margin-left: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      &:hover {
        background-color: gray;
        * {
          color: white;
          transition: 0.9s ease;
        }
      }
    }
  }
`;

const MessagesCont = styled.div`
  width: 100%;
  height: 90%;
  overflow: overlay;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.div`
  width: 98%;
  min-height: 35px;
  /* border: 1px solid ${(prop) => prop.color}; */
  border: 1px solid lightgray;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  background-color: ${(prop) => prop.color};
  /* background-color: #99ffff; */
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
    border: 1px solid #0e72ed;
    cursor: pointer;
    background-color: white;
    &:hover {
      transform: scale(1.1);
      transition: 0.5s ease;
    }
  }
`;
