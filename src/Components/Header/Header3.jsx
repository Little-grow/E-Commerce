/* eslint-disable no-unused-vars */
import { Box, Container, Typography, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WindowIcon from "@mui/icons-material/Window";
import { useState } from "react";

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
  return (
    <Container>
      <Button
        // @ts-ignore
        sx={{ width: "200px",color: theme.palette.text.secondary, bgcolor: theme.palette.myColor.main, px: "7px", py: "0px" }}
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Container>
  );
};

export default Header3;
