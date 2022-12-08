import Input from "@mui/material/Input";
import React, { ChangeEventHandler, KeyboardEvent, useCallback, useState } from "react";
import { SPACE_KEY_CODE } from "../../common/consts";

interface TypingInputProps {
  wordCheckFunction: (value: string) => boolean;
  isGameOver: boolean;
}

export const TypingInput = ({ wordCheckFunction, isGameOver }: TypingInputProps) => {

  const [content, setContent] = useState('');

  const edit = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    if (!isGameOver) {
      setContent(value);
    }
  }, [content]);

  const submit = useCallback((e: KeyboardEvent) => {
    if (e.keyCode === SPACE_KEY_CODE && wordCheckFunction(content)) {
      setContent('');
    }
  }, [content]);

  return <Input type={"text"} sx={{
    direction: 'rtl',
    border: 'none',
    width: '50%',
    height: '100%',
    paddingRight: '1rem',
    outline: 'none',
    backgroundColor: "#e2e2e2"
  }} onChange={edit} onKeyUp={submit} value={content} />;
};
