/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useData } from "../providers/DataContext";
import axios from "axios";
import { GetMessageRoute } from "../utils/axios";
import { Message } from "./Message";

export const ChatContainer = ({
  currentUser,
  socket,
}: {
  currentUser: any;
  socket: any;
}) => {
  const { user, SendMessage, succes } = useData();
  const [message, setMessage] = useState<any>();
  const [value, setValue] = useState<any>("");
  const [arrivalMessage, setArrivalMessage] = useState<any>(null);
  useEffect(() => {
    axios
      .post(GetMessageRoute, {
        from: user?._id,
        to: currentUser._id,
      })
      .then((el: any) => {
        setMessage(el.data.messages);
      });
  }, [succes, user, currentUser]);

  const Send = () => {
    socket.current.emit("send-msg", {
      to: currentUser._id,
      from: user._id,
      value,
    });
    setValue("");
    SendMessage(user, currentUser, value);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg: any) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessage((prev: any) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  return (
    <Stack height="100%" alignItems={"center"} p={4}>
      <Stack alignItems={"center"} width="100%">
        <img src={currentUser?.image} width={150} />
        <Box sx={{ fontSize: 25, fontWeight: "bold" }}>
          {currentUser?.username}
        </Box>
      </Stack>
      <Stack
        height={500}
        sx={{
          overflow: "scroll",
        }}
        width="100%"
        flexDirection={"column"}
        gap={1}
      >
        {message?.map((messageOne: any, ind: number) => {
          return (
            <Message
              key={ind}
              messageOne={messageOne}
              ind={ind}
              user={user}
              message={message}
              currentUser={currentUser}
            />
          );
        })}
      </Stack>
      <Stack flexDirection={"row"} alignItems="center" gap={2}>
        <TextField
          sx={{ width: 300 }}
          label="Send message.."
          variant="outlined"
          placeholder="Send message.."
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
        />
        <IconButton onClick={Send}>
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
