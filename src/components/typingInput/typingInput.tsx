import React from "react";
import "./typingInput.css";

interface TypingInputProps {}

export const TypingInput = ({}: TypingInputProps) => {
  return (
      <input type={"text"} className="typing-input"/>
  );
};
