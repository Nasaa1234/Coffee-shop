import * as React from "react";
import { AppBar, DrawerHeader } from "./Styles";
import {
  Toolbar,
  IconButton,
  CssBaseline,
  Typography,
  Box,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import router from "next/router";

export const LeftBar = ({ children, authPage }: any) => {
  const [user, setUser] = React.useState<any>("");
  React.useEffect(() => {
    setUser(localStorage.getItem("name"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof window !== "undefined" ? localStorage.getItem("name") : null]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack>
      <CssBaseline />
      {!authPage && (
        <AppBar position="fixed">
          <Toolbar>
            <Stack
              flexDirection={"row"}
              justifyContent="space-around"
              width={"100vw"}
              alignItems="center"
            >
              <Typography variant="h6" noWrap component="div">
                Chat
              </Typography>
              {user ? (
                <Stack>
                  <Stack flexDirection={"row"} alignItems="center">
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                      sx={{
                        display: "flex",
                        gap: 4,
                      }}
                    >
                      <AccountCircle />
                    </IconButton>
                    <Typography>{user && user}</Typography>
                  </Stack>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        localStorage.removeItem("name");
                        localStorage.removeItem("token");
                      }}
                    >
                      Log Out
                    </MenuItem>
                  </Menu>
                </Stack>
              ) : (
                <Box
                  onClick={() => router.push("/login")}
                  sx={{ cursor: "pointer" }}
                >
                  Login
                </Box>
              )}
            </Stack>
          </Toolbar>
        </AppBar>
      )}

      <DrawerHeader />

      {children}
    </Stack>
  );
};
