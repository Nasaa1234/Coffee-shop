import { Box, IconButton, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

export const ChatContainer = ({ currentUser }: { currentUser: any }) => {
  const [value, setValue] = useState();
  const Send = () => {
    console.log(value);
  };
  return (
    <Stack
      height="100%"
      justifyContent={"space-between"}
      alignItems={"center"}
      p={4}
    >
      <Stack alignItems={"center"} width="100%">
        <img src={currentUser?.image} width={150} />
        <Box sx={{ fontSize: 25, fontWeight: "bold" }}>
          {currentUser?.username}
        </Box>
      </Stack>
      <Stack>asdhfkasdf asdkjfasdf</Stack>
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
