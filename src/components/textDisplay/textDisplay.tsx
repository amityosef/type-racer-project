import { Box } from "@mui/system";
import React, { useMemo } from "react";

interface TextDisplayProps {
  text: string;
  isCurrWordwrong: boolean;
  currWordIndex: number;
}

export const TextDisplay = ({ text, isCurrWordwrong, currWordIndex }: TextDisplayProps) => {

  const setWordColor = (index: number) => useMemo(() => {
    if (index < currWordIndex) {
      return '#00f51c';
    } else if (index === currWordIndex && isCurrWordwrong) {
      return 'red';
    }
    return 'black';
  }, [isCurrWordwrong, currWordIndex])



  return <Box
    sx={{
      width: '85%',
      height: '35%',
      direction: 'rtl',
      backgroundColor: 'transparent',
      borderRadius: '1rem',
      boxShadow: '0px 1px 21px 8px #ccc',
      margin: '2rem',
      padding: '2rem',
      fontize: 'large'
    }}>

    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      height: '100%'
    }}>
      {text.split(' ').map((word, index) => {
        let color = setWordColor(index);
        return <Box key={index} sx={{
          margin: '0.2rem',
          color
        }}>
          {word}
        </Box>
      })}

    </Box>
  </Box>
};
