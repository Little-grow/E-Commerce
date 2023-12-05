/* eslint-disable no-unused-vars */
import { Box, Container, Link, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from 'react'

function Hero() {
  return (
    <Container sx={{ mt: 2.5, display: "flex", alignItems: "center" }}>
      <Box flexGrow={1} sx={{ border: "red 1px solid" }}>
        slider
      </Box>
      <Box>
        <Box sx={{ position: "relative" }}>
          <img src="src\image\hero\t-shirts-react-ecomerce-dev-ali-youtube-channel\banner-17.jpg" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              left: "30px",
              transform: "translateY(-50%)",
            }}
          >
            <Typography variant="body1" sx={{ color: "#858585" }}>
              NEW ARRIVALS
            </Typography>
            <Typography variant="body1" sx={{ color: "#000000", mt: 1 }}>
              SUMMER
            </Typography>
            <Typography variant="body1" sx={{ color: "#000000" }}>
              SALE 20% OFF
            </Typography>
            <Link sx={{display: "flex", alignItems: "center"}}>Shop now
            <ArrowForwardIcon sx={{fontSize: "5px"}} />
            </Link>
          </Stack>
        </Box>
        <Box>
          <img
            src="src\image\hero\t-shirts-react-ecomerce-dev-ali-youtube-channel\banner-16.jpg"
            alt=""
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Hero
