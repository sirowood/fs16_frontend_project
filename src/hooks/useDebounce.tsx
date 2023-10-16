import { useState, useEffect } from 'react';
const useDebounce = (delay: number) => {
  const [text, setText] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, delay);

    return () => clearTimeout(timer);
  });

  return {
    text,
    setText,
    debouncedText,
  };
};

export default useDebounce;
