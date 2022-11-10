import React, { useEffect, useState } from "react";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useData } from "../providers/DataContext";
import axios from "axios";
import { GetMessageRoute } from "../utils/axios";

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
  const { _id } = currentUser;

  useEffect(() => {
    axios
      .post(GetMessageRoute, {
        from: user._id,
        to: _id,
      })
      .then((el: any) => {
        setMessage(el.data.messages);
      })
      .catch((el) => console.log(el));
  }, [succes, user, _id]);

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg: any) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);
  //nasaa ==> 636b849d719ae882816e9211
  //admin ==> 636b9168719ae882816e9216

  useEffect(() => {
    arrivalMessage && setMessage((prev: any) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  const Send = () => {
    socket.current.emit("send-msg", {
      to: user._id,
      from: _id,
      msg: value,
    });
    SendMessage(user._id, _id, value);
    const msgs = [...message];
    msgs.push({ fromSelf: true, message: value });
    setMessage(msgs);
  };
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
      >
        {message?.map((messageOne: any, ind: number) => {
          console.log(messageOne.users, currentUser._id);
          return (
            <Box key={ind}>
              {messageOne.users?.includes(currentUser?._id) &&
                messageOne.message}
            </Box>
          );
        })}
      </Stack>
      <Stack flexDirection={"row"} alignItems="center" gap={2}>
        <TextField
          sx={{ width: 300 }}
          label="Send message.."
          variant="outlined"
          onChange={(e: any) => setValue(e.target.value)}
        />
        <IconButton onClick={Send}>
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
