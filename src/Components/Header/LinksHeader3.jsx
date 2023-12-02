/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// @ts-nocheck
import { ExpandMore } from "@mui/icons-material";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

function LinksHeader3({ title }) {
  return (
    <div>
      <Box
        sx={{
          ":hover .show-links": { display: "block" },
          position: "relative",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Typography variant="body1">{title}</Typography>
        <ExpandMore />

        <Box
          className="show-links"
          sx={{
            position: "absolute",
            top: "100%",
            left: "50%",
            minWidth: "170px",
            transform: "translateX(-50%)",
            display: "none",
          }}
        >
          <Paper sx={{ mt: 2 }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ p: 0, px: 1 }}>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem
                disablePadding
                sx={{
                  position: "relative",
                  ":hover .hone-hover": { display: "block" },
                }}
              >
                <ListItemButton sx={{ p: 0, px: 1 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": { fontSize: "15px" },
                      ":hover .hone-hover": { display: "block" },
                    }}
                    primary="Products"
                  />
                  <KeyboardArrowRightTwoToneIcon />
                </ListItemButton>
                <Box
                  className="hone-hover"
                  sx={{
                    position: "absolute",
                    top: "-10px",
                    left: "100%",
                    display: "none",
                    minWidth: "150px",
                  }}
                >
                  <Paper>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton sx={{ p: 0, px: 1 }}>
                            <ListItemText primary="Add Product" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{ p: 0, px: 1 }}
                            component="a"
                            href="#simple-list"
                          >
                            <ListItemText primary="Edit Product" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ p: 0, px: 1 }}>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Orders"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ p: 0, px: 1 }}>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Paper>
        </Box>
      </Box>
    </div>
  );
}

export default LinksHeader3;
