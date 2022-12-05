import React from "react";
import "./textDisplay.css";

interface TextDisplayProps {
  text: string;
  isCurrWordwrong: boolean;
  currWordIndex: number;
}

export const TextDisplay = ({ text, isCurrWordwrong, currWordIndex }: TextDisplayProps) => {
  return <div className="display-text">
    <div className="words-container">
      {text.split(' ').map((word, index) => {
        if (index < currWordIndex) {
          return <div className="word correct">{word}</div>
        } else if (index === currWordIndex && isCurrWordwrong) {
          return <div className="word wrong">{word}</div>
        }
        return <div className="word">{word}</div>
      })}
    </div>
  </div>;
};
