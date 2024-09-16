import { useState, useEffect } from "react";

export default function useDebounce<T>(delay: number, value: T) {
  const [debouncedValue, setDebouncedValue] = useState<T>();

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedValue(value);
    }, delay ?? 500);
    return () => {
      clearTimeout(t);
    };
  }, [delay, value]);

  return debouncedValue;
}
