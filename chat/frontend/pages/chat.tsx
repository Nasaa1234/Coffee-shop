import { Paper, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { User, ChatContainer } from "../components";
import { useData } from "../providers/DataContext";
import { io } from "socket.io-client";
import { instance } from "../utils/axios";

const Chat = () => {
  const [currentUser, setCurrentUser] = useState<any>();
  const { data, user } = useData();
  const socket = useRef<any>();
  useEffect(() => {
    console.log(currentUser);
    if (currentUser) {
      socket.current = io(instance);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  return (
    <Container>
      <Stack justifyContent={"center"}>
        <Paper
          elevation={3}
          sx={{
            mt: 6,
            height: 800,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Stack
            p={2}
            sx={{
              borderRight: "1px solid black",
            }}
          >
            <Stack gap={2}>
              {data?.users?.map((userOne: any, ind: number) => {
                return (
                  userOne._id != user?._id && (
                    <Stack
                      key={ind}
                      onClick={() => {
                        setCurrentUser(userOne);
                      }}
                    >
                      <User
                        username={userOne.username}
                        picture={userOne.image}
                        time="2 min"
                        lastMessage="lorem ipsum dolor sit amet, consectetur adipiscing"
                      />
                    </Stack>
                  )
                );
              })}
              <Stack
                sx={{
                  position: "absolute",
                  bottom: 140,
                }}
              >
                {user?.username}
              </Stack>
            </Stack>
          </Stack>
          <Stack width={"100%"}>
            {currentUser ? (
              <ChatContainer currentUser={currentUser} socket={socket} />
            ) : (
              <Stack alignItems={"center"}>
                <img src="https://raw.githubusercontent.com/koolkishan/chat-app-react-nodejs/master/public/src/assets/robot.gif" />
                <h1>Welcome to Chat</h1>
              </Stack>
            )}
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
};

export default Chat;
