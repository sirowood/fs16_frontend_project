import { useState, useEffect } from 'react';
const useDebounce = (text: string, delay: number) => {
  const [debouncedText, setDebouncedText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, delay);

    return () => clearTimeout(timer);
  });

  return debouncedText;
};

export default useDebounce;
