import React from "react";
import styled from "styled-components";
import Stream from "../Stream/Stream";
import ReactLivestream from "react-livestream";
export const VideoStream = () => {
  let key = process.env.REACT_APP_STREAM_KEY;
  // console.log(key);
  return (
    <>
      <MainCont>
        <VideoCont>
          <VideoPlayer>
            <iframe src={key} frameborder="0" allowfullscreen="true" scrolling="no" muted></iframe>
          </VideoPlayer>
          <Description>
            <h2>Learning React and Redux</h2>
            <p>Beginner</p>
          </Description>
        </VideoCont>
        <ChatCont>
          <Stream />
        </ChatCont>
      </MainCont>
    </>
  );
};

//styled-components

const MainCont = styled.div`
  margin: auto;
  width: 95vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  h2,
  h1,
  p {
    margin: 0;
    padding: 0;
  }
`;

const VideoCont = styled.div`
  width: 65%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChatCont = styled.div`
  width: 35%;
  height: 80%;
  margin-top: 2%;
`;

const VideoPlayer = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cec4c465;
  border-radius: 10px;
  box-shadow: 0px 0px 20px #5050509f;
  iframe {
    width: 95%;
    height: 95%;
    border-radius: 10px;
    border: 1px solid black;
  }
`;

const Description = styled.div`
  width: 80%;
  height: 20%;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 0px 0px 20px #706f6f9f;
  margin-top: 3%;
  h2 {
    font-weight: 500;
    margin-left: 5%;
    margin-top: 2%;
  }
  p {
    font-weight: 500;
    margin-left: 5%;
    margin-top: 2%;
  }
`;
