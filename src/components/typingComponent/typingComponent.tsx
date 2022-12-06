import React, { useCallback, useEffect, useState } from "react";
import { ROUND_TIME, SENTENCES_COUNT } from "../../common/consts";
import { sentences } from "../../common/sentences";
import { ResultService } from "../../services/result.service";
import { Clock } from "../clock/clock";
import { Leadboards } from "../leadboards/leadboards";
import { TextDisplay } from "../textDisplay/textDisplay";
import { TypingInput } from "../typingInput/typingInput";
import "./typingComponent.css";

interface TypingComponentProps { }

export const TypingComponent = ({ }: TypingComponentProps) => {
  const randomNumber = Math.floor(Math.random() * SENTENCES_COUNT)
  // const [currSentence, setCurrSentence] = useState<string>(sentences[randomNumber]);
  const [currSentence, setCurrSentence] = useState<string>("kkk kkk kkk kkk");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [iswrong, setIswrong] = useState<boolean>(false);
  const [time, setTime] = useState<number>(ROUND_TIME);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const resultService = new ResultService();

  useEffect(() => {
    if (!isGameOver && (time === 0 || wordIndex === currSentence.split(' ').length)) {
      resultService.saveResult(ROUND_TIME - time, wordIndex);
      setIsGameOver(true);
    }
  }, [wordIndex, time, isGameOver])

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
      <div className="middle-bar">
        <TypingInput wordCheckFunction={wordCheckFunction} isGameOver={isGameOver} />
        <Clock time={time} setTime={(time: number) => setTime(time)} />
      </div>
      <Leadboards results={resultService.getResults()} />
    </div>
  );
};
