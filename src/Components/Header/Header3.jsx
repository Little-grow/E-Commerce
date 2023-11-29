/* eslint-disable no-unused-vars */
import { Box, Container, Typography, useTheme, IconButton, ListItemIcon, ListItemText, Drawer } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WindowIcon from "@mui/icons-material/Window";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
import { Close, ContentCut } from "@mui/icons-material";

const Header3 = () => {
    const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  











  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
















  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          // @ts-ignore
          sx={{
            width: "200px",
            color: theme.palette.text.secondary,
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            px: "7px",
            py: "0px",
          }}
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <WindowIcon />
          <Typography
            variant="body1"
            sx={{ textTransform: "capitalize", p: "0px", m: 1 }}
          >
            Dashboard
          </Typography>
          <Box flexGrow={1} />
          <ExpandMoreIcon />
        </Button>
        <Menu
          sx={{ top: "35px", ".MuiPaper-root": { width: 200 } }}
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <TwoWheelerOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopWindowsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LibraryBooksIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      <IconButton>
        <MenuIcon onClick={toggleDrawer("top", true)} />
      </IconButton>
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{".MuiPaper-root": {height: "100%"}}}
      >
        dfgfdgffd
        <Box>
            <IconButton aria-label="" onClick={toggleDrawer("top", false)}>
                <Close />
            </IconButton>
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
