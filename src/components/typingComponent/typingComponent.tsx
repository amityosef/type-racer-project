import React, { useCallback, useState } from "react";
import { SENTENCES_COUNT } from "../../common/consts";
import { sentences } from "../../common/sentences";
import { TextDisplay } from "../textDisplay/textDisplay";
import { TypingInput } from "../typingInput/typingInput";
import "./typingComponent.css";

interface TypingComponentProps { }

export const TypingComponent = ({ }: TypingComponentProps) => {
  const randomNumber = Math.floor(Math.random() * SENTENCES_COUNT)
  const [currSentence, setCurrSentence] = useState<string>(sentences[randomNumber]);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [iswrong, setIswrong] = useState<boolean>(false);

  const wordCheckFunction = useCallback((value: string) => {
    if (currSentence.split(' ')[wordIndex].trim() === value.trim()) {
      setWordIndex(wordIndex + 1);
      setIswrong(false);
      return true;
    }
    setIswrong(true);
    return false;
  }, [wordIndex]);

  return (
    <div className="typing-container">
      <TextDisplay text={currSentence} currWordIndex={wordIndex} isCurrWordwrong={iswrong} />
      <TypingInput wordCheckFunction={wordCheckFunction} />
    </div>
  );
};
