import Input from "@mui/material/Input";
import React, { ChangeEventHandler, KeyboardEvent, useCallback, useState } from "react";
import { SPACE_KEY_CODE } from "../../common/consts";

interface TypingInputProps {
  wordCheckFunction: (value: string) => boolean;
  isGameOver: boolean;
}

export const TypingInput = ({ wordCheckFunction, isGameOver }: TypingInputProps) => {

  const [content, setContent] = useState('');

  const edit = useCallback((e: any) => {
    const value = (e as unknown as React.FormEvent<HTMLInputElement>).currentTarget.value;
    if (!isGameOver) {
      setContent(value);
    }
  }, [content]);

  const submit = useCallback((charKeyCode: number) => {
    if (charKeyCode === SPACE_KEY_CODE && wordCheckFunction(content)) {
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
  }} onChange={e => edit(e)} onKeyUp={(e: KeyboardEvent) => submit(e.keyCode)} value={content} />;
};
