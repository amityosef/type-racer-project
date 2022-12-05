import React from "react";
import "./textDisplay.css";

interface TextDisplayProps {
  text: string;
}

export const TextDisplay = ({ text }: TextDisplayProps) => {
  return <div className="display-text">{text}</div>;
};
