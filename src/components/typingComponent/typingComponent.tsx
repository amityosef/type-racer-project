import React from "react";
import { TextDisplay } from "../textDisplay/textDisplay";
import { TypingInput } from "../typingInput/typingInput";
import "./typingComponent.css";

interface TypingComponentProps {}

export const TypingComponent = ({}: TypingComponentProps) => {
  return (
    <div className="typing-container">
      <TextDisplay text={"kkk"} />
      <TypingInput />
    </div>
  );
};
