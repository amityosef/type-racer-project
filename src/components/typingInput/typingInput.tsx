import React, { KeyboardEventHandler, useCallback, useState } from "react";
import { SPACE_KEY_CODE } from "../../common/consts";
import "./typingInput.css";

interface TypingInputProps {
  wordCheckFunction: (value: string) => boolean;
  isTimeUp: boolean;
}

export const TypingInput = ({ wordCheckFunction, isTimeUp }: TypingInputProps) => {

  const [content, setContent] = useState('');

  const edit = useCallback((value: string) => {
    if (!isTimeUp) {
      setContent(value);
    }
  }, [content]);

  const submit = useCallback((e: any) => {
    if (e.keyCode === SPACE_KEY_CODE && wordCheckFunction(content)) {
      setContent('');
    }
  }, [content]);

  return <input type={"text"} className="typing-input" onChange={(e: any) => edit(e.target.value)} onKeyUp={submit} value={content} />;
};
