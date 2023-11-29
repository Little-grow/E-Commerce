/* eslint-disable no-unused-vars */
import { Badge, Box, Container, IconButton, InputBase, Stack, Typography, alpha, styled, useTheme } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const options = [
    "ALL catigories ",
    "CAR ",
    "CLOTHES",
    "Hide ",
];

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    flexGrow: 0.2,
    borderRadius: theme.shape.borderRadius,
    border: "1px #777 solid",
    "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    minWidth: "250px",
    [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
    width: "20ch",
    },
    },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
"& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
},
}));

const Header2 = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
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

    const theme = useTheme()
return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
    <Stack alignItems={"center"}>
        <ShoppingCartIcon />
        <Typography variant="body1">E-Commerce</Typography>
    </Stack>

    <Search
        sx={{
        borderRadius: "25px",
        display: "flex",
        justifyContent: "space-between",
        overflow: "hidden",
        }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        />
        <List
        component="nav"
        aria-label="Device settings"
          // @ts-ignore
        sx={{ bgcolor: theme.palette.catigory.main, p: "0px" }}
        >
        <ListItem
        sx={{width: "150px", textAlign: "center", "&:hover": {cursor: "pointer"}}}
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
        >
            <ListItemText secondary={options[selectedIndex]} />
            <ExpandMoreIcon sx={{ fontSize: "20px", color: "#6c6c6c" }} />
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
            sx={{fontSize: "13px"}}
            key={option}
            //   disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
            >
            {option}
            </MenuItem>
        ))}
        </Menu>
    </Search>

    <Box>
        <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartIcon />
        </StyledBadge>
        </IconButton>
        <IconButton>
        <Person2OutlinedIcon />
        </IconButton>
      </Box>
    </Container>
  );
}

export default Header2
