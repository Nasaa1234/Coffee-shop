import { Box, IconButton, Stack } from "@mui/material";
import React, { useEffect, useRef } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const Message = ({
  messageOne,
  user,
  currentUser,
  ind,
  message,
}: {
  messageOne: any;
  user: any;
  currentUser: any;
  ind: number;
  message: string;
}) => {
  const messageRef = useRef<any>();
  const scrollRef = useRef<any>();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <Stack
      ref={scrollRef}
      key={ind}
      alignItems={
        messageOne.sender == user.username ? "flex-end" : "flex-start"
      }
      flexDirection={"column"}
    >
      {messageOne.users?.includes(currentUser?._id) && (
        <Stack
          flexDirection={
            messageOne.sender == user.username ? "row-reverse" : "row"
          }
          onMouseOut={() => (messageRef.current.style.display = "none")}
          onMouseOver={() => (messageRef.current.style.display = "block")}
        >
          <Box
            sx={{
              border: "2px solid gray",
              borderRadius: 10,
              padding: 1,
              display: "flex",
              justifyContent: "start",
              cursor: "pointer",
            }}
          >
            {messageOne.message}
          </Box>
          <IconButton
            ref={messageRef}
            sx={{
              display: "none",
            }}
          >
            <MoreHorizIcon />
          </IconButton>
        </Stack>
      )}
    </Stack>
  );
};
