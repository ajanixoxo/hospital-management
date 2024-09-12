import * as React from "react";

export default function useDebounce<T>(delay: number, value: T) {
  const [debouncedValue, setDebouncedValue] = React.useState<T>();

  React.useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedValue(value);
    }, delay ?? 500);
    return () => {
      clearTimeout(t);
    };
  }, [delay, value]);

  return debouncedValue;
}
