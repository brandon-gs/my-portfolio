import { GitHub } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

const GithubIcon = () => {
  return (
    <Box
      position="fixed"
      zIndex={1000}
      right={16}
      bottom={16}
      bgcolor={"black"}
      color="white"
      width={40}
      height={40}
      display={{ xs: "none", sm: "flex" }}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={40}
      padding={3}
      style={{ cursor: "pointer" }}
      role="button"
      component={"a"}
      target="_blank"
      href="https://github.com/brandon-gs"
    >
      <GitHub color="inherit" fontSize="large" />
    </Box>
  );
};

export default GithubIcon;
