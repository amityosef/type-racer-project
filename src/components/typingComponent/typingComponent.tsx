import React, { useCallback, useEffect, useState } from "react";
import { MENUTE_IN_SECONDS, ROUND_TIME, SENTENCES_COUNT } from "../../common/consts";
import { sentences } from "../../common/sentences";
import { Clock } from "../clock/clock";
import { Leadboards } from "../leadboards/leadboards";
import { useQuery, useMutation } from '@tanstack/react-query'
import { TextDisplay } from "../textDisplay/textDisplay";
import { TypingInput } from "../typingInput/typingInput";
import "./typingComponent.css";
import { LeadBoardResult } from "../../common/interfaces";

interface TypingComponentProps { }

export const TypingComponent = ({ }: TypingComponentProps) => {
  const randomNumber = Math.floor(Math.random() * SENTENCES_COUNT)
  const [currSentence, setCurrSentence] = useState<string>(sentences[randomNumber]);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [iswrong, setIswrong] = useState<boolean>(false);
  const [time, setTime] = useState<number>(ROUND_TIME);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const { data } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      return fetch('http://localhost:9999/results').then((res: any) => res.json());
    }
  })

  const mutation = useMutation({
    mutationFn: async () => {
      fetch('http://localhost:9999/results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ time: ROUND_TIME - time, score: wordIndex * (MENUTE_IN_SECONDS / (ROUND_TIME - time)) })
      })
    }
  })

  useEffect(() => {
    if (!isGameOver && (time === 0 || wordIndex === currSentence.split(' ').length)) {
      mutation.mutate();
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
      <Leadboards results={!!data ? data.data : []} />
    </div>
  );
};
