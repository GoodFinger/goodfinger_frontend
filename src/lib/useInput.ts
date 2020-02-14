import { useState, useCallback } from "react";

// custom hook
export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  return [value, handleChange] as [string, typeof handleChange];
}
