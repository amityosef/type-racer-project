import { Box } from "@mui/material";
import React from "react";
import { TypingComponent } from "../../components/typingComponent/typingComponent";

export const HomePage = () => {
  return (
    <Box sx={{
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent'
    }}>
      <TypingComponent />
    </Box>
  );
};
