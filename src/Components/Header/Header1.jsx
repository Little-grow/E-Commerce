/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton, useTheme, Typography, Stack, Container } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const options = [
    "AR",
    "EN" 
];

const  Header1 = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
return (
  <Box
    sx={{
      backgroundColor: "#283445",
      py: "4px",
      borderBottomLeftRadius: "5px"
    }}
  >
  <Container>
    <Stack direction={"row"} alignItems={"center"}>
      <Typography
        variant="body1"
        sx={{
          mr: 2,
          p: "3px 10px",
          bgcolor: "#D23F57",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        Hot
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "12px",
          fontWeight: 300,
          color: "#fff",
        }}
      >
        free Express shoping
      </Typography>
      <Box flexGrow={1} />
      <div>
        {theme.palette.mode === "light" ? (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
          >
            <LightModeOutlined sx={{ color: "white" }} />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
          >
            <DarkModeOutlined sx={{ color: "white" }} />
          </IconButton>
        )}
      </div>
      <List component="nav" aria-label="Device settings" sx={{ m: 0, p: 0 }}>
        <ListItem
        sx={{px: 1}}
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            sx={{
              ".MuiTypography-root": { fontSize: "12px", color: "#fff" },
              "&:hover": { cursor: "pointer" },
            }}
            secondary={options[selectedIndex]}
          />
          <ExpandMoreIcon sx={{ fontSize: "16px", color: "#fff" }} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            sx={{ fontSize: "12px" }}
            key={option}
            // disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      <FacebookIcon
        sx={{
          fontSize: "16px",
          color: "#fff",
        }}
      />
      <InstagramIcon
        sx={{
          fontSize: "16px",
          color: "#fff",
          mx: 1,
        }}
      />
      <TwitterIcon
        sx={{
          fontSize: "16px",
          color: "#fff",
        }}
      />
    </Stack>
  </Container>
  </Box>
);
}

export default Header1;
