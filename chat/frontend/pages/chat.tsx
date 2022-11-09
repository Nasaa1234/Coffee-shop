import { Box, Paper, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { User, ChatContainer } from "../components";
import { useData } from "../providers/DataContext";

const Chat = () => {
  const [currentUser, setCurrentUser] = useState();
  const { data } = useData();
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
              {data?.users?.map((user: any, ind: number) => {
                return (
                  <Stack
                    key={ind}
                    onClick={() => {
                      setCurrentUser(user);
                    }}
                  >
                    <User
                      username={user.username}
                      picture={user.image}
                      time="2 min"
                      lastMessage="lorem ipsum dolor sit amet, consectetur adipiscing"
                    />
                  </Stack>
                );
              })}
              <Stack
                sx={{
                  position: "absolute",
                  bottom: 140,
                }}
              >
                nasaanasaa.070122@gmail.com
              </Stack>
            </Stack>
          </Stack>
          <Stack width={"100%"}>
            {currentUser ? (
              <ChatContainer currentUser={currentUser} />
            ) : (
              "welcome to the chat"
            )}
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
};

export default Chat;
