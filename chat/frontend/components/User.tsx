import { Box, Stack } from "@mui/material";
import React from "react";

export const User = (props: {
  username: string;
  picture: string;
  lastMessage: string;
  time: string;
}) => {
  const { username, picture, lastMessage, time } = props;
  return (
    <Stack
      flexDirection={"row"}
      gap={2}
      sx={{
        border: "1px solid black",
        borderRadius: 5,
        width: 400,
        p: 1,
        cursor: "pointer",
      }}
    >
      <Box>
        <img src={picture} alt="" width={60} />
      </Box>
      <Stack justifyContent={"center"}>
        <Stack flexDirection={"row"} justifyContent="space-between">
          <Box sx={{ fontWeight: "bold" }}>{username}</Box>
          <Box>{time}</Box>
        </Stack>
        <Box>{lastMessage.slice(0, 35)}..</Box>
      </Stack>
    </Stack>
  );
};
