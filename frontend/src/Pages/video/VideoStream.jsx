import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Stream from "../Stream/Stream";
export const VideoStream = () => {
  let [data, setData] = useState([]);
  const { pathname } = useLocation();
  let id = pathname.split("/")[2];

  const getData = () => {
    axios
      .get(`http://localhost:2244/posts/${id}`)
      .then((res) => {
        setData(res.data.post);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <MainCont>
        <VideoCont>
          <VideoPlayer>
            <iframe
              src={`https://player.twitch.tv/?channel=${data?.twitchUserName}&parent=localhost`}
              frameborder="0"
              allowfullscreen="true"
              scrolling="no"
              muted
            ></iframe>
          </VideoPlayer>
          <Description>
            <h2>{data?.title}</h2>
            <Category>
              <span>Category : </span>
              {data?.category}
            </Category>
            <Level>
              <span> Level : </span>
              {data?.level}
            </Level>
            <p>
              <span>Description : </span>
              {data?.description}
            </p>
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
  margin-top: 7px;
  margin-left: -1%;
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
  margin-top: 4%;
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
  background: linear-gradient(to right, #5190df, #b3d5ff);
  box-shadow: 0px 0px 20px #0e72ed6c;
  iframe {
    width: 95%;
    height: 90%;
    border-radius: 10px;
  }
`;

const Description = styled.div`
  width: 80%;
  min-height: 30%;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 0px 0px 20px #0e72ed6c;
  margin-top: 3%;
  h2 {
    font-weight: bold;
    margin-left: 5%;
    margin-top: 2%;
    font-size: 30px;
    letter-spacing: 1px;
    color: #00003d;
  }
  p {
    font-weight: 500;
    margin-left: 5%;
    margin-top: 0.5%;
    font-size: 15px;
    color: #2b2b2b;
  }
  span {
    color: #0e72ed;
  }
`;

const Category = styled.p`
  font-size: 15px;
  color: #2b2b2b;
`;
const Level = styled.p`
  color: #2b2b2b;
`;
