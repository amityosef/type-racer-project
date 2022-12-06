import React from "react";
import { v4 } from "uuid";
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
          return <div key={v4()} className="word correct">{word}</div>
        } else if (index === currWordIndex && isCurrWordwrong) {
          return <div key={v4()} className="word wrong">{word}</div>
        }
        return <div key={v4()} className="word">{word}</div>
      })}
    </div>
  </div>;
};
