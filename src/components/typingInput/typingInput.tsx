import React, { KeyboardEventHandler, useCallback, useState } from "react";
import { SPACE_KEY_CODE } from "../../common/consts";
import "./typingInput.css";

interface TypingInputProps {
  wordCheckFunction: (value: string) => boolean;
}

export const TypingInput = ({ wordCheckFunction }: TypingInputProps) => {

  const [content, setContent] = useState('');

  const submitEdit = useCallback((e: any) => {
    if (e.keyCode === SPACE_KEY_CODE && wordCheckFunction(content)) {
      setContent('');
    }
  }, [content]);

  return <input type={"text"} className="typing-input" onChange={(e: any) => setContent(e.target.value)} onKeyUp={submitEdit} value={content} />;
};
